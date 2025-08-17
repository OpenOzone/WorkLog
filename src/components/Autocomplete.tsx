import { useState } from 'react';

import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from './Command';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';

import type { BaseAutocompleteProps } from './types';

export function Autocomplete(props: Readonly<BaseAutocompleteProps>) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{props.children}</PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
        <Command className="bg-black">
          <CommandList>
            <CommandEmpty>Nenhum item encontrado.</CommandEmpty>
            <CommandGroup>
              {props.items?.map(item => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={currentValue => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
            {props.items?.length === 0 && <CommandItem>Criar item +</CommandItem>}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
