import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/dialog';

interface Props {
  isOpen?: boolean;
  title: string;
  onOpenChange: (value: boolean) => void;
  description?: string;
  children?: React.ReactNode;
  classHeader?: string;
  width?: number;
}

const DefaultModal = ({
  isOpen = false,
  onOpenChange,
  title,
  description,
  children,
  classHeader,
  width,
}: Props) => (
  <Dialog open={isOpen} onOpenChange={onOpenChange}>
    <DialogContent
      className="bg-white w-[493px]"
      style={{ width: `${width}px` }}
    >
      <DialogHeader className={`mb-6 ${classHeader}`}>
        <DialogTitle className="font-[600] text-[24px] leading-[32px]">{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      {children}
    </DialogContent>
  </Dialog>
);

export default DefaultModal;
