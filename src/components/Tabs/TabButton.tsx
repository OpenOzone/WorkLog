import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, ReactElement } from 'react';

interface TabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isActiveTab: boolean;
  icon?: ReactElement;
}

const TabButton = ({ label, icon, isActiveTab, ...props }: TabButtonProps) => {
  return (
    <button
      className={cn(
        'cursor-pointe relative inline-flex items-center justify-center gap-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#F5F5F5] hover:bg-white hover:text-blue-400 h-9 rounded-md px-3 text-black border-none active:border-none focus:border-none focus:outline-none',
        { 'text-blue-600 bg-white ': isActiveTab }
      )}
      {...props}
    >
      {icon} {label}
    </button>
  );
};

export { TabButton };
