'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import React from 'react';
import Icon from '@/components/icon';

import { cn } from '@/lib/classnames';

interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  className?: string;
  classIndicator?: string;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, classIndicator, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-4 w-4 shrink-0 rounded border border-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-white data-[state=checked]:text-black',
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center text-current', classIndicator)}
    >
      <Icon type="Check" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

interface CheckBoxWithLabelProps extends CheckboxProps {
  classWrapper?: string;
  label: string;
}

const CheckBoxWithLabel = ({ label, classWrapper, ...checkboxProps }: CheckBoxWithLabelProps) => (
  <div className={cn('flex items-center gap-x-2', classWrapper)}>
    <Checkbox {...checkboxProps} id={label?.toLowerCase()} />
    <label
      htmlFor={label?.toLowerCase()}
      className="text-sm font-[600] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {label}
    </label>
  </div>
);

export { CheckBoxWithLabel, Checkbox };
