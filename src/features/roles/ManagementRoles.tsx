'use client';

import { useQuery } from '@tanstack/react-query';
import Button from '@/components/button';
import Icon from '@/components/icon';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/table';
import Card from '@/ui/card';
import { formatDate } from '@/lib/date-fns';
import ErrorComponent from './ui/ErrorComponent';
import { LoadingDataTable } from './ui/Loading';
import { getUsersHasRole, Queries } from '@/services/cms/management-roles';
import Pagination from '@/components/pagination';
import Input from '@/components/input';
import Label from '@/components/Label';
import State from './hooks/State';
import useDebounce from '@/utils/debounce';
import Form from './Form';

const ManagementRolesFeature = () => {
  const {
    page,
    setPage,
    keyword,
    setKeyword,
    isOpenForm,
    setIsOpenForm,
  } = State();

  const debouncedSearch = useDebounce<string>(keyword, 500);

  const {
    data: usersWithRole,
    isLoading: isLoadingUsersWithRole,
    isError: isErrorUsersWithRole,
    refetch: refetchUsersWithRole,
  } = useQuery({
    queryKey: [Queries.GET_USERS_HAS_ROLE, { page, keyword: debouncedSearch }],
    queryFn: () => getUsersHasRole({ page, keyword: debouncedSearch }),
    refetchOnWindowFocus: true,
    // enabled: !!debouncedSearch,
    retry: false,
  });

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl">Management Roles</h1>
          <p className="text-sm text-black/50">Manage Users with Roles</p>
        </div>
        <div className="flex gap-x-4 items-center">
          <Button
            type="button"
            className="flex items-center gap-x-2"
            onClick={() => setIsOpenForm(true)}
          >
            <Icon type="Pencil" className="flex w-4" />
            <Label>Quick Edit</Label>
          </Button>
          <Input
            iconType="Search"
            iconDirection="left"
            classIcon="text-black/50"
            placeholder="Search..."
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
          />
        </div>
      </div>
      <div>
        <Card>
          <Table className="whitespace-nowrap bg-white">
            <TableHeader className="[&_tr]:border-b [&_tr]:text-black/50">
              <TableRow>
                <TableHead>ID User</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Roles</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead>Updated At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoadingUsersWithRole && (
                [1, 2, 3, 4, 5].map((item) => <LoadingDataTable key={item} />)
              )}
              {usersWithRole?.data?.map((item) => (
                <TableRow key={item.id_user}>
                  <TableCell>{item.id_user}</TableCell>
                  <TableCell>{`${item.first_name} ${item.last_name}`}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item?.roles?.replace(',', ', ')}</TableCell>
                  <TableCell>{formatDate(item.created_at, 'yyyy-MM-dd HH:ii')}</TableCell>
                  <TableCell>{formatDate(item.updated_at, 'yyyy-MM-dd HH:ii')}</TableCell>
                </TableRow>
              ))}
              {isErrorUsersWithRole && <ErrorComponent />}
            </TableBody>
          </Table>
          <div className="px-2 pt-10 pb-5">
            <Pagination
              count={usersWithRole?.meta?.total ?? 0}
              page={usersWithRole?.meta?.page}
              perPage={usersWithRole?.meta?.size}
              onPageChange={(value) => setPage(value)}
            />
          </div>
        </Card>
      </div>
      <Form
        isOpen={isOpenForm}
        handleRefetch={() => refetchUsersWithRole()}
        handleOpen={(value) => setIsOpenForm(value)}
      />
    </>
  );
};

export default ManagementRolesFeature;
