import * as React from 'react';

import { cn } from '@/lib/classnames';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: React.ReactNode;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, icon, ...props }, ref) => (
    <div
      className={cn(
        'border-input flex items-center rounded-2lg border bg-white px-4 pb-4 rounded-lg shadow-sm',
        icon && 'gap-x-2.5',
      )}
    >
      <textarea
        className={cn(
          'grow py-4 text-sm leading-[22px] font-semibold placeholder:text-gray-light placeholder:font-normal focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 resize-none',
          className,
        )}
        rows={4}
        ref={ref}
        {...props}
      />

      <div className="self-end">
        {icon}
      </div>
    </div>
  ),
);
Textarea.displayName = 'Textarea';

export { Textarea };
