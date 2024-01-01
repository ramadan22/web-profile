'use client';

import { useQuery } from '@tanstack/react-query';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/table';
import { getRoles, Queries } from '@/services/cms/roles';
import Card from '@/ui/card';
import { formatDate } from '@/lib/date-fns';
import ErrorComponent from './ui/ErrorComponent';
import { LoadingDataTableRoles } from './ui/Loading';

const RolesFeature = () => {
  const { data: roles, isLoading: isLoadingRoles, isError: isErrorRoles } = useQuery({
    queryKey: [Queries.GET_ROLES],
    queryFn: () => getRoles(),
    refetchOnWindowFocus: true,
    retry: false,
  });

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl">All Roles</h1>
          <p className="text-sm text-black/50">Active Roles</p>
        </div>
      </div>
      <div>
        <Card className="w-1/2">
          <Table>
            <TableHeader className="[&_tr]:border-b [&_tr]:text-black/50">
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Created At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoadingRoles && [1, 2, 3].map((item) => <LoadingDataTableRoles key={item} />)}
              {roles?.data?.map((item) => (
                <TableRow key={item.id_role}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.slug}</TableCell>
                  <TableCell>{formatDate(item.created_at, 'yyyy-MM-dd HH:ii')}</TableCell>
                </TableRow>
              ))}
              {isErrorRoles && <ErrorComponent />}
            </TableBody>
          </Table>
        </Card>
      </div>
    </>
  );
};

export default RolesFeature;
