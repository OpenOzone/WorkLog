import { ButtonProps } from './types';

function Button(props: Readonly<ButtonProps>) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    props.onClick?.();
  };

  return (
    <button onClick={handleClick} className={`w-full px-4 py-2 text-sm ${props.btnClassName}`}>
      {props.label}
    </button>
  );
}

export { Button };
