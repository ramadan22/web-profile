'use client';

import { LinkProps } from 'next/link';
import React from 'react';
import { cn } from '@/lib/classnames';

type TableBasicProps = {
  className?: string;
  variant?: string;
  nextLinkProps?: Omit<LinkProps, 'href'>;
} & React.HTMLAttributes<HTMLTableElement>;

type TableComponentProps<T> = {
  className?: string;
} & T;

const TableBasic = React.forwardRef<HTMLTableElement, TableBasicProps>(
  ({ className, variant, ...props }, ref) => (
    <div className="w-full overflow-auto">
      <table
        ref={ref}
        className={cn(
          'w-full caption-bottom text-sm',
          variant === 'alternate'
            ? 'is-table-alternate group border-separate border-spacing-x-0 border-spacing-y-4'
            : '',
          className,
        )}
        {...props}
      />
    </div>
  ),
);
TableBasic.displayName = 'TableBasic';

const TableBasicHeader = React.forwardRef<
  HTMLTableSectionElement,
  TableComponentProps<React.HTMLAttributes<HTMLTableSectionElement>>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn('[&_tr]:bg-[#E8EBEE] [&_tr]:border-0', className)}
    {...props}
  />
));
TableBasicHeader.displayName = 'TableBasicHeader';

const TableBasicBody = React.forwardRef<
  HTMLTableSectionElement,
  TableComponentProps<React.HTMLAttributes<HTMLTableSectionElement>>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn(
      '[&_tr:last-child]:border-0',
      'group-[.is-table-alternate_td]:p-5',
      'group-[.is-table-alternate_td:first-child]:rounded-l-2xl group-[.is-table-alternate_td:last-child]:rounded-r-2xl group-[.is-table-alternate_td]:bg-white',
      className,
    )}
    {...props}
  />
));
TableBasicBody.displayName = 'TableBasicBody';

const TableBasicFooter = React.forwardRef<
  HTMLTableSectionElement,
  TableComponentProps<React.HTMLAttributes<HTMLTableSectionElement>>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn('text-primary-foreground bg-primary font-medium', className)}
    {...props}
  />
));
TableBasicFooter.displayName = 'TableBasicFooter';

const TableBasicRow = React.forwardRef<
  HTMLTableRowElement,
  TableComponentProps<React.HTMLAttributes<HTMLTableRowElement>>
>(({ className, ...props }, ref) => (
  <tr ref={ref} className={cn('bg-white py-4', className)} {...props} />
));
TableBasicRow.displayName = 'TableBasicRow';

const TableBasicHead = React.forwardRef<
  HTMLTableCellElement,
  TableComponentProps<React.ThHTMLAttributes<HTMLTableCellElement>>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'h-12 py-3 px-5 text-center font-semibold text-dark [&:has([role=checkbox])]:pr-0',
      'group-[.is-table-alternate_th]:px-5',
      className,
    )}
    {...props}
  />
));
TableBasicHead.displayName = 'TableBasicHead';

const TableBasicCell = React.forwardRef<
  HTMLTableCellElement,
  TableComponentProps<React.TdHTMLAttributes<HTMLTableCellElement>>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      'px-5 py-3 text-center align-middle [&:has([role=checkbox])]:pr-0',
      className,
    )}
    {...props}
  />
));
TableBasicCell.displayName = 'TableBasicCell';

const TableBasicCaption = React.forwardRef<
  HTMLTableCaptionElement,
  TableComponentProps<React.HTMLAttributes<HTMLTableCaptionElement>>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn('text-muted-foreground mt-4 text-sm', className)}
    {...props}
  />
));
TableBasicCaption.displayName = 'TableBasicCaption';

export {
  TableBasic,
  TableBasicBody,
  TableBasicCaption,
  TableBasicCell,
  TableBasicFooter,
  TableBasicHead,
  TableBasicHeader,
  TableBasicRow,
};
