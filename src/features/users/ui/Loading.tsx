import { Skeleton } from '@/components/skeleton';
import { TableCell, TableRow } from '@/components/table';

const LoadingDataTable = () => (
  <TableRow>
    <TableCell>
      <Skeleton className="h-[20px] w-full leading-[48px]" />
    </TableCell>
    <TableCell>
      <Skeleton className="h-[20px] w-full leading-[48px]" />
    </TableCell>
    <TableCell>
      <Skeleton className="h-[20px] w-full leading-[48px]" />
    </TableCell>
    <TableCell>
      <Skeleton className="h-[20px] w-full leading-[48px]" />
    </TableCell>
    <TableCell className="flex flex-col gap-y-2">
      <Skeleton className="h-[20px] w-full leading-[48px]" />
      <Skeleton className="h-[20px] w-full leading-[48px]" />
    </TableCell>
    <TableCell>
      <Skeleton className="h-[20px] w-full leading-[48px]" />
    </TableCell>
    <TableCell>
      <Skeleton className="h-[20px] w-full leading-[48px]" />
    </TableCell>
    <TableCell>
      <div className="flex gap-x-4 justify-end w-[100px]">
        <Skeleton className="w-[32px] h-[32px] leading-[48px]" />
        <Skeleton className="w-[32px] h-[32px] leading-[48px]" />
      </div>
    </TableCell>
  </TableRow>
);

export default LoadingDataTable;
