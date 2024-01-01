import { cn } from '@/lib/classnames';
import { CardTypesProps } from './types/CardTypes';

const Card = ({ children, className }: CardTypesProps) => (
  <div className={cn('rounded-lg shadow-lg border overflow-hidden p-4 bg-white', className)}>
    {children}
  </div>
);

export default Card;
