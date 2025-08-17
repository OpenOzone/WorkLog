import { useRef } from 'react';
import { IntegerInput } from './IntegerInput';
import { TaskInput } from './TaskInput';

import type { MarkerProps } from './types';

const MarkerInputs = (props: Readonly<MarkerProps>) => {
  const hourRef = useRef<HTMLInputElement>(null);
  const minutesRef = useRef<HTMLInputElement>(null);
  const taskRef = useRef<HTMLInputElement>(null);

  const handleHourChange = (value: number) => {
    let hour = value;

    if (value < 0 || value > 23) hour = 0;
    props.handleUpdateMarker?.({ ...props, hour });

    if (value > 9 && minutesRef.current && hourRef.current) {
      hourRef.current.valueAsNumber = value;
      minutesRef.current.focus();
    }
  };

  const handleMinuteChange = (value: number) => {
    let minute = value;

    if (value < 0 || value > 59) minute = 0;
    props.handleUpdateMarker?.({ ...props, minute });

    if (value > 9 && minutesRef.current && taskRef.current) {
      minutesRef.current.valueAsNumber = value;
      taskRef.current.focus();
    }
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
          ref={hourRef}
        />
        <span className="mt-[27px] text-black text-lg">:</span>
        <IntegerInput
          id="minute"
          title="Minutos"
          maxLength={59}
          onChange={handleMinuteChange}
          value={props.minute}
          ref={minutesRef}
        />
      </div>
      <TaskInput
        id="task"
        title="Atividade"
        maxLength={59}
        onChange={handleTaskChange}
        value={props.task}
        ref={taskRef}
      />
    </div>
  );
};

export { MarkerInputs };
