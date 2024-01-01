'use client';

import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as React from 'react';

import { cn } from '@/lib/classnames';

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

type PopoverContentProps = React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
  usePortal?: boolean;
  className?: string;
  align?: 'center' | 'start' | 'end';
  sideOffset?: number;
};

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(({
  className, align = 'center', usePortal = true, sideOffset = 4, ...props
}, ref) => {
  const PopoverPrimitiveContent = (
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'z-50 w-72 rounded-md border bg-white p-4 shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-top-2 pointer-events-auto',
        className,
      )}
      {...props}
    />
  );

  if (usePortal) {
    return (
      <PopoverPrimitive.Portal>
        {PopoverPrimitiveContent}
      </PopoverPrimitive.Portal>
    );
  }
  return PopoverPrimitiveContent;
});
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
