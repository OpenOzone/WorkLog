import { IntegerInput } from './IntegerInput';
import { MarkerProps } from './types';

function Marker(props: Readonly<MarkerProps>) {
  const handleHourChange = (value: number) => {
    if (value < 0 || value > 23) return props.handleUpdateMarker?.(props.id, 0, props.minute);

    props.handleUpdateMarker?.(props.id, value, props.minute);
  };

  const handleMinuteChange = (value: number) => {
    if (value < 0 || value > 59) return props.handleUpdateMarker?.(props.id, props.hour, 0);

    props.handleUpdateMarker?.(props.id, props.hour, value);
  };

  return (
    <div className="flex flex-row">
      <IntegerInput
        id="hour"
        title="Hora"
        maxLength={24}
        onChange={handleHourChange}
        value={props.hour}
      />
      <IntegerInput
        id="minute"
        title="Minutos"
        maxLength={59}
        onChange={handleMinuteChange}
        value={props.minute}
      />
    </div>
  );
}

export { Marker };
