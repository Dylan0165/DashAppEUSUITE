import { Bell, Shield, Palette } from 'lucide-react';

export const Settings = () => {
  const settingsSections = [
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Configure notification preferences',
      color: 'blue',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Manage security settings',
      color: 'red',
    },
    {
      icon: Palette,
      title: 'Appearance',
      description: 'Customize theme and display',
      color: 'purple',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Settings</h2>
        <p className="text-gray-600">Manage your application preferences</p>
      </div>

      <div className="space-y-6">
        {settingsSections.map((section) => {
          const Icon = section.icon;
          return (
            <div
              key={section.title}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className={`bg-${section.color}-100 rounded-lg p-3`}>
                  <Icon className={`h-6 w-6 text-${section.color}-600`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                  <p className="text-gray-600 text-sm">{section.description}</p>
                </div>
                <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors">
                  Configure
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
