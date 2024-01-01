'use client';

import * as React from 'react';
import { addDays, format } from 'date-fns';
import Icon from '@/components/icon';

import { cn } from '@/lib/classnames';
import Button from '@/components/button';
import Calendar from '@/components/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select';

export const DatePickerWithPresets = () => {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            'w-[240px] justify-start text-left font-normal',
            !date && 'text-muted-foreground',
          )}
        >
          <Icon type="Calendar" className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="center"
        className="flex w-auto flex-col space-y-2 p-2"
      >
        <Select
          onValueChange={(value) => setDate(addDays(new Date(), Number(value)))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="0">Today</SelectItem>
            <SelectItem value="1">Tomorrow</SelectItem>
            <SelectItem value="3">In 3 days</SelectItem>
            <SelectItem value="7">In a week</SelectItem>
          </SelectContent>
        </Select>
        <div className="rounded-md border">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </div>
      </PopoverContent>
    </Popover>
  );
};
