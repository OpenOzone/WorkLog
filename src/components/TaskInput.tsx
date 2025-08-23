import { forwardRef, useEffect, useState } from 'react';

import { Autocomplete } from './Autocomplete';

import type { AutocompleteItem, Task, TaskInputProps } from './types';
import { useIndexedDB } from '@/lib/hooks/useIndexedDB';

const TaskInput = forwardRef<HTMLInputElement, Readonly<TaskInputProps>>((props, ref) => {
  const { getAll, add, remove, ready } = useIndexedDB<Task>('tasks');
  const [tasks, setTasks] = useState<AutocompleteItem[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<AutocompleteItem[]>([]);

  useEffect(() => {
    if (ready) {
      getAll().then(setTasks);
    }
  }, [ready, getAll]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    props.onChange?.(value);

    setFilteredTasks(tasks.filter(item => item.value.includes(value.toLocaleLowerCase())));
  };

  const trigger = (
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
  );

  const handleAdd = async () => {
    console.log('teste', trigger.props.values);
    if (trigger.props.value) {
      const { label, value } = trigger.props.value;
      await add({ label, value });

      setFilteredTasks(await getAll());
    }
  };

  const handleRemove = async (id?: number) => {
    if (!id) return;

    await remove(id);
    setFilteredTasks(await getAll());
  };

  return (
    <div className="m-1 p-1 w-full">
      <p className="text-black">{props.title}</p>

      <Autocomplete items={filteredTasks} isEnableCreateItem handleCreateItem={handleAdd}>
        {trigger}
      </Autocomplete>
    </div>
  );
});

export { TaskInput };
