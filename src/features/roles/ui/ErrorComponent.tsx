import { TableCell, TableRow } from '@/components/table';

const ErrorComponent = () => (
  <TableRow>
    <TableCell colSpan={7}>
      <div className="pt-10 pb-5 text-center text-lg text-black/50">DATA N/A</div>
    </TableCell>
  </TableRow>
);

export default ErrorComponent;
