import Button from '@/components/button';
import DefaultDialog from '@/components/dialog/DefaultDialog';

type Props = {
  id: string;
  text: string;
  isOpen: boolean;
  isLoading?: boolean;
  handleOpen: (value: boolean) => void;
  handleCounter: (value: string) => void;
}

const ModalDelete = ({
  id, text, isOpen, handleCounter, handleOpen, isLoading,
}: Props) => (
  <DefaultDialog
    isOpen={isOpen}
    title="Delete"
    description={`Are you sure want to delete ${text}`}
    onOpenChange={(value) => handleOpen(value)}
  >
    <div className="grid grid-cols-2 gap-x-4 justify-around">
      <Button variant="outline" className="border-black/50">
        Cancel
      </Button>
      <Button variant="negative" onClick={() => handleCounter(id)}>
        {isLoading ? 'Loading...' : 'Delete'}
      </Button>
    </div>
  </DefaultDialog>
);

export default ModalDelete;
