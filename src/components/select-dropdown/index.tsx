'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import * as React from 'react';

import { cn } from '@/lib/classnames';
import Icon from '@/components/icon';

type SelectCompontProps<T> = {
  className?: string;
} & T;

const SelectDropdown = SelectPrimitive.Root;

const SelectDropdownGroup = SelectPrimitive.Group;

const SelectDropdownValue = SelectPrimitive.Value;

const SelectDropdownTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectCompontProps<React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'border-input placeholder:text-muted-foreground flex h-10 w-full items-center justify-between rounded-md border bg-transparent pl-3 pr-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon>
      <Icon type="ChevronDown" className="flex w-5 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectDropdownTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectDropdownContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  SelectCompontProps<React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>>
>(({
  className, children, position = 'popper', ...props
}, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'text-popover-foreground relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white shadow-md animate-in fade-in-80',
        position === 'popper' && 'translate-y-1',
        className,
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          'p-1',
          position === 'popper'
          && 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectDropdownContent.displayName = SelectPrimitive.Content.displayName;

const SelectDropdownLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  SelectCompontProps<React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
    {...props}
  />
));
SelectDropdownLabel.displayName = SelectPrimitive.Label.displayName;

const SelectDropdownItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectCompontProps<React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-lightest data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Icon type="Check" className="flex h-auto w-3.5" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectDropdownItem.displayName = SelectPrimitive.Item.displayName;

const SelectDropdownSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  SelectCompontProps<React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('bg-muted -mx-1 my-1 h-px', className)}
    {...props}
  />
));
SelectDropdownSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  SelectDropdown,
  SelectDropdownGroup,
  SelectDropdownValue,
  SelectDropdownTrigger,
  SelectDropdownContent,
  SelectDropdownLabel,
  SelectDropdownItem,
  SelectDropdownSeparator,
};
