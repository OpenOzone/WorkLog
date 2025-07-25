export interface MarkerProps {
  readonly id: number;
  readonly hour: number;
  readonly minute: number;
  readonly handleUpdateMarker?: (id: number, hour: number, minute: number) => void;
}

export interface IntegerInputProps {
  readonly id: string;
  readonly title: string;
  readonly maxLength: number;
  readonly value: number;
  readonly onChange?: (value: number) => void;
}

export interface ButtonProps {
  readonly label: string;
  readonly btnClassName?: string;
  readonly onClick?: () => void;
}
