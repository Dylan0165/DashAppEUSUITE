import { Header } from '../components/Header';
import { useAuth } from '../hooks/useAuth';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  const { user, loading, logout } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} onLogout={logout} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
