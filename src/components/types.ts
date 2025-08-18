import { ReactNode } from 'react';

export interface Marker {
  readonly id: number;
  readonly hour: number;
  readonly minute: number;
  readonly task: string;
}

export interface MarkerProps extends Marker {
  readonly handleUpdateMarker?: ({ id, hour, minute, task }: Marker) => void;
  readonly handleRemoveMarker: () => void;
  readonly index: number;
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
  readonly disabled?: boolean;
}

export interface ButtonProps {
  readonly label: string;
  readonly btnClassName?: string;
  readonly onClick?: () => void;
}

export type AutocompleteItem = {
  value: string;
  label: string;
};

export interface BaseAutocompleteProps {
  children: ReactNode;
  items: AutocompleteItem[];
  isEnableCreateItem?: boolean;
  handleCreateItem?: VoidFunction;
}

export interface Task extends AutocompleteItem {}
