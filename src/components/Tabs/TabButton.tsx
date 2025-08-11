import { ButtonHTMLAttributes } from 'react';

interface TabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

/// TODO: Melhorar a ui/ux dos botoes
const TabButton = ({ label, ...props }: TabButtonProps) => {
  return <button {...props}>{label}</button>;
};

export { TabButton };
