import { FC, SVGProps } from "react";

// Define the types for the props
interface CardProps {
  title: string;
  value: string;
  subtitle: string;
  icon?: FC<SVGProps<SVGSVGElement>>;
  bgColor?: string; // Optional background color class from Tailwind
}

const Card: FC<CardProps> = ({ title, value, subtitle, icon: IconComponent, bgColor = "bg-white" }) => {
  return (
    <div className={`rounded-xl p-6 shadow-md w-full max-w-sm ${bgColor}`}>
      <div className="flex items-center space-x-2">
        {/* Icon */}
        <div className="text-gray-700">
          {IconComponent && <IconComponent className="w-6 h-6" />}
        </div>

        {/* Title */}
        <p className="text-gray-700 font-medium text-sm">{title}</p>
      </div>

      {/* Main content */}
      <div className="mt-4">
        <p className="text-4xl font-bold text-gray-900">{value}</p>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
