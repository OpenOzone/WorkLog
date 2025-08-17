import { forwardRef, useState } from 'react';
import { AutocompleteItem, TaskInputProps } from './types';
import { Autocomplete } from './Autocomplete';

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
];

const TaskInput = forwardRef<HTMLInputElement, Readonly<TaskInputProps>>((props, ref) => {
  const [filteredTaks, setFilteredTaks] = useState<AutocompleteItem[]>(frameworks ?? []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    props.onChange?.(value);

    setFilteredTaks(frameworks.filter(item => item.value.includes(value.toLocaleLowerCase())));
  };

  return (
    <div className="m-1 p-1 w-full">
      <p className="text-black">{props.title}</p>

      <Autocomplete items={filteredTaks}>
        <input
          ref={ref}
          onChange={handleChange}
          className="w-full p-1 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none bg-gray-100 rounded-lg shadow-md border-t-2 text-black"
          max={props.maxLength}
          type="text"
          name={props.id}
          id={props.id}
          value={props.value}
          disabled={props.disabled}
        />
      </Autocomplete>
    </div>
  );
});

export { TaskInput };
