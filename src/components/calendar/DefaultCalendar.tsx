'use client';

import * as React from 'react';
import {
  format, subMonths,
} from 'date-fns';

import { id } from 'date-fns/locale';
import { cn } from '@/lib/classnames';
import Icon from '@/components/icon';
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

type Props = {
  value?: string | null | undefined;
  onChange: (value: string) => void;
}

const DefaultCalendar = ({ value = '', onChange }: Props) => {
  const [date, setDate] = React.useState<Date>();
  const [isOpen, setIsOpen] = React.useState(false);

  const currentDate = new Date();

  const [dateMonth, setDateMonth] = React.useState(format(date || currentDate, 'M'));

  const [dateYear, setDateYear] = React.useState(format(date || currentDate, 'yyyy'));

  const months = Array.from({ length: 12 }, (_, index) => ({
    text: format(subMonths(new Date(), index), 'MMMM', { locale: id }),
    value: format(subMonths(new Date(), index), 'M'),
  })).reverse();

  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 40;
  const endYear = currentYear + 0;

  const years = Array.from({ length: endYear - startYear + 1 }, (_, index) => startYear + index);

  React.useEffect(() => {
    if (value) {
      setDateMonth(format(new Date(`${value}`), 'M'));
      setDateYear(format(new Date(`${value}`), 'yyyy'));
      setDate(new Date(`${value}`));
    }
  }, [value]);

  return (
    <Popover onOpenChange={setIsOpen} open={isOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'w-full justify-between text-left font-normal',
            !date && 'text-gray-light',
          )}
        >
          {date ? format(date, 'PPP', { locale: id }) : <span>Pick a date</span>}
          <Icon type="Calendar" className="flex" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="center"
        className="flex w-auto flex-col space-y-2 p-2"
      >
        <div className="flex gap-x-4">
          <Select
            value={dateMonth}
            onValueChange={(month) => {
              setDateMonth(month);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent position="popper">
              {months.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.text}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={dateYear}
            onValueChange={(year) => {
              setDateYear(year);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent position="popper">
              {years.map((year) => (
                <SelectItem key={year} value={`${year}`}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="rounded-md border">
          <Calendar
            mode="single"
            month={new Date(Number(dateYear), Number(dateMonth) - 1, 1)}
            selected={date}
            onSelect={(dateValue) => {
              setIsOpen(false);
              setDate(dateValue);
              onChange(format(new Date(`${dateValue}`), 'yyyy-MM-dd'));
            }}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DefaultCalendar;
