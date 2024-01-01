'use client';

import * as React from 'react';
import Button from '@/components/button';
import {
  Command,
  CommandGroup,
  CommandItem,
} from '@/components/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/popover';
import Input from '@/components/input';
import Icon from '@/components/icon';

type OptionTypes = {
  value: string | number;
  text: string;
}

type Props = {
  isLoading?: boolean;
  isError?: boolean;
  widthDropdown?: number;
  options: OptionTypes[];
  selected: OptionTypes | null;
  onChange: (value: OptionTypes) => void;
  onChangeInputSearch?: (value: string) => void;
}

const Combobox = ({
  isLoading,
  isError,
  selected,
  options,
  onChange,
  widthDropdown = 200,
  onChangeInputSearch,
}: Props) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [search, setSearch] = React.useState('');

  const data = options.filter((
    item,
  ) => search === '' || item.text.toLowerCase().includes(search.toLowerCase()));

  React.useEffect(() => {
    if (Object.keys(selected || {}).length > 0) {
      setValue(`${selected?.value}`);
    }
  }, [selected]);

  return (
    <Popover
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) setSearch('');
        setOpen(isOpen);
      }}
    >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? <span>{options.find((item) => item.value === value)?.text}</span>
            : <span className="text-gray-light">Select Options</span>}
          <Icon type="ChevronDown" className={`flex ${!value ? 'text-gray-light' : ''}`} />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="p-0"
        style={{ width: `${widthDropdown}px` }}
      >
        <Command>
          <Input
            iconType="Search"
            classIcon="flex w-5"
            placeholder="Search Options..."
            onChange={(event) => {
              if (onChangeInputSearch) onChangeInputSearch(event.target.value);
              if (!onChangeInputSearch) setSearch(event.target.value);
            }}
          />
          {!isLoading && !isError && data.length < 1 && (
            <p className="text-center pt-4 pb-3">No data found.</p>
          )}
          {isLoading && (
            <p className="text-center pt-4 pb-3">Loading...</p>
          )}
          <CommandGroup
            style={{ height: data.length > 7 ? '265px' : 'auto' }}
            className="overflow-y-auto"
          >
            {data.length > 0 && data.map((item) => (
              <CommandItem
                key={item.value}
                value={`${item.value}`}
                onSelect={(currentValue) => {
                  setSearch('');
                  setValue(currentValue === value ? '' : currentValue);
                  onChange(item);
                  setOpen(false);
                }}
              >
                <div className="truncate">
                  {item.text}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Combobox;
