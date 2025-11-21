import { useState, useEffect } from 'react';
import { API_BASE_URL, LOGIN_URL } from '../config/constants';
import type { User } from '../types/auth';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const validateAuth = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}/api/auth/validate`, {
        method: 'GET',
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        if (data.valid && data.username) {
          setUser({ username: data.username, email: data.email });
        } else {
          throw new Error('Invalid token');
        }
      } else {
        throw new Error('Authentication failed');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed');
      setUser(null);
      // Redirect to login with current path as redirect
      const currentPath = window.location.pathname;
      window.location.href = `${LOGIN_URL}?redirect=${encodeURIComponent(currentPath)}`;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await fetch(`${API_BASE_URL}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
      setUser(null);
      window.location.href = LOGIN_URL;
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  useEffect(() => {
    validateAuth();
  }, []);

  return { user, loading, error, logout, refetch: validateAuth };
};
