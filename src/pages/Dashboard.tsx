import { useNavigate } from 'react-router-dom';
import { DashboardCard } from '../components/DashboardCard';
import { Cloud, Type, User, Settings } from 'lucide-react';
import { EUCLOUD_URL, EUTYPE_URL } from '../config/constants';

export const Dashboard = () => {
  const navigate = useNavigate();

  const apps = [
    {
      title: 'EUCloud',
      description: 'Access your cloud storage and files',
      icon: Cloud,
      color: 'blue',
      onClick: () => window.location.href = EUCLOUD_URL,
    },
    {
      title: 'EUType',
      description: 'Create and edit documents',
      icon: Type,
      color: 'green',
      onClick: () => window.location.href = EUTYPE_URL,
    },
    {
      title: 'Profile',
      description: 'Manage your account settings',
      icon: User,
      color: 'purple',
      onClick: () => navigate('/profile'),
    },
    {
      title: 'Settings',
      description: 'Configure your preferences',
      icon: Settings,
      color: 'orange',
      onClick: () => navigate('/settings'),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome to EUsuite</h2>
        <p className="text-gray-600">Select an application to get started</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {apps.map((app) => (
          <DashboardCard
            key={app.title}
            title={app.title}
            description={app.description}
            icon={app.icon}
            color={app.color}
            onClick={app.onClick}
          />
        ))}
      </div>
    </div>
  );
};
