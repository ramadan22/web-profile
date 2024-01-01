import { cn } from '@/lib/classnames';

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('skelly animate-pulse rounded-md bg-black/10', className)}
    {...props}
  />
);

export { Skeleton };
