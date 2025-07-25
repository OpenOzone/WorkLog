import { IntegerInputProps } from './types';

function IntegerInput(props: Readonly<IntegerInputProps>) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    props.onChange?.(parseInt(value, 10));
  };

  return (
    <div className="m-1 p-1 bg-white rounded-lg shadow">
      <p className="text-black">{props.title}</p>
      <input
        onChange={handleChange}
        className="p-1 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none bg-gray-100 rounded-lg shadow-xl border-t-2 text-black"
        max={props.maxLength}
        type="number"
        name={props.id}
        id={props.id}
        value={props.value}
      />
    </div>
  );
}

export { IntegerInput };
