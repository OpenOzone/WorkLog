export interface Marker {
  readonly id: number;
  readonly hour: number;
  readonly minute: number;
  readonly task: string;
}

export interface MarkerProps extends Marker {
  readonly handleUpdateMarker?: ({ id, hour, minute, task }: Marker) => void;
  readonly handleRemoveMarker: () => void;
}

export interface MarkerRemoverProps {
  handleRemove: () => void;
}

export interface IntegerInputProps {
  readonly id: string;
  readonly title: string;
  readonly maxLength: number;
  readonly value: number;
  readonly onChange?: (value: number) => void;
}

export interface TaskInputProps {
  readonly id: string;
  readonly title: string;
  readonly maxLength: number;
  readonly value: string;
  readonly onChange?: (value: string) => void;
}

export interface ButtonProps {
  readonly label: string;
  readonly btnClassName?: string;
  readonly onClick?: () => void;
}
