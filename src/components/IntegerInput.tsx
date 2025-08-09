import { IntegerInputProps } from './types';

function IntegerInput(props: Readonly<IntegerInputProps>) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    props.onChange?.(parseInt(value, 10));
  };

  return (
    <div className="m-1 p-1 w-[60px]">
      <p className="text-black">{props.title}</p>
      <input
        onChange={handleChange}
        className="p-1 w-full align-middle appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none bg-gray-100 rounded-lg shadow-md border-t-2 text-black"
        max={props.maxLength}
        type="number"
        name={props.id}
        id={props.id}
        value={props.value}
        maxLength={2}
      />
    </div>
  );
}

export { IntegerInput };
