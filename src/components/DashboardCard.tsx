import type { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
  color: string;
}

export const DashboardCard = ({
  title,
  description,
  icon: Icon,
  onClick,
  color,
}: DashboardCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-left border-2 border-transparent hover:border-${color}-500 hover:-translate-y-1`}
    >
      <div className={`inline-flex p-3 rounded-lg bg-${color}-100 text-${color}-600 mb-4`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-${color}-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl`}></div>
    </button>
  );
};
