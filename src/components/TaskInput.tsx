import { TaskInputProps } from './types';

function TaskInput(props: Readonly<TaskInputProps>) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    props.onChange?.(value);
  };

  return (
    <div className="m-1 p-1">
      <p className="text-black">{props.title}</p>
      <input
        onChange={handleChange}
        className="p-1 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none bg-gray-100 rounded-lg shadow-md border-t-2 text-black"
        max={props.maxLength}
        type="text"
        name={props.id}
        id={props.id}
        value={props.value}
      />
    </div>
  );
}

export { TaskInput };
