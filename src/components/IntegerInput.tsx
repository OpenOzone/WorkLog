import { forwardRef } from 'react';
import { IntegerInputProps } from './types';

const IntegerInput = forwardRef<HTMLInputElement, Readonly<IntegerInputProps>>(
  ({ ...props }, ref) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;

      props.onChange?.(parseInt(value, 10));
    };

    return (
      <div className="m-1 p-1 w-[60px]">
        <p className="text-black">{props.title}</p>
        <input
          {...props}
          ref={ref}
          type="number"
          id={props.id}
          name={props.id}
          value={props.value}
          max={props.maxLength}
          onChange={handleChange}
          className="p-1 w-full align-middle appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none bg-gray-100 rounded-lg shadow-md border-t-2 text-black"
        />
      </div>
    );
  }
);

export { IntegerInput };
