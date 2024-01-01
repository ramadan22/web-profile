'use client';

import React from 'react';
import { cn } from '@/lib/classnames';
import Icon from '../icon';

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  classIcon?: string;
  classWrapper?: string;
  classInput?: string;
  iconType?: string;
  iconDirection?: 'left' | 'right';
}

const Input = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({
    className, classInput, classIcon, iconType, iconDirection = 'right', ...props
  }, ref) => (
    <div
      className={cn(
        'relative flex h-10 items-center rounded-lg bg-white border-input shadow-sm border pl-3 pr-2 gap-x-2',
        iconDirection === 'left' ? 'flex-row-reverse' : '',
        iconDirection === 'right' ? 'flex-row' : '',
        className,
      )}
    >
      <input
        type="text"
        ref={ref}
        className={cn(
          'flex-1 w-full text-sm font-semibold placeholder:text-gray-light placeholder:font-normal focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          classInput,
        )}
        {...props}
      />
      {iconType && <Icon type={iconType} className={cn(classIcon)} />}
    </div>
  ),
);
Input.displayName = 'Input';

export default Input;
