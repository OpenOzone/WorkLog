import { IntegerInput } from './IntegerInput';
import { TaskInput } from './TaskInput';

import type { MarkerProps } from './types';

const MarkerInputs = (props: Readonly<MarkerProps>) => {
  const handleHourChange = (value: number) => {
    if (value < 0 || value > 23) return props.handleUpdateMarker?.({ ...props, hour: 0 });

    props.handleUpdateMarker?.({ ...props, hour: value });
  };

  const handleMinuteChange = (value: number) => {
    if (value < 0 || value > 59) return props.handleUpdateMarker?.({ ...props, minute: 0 });

    props.handleUpdateMarker?.({ ...props, minute: value });
  };

  const handleTaskChange = (value: string) => {
    props.handleUpdateMarker?.({ ...props, task: value });
  };

  return (
    <div className="flex flex-row gap-2 py-1">
      <div className="flex flex-row">
        <IntegerInput
          id="hour"
          title="Hora"
          maxLength={24}
          onChange={handleHourChange}
          value={props.hour}
        />
        <span className="mt-[27px] text-black text-lg">:</span>
        <IntegerInput
          id="minute"
          title="Minutos"
          maxLength={59}
          onChange={handleMinuteChange}
          value={props.minute}
        />
      </div>
      <TaskInput
        id="task"
        title="Atividade"
        maxLength={59}
        onChange={handleTaskChange}
        value={props.task}
      />
    </div>
  );
};

export { MarkerInputs };
