'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import Icon from '@/components/icon';
import Pagination from '@/components/pagination';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/table';
import Card from '@/ui/card';
import {
  Queries, getUsers, postUsers, putUsers, deleteUsers,
} from '@/services/cms/users';
import Input from '@/components/input';
import Button from '@/components/button';
import { formatDate } from '@/lib/date-fns';
import State from './hooks/State';
import LoadingDataTable from './ui/Loading';
import useDebounce from '@/utils/debounce';
import ErrorComponent from './ui/ErrorComponent';
import FormUsers from './Form';
import UseForm from './hooks/UseForm';
import { SubmitUsersParams } from './types/FormTypes';
import Label from '@/components/Label';
import { messageError, messageSuccess } from '@/lib/toastify';
import ModalDelete from '@/ui/modal/Delete';

const UsersFeature = () => {
  const {
    form, setForm, handleOpenFormEdit, handleSubmitForm,
  } = UseForm();

  const {
    page,
    setPage,
    keyword,
    setKeyword,
    isOpenForm,
    setIsOpenForm,
    payloadsDelete,
    setPayloadsDelete,
  } = State();

  const debouncedSearch = useDebounce<string>(keyword, 500);

  const {
    data: users,
    isLoading: isLoadingUsers,
    isError: isErrorUsers,
    error: errorGetUsers,
    refetch,
  } = useQuery({
    queryKey: [Queries.GET_USERS, { page, keyword: debouncedSearch }],
    queryFn: () => getUsers({ page, keyword: debouncedSearch }),
    refetchOnWindowFocus: true,
    retry: false,
  });

  const { mutate: submit, isPending: isLoadingEdit } = useMutation({
    mutationFn: ({ id, params, status }: SubmitUsersParams) => {
      if (status === 'EDIT') return putUsers({ id, params });
      return postUsers({ params });
    },
    onError: (error) => {
      messageError(error.message);
    },
    onSuccess: (_, variables) => {
      messageSuccess(`Success ${variables.status === 'ADD' ? 'Add' : 'Edit'} data`);
      setIsOpenForm(false);
      refetch();
    },
  });

  const { mutate: submitDelete, isPending: isLoadingDelete } = useMutation({
    mutationFn: ({ id }: { id: string }) => deleteUsers(id),
    onError: (error) => {
      messageError(error.message);
    },
    onSuccess: () => {
      messageSuccess('Success delete data');
      setPayloadsDelete(null);
      refetch();
    },
  });

  useEffect(() => {
    if (errorGetUsers) messageError(errorGetUsers.message);
  }, [errorGetUsers]);

  return (
    <>
      <div className="flex flex-col gap-y-5">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl">All Users</h1>
            <p className="text-sm text-black/50">Member List</p>
          </div>
          <div className="flex gap-x-4 items-center">
            <Button
              type="button"
              className="flex items-center gap-x-1"
              onClick={() => {
                setForm(null);
                setIsOpenForm(true);
              }}
            >
              <Icon type="Plus" className="flex w-4" />
              <Label>Add Data</Label>
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
        <Card>
          <Table className="whitespace-nowrap bg-white">
            <TableHeader className="[&_tr]:border-b [&_tr]:text-black/50">
              <TableRow>
                <TableHead>First Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>Birth Date</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>&nbsp;</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoadingUsers && [1, 2, 3, 4, 5].map((item) => <LoadingDataTable key={item} />)}
              {!isLoadingUsers && users?.data?.map((item) => (
                <TableRow key={item.id_user}>
                  <TableCell>{item.first_name}</TableCell>
                  <TableCell>{item.last_name}</TableCell>
                  <TableCell>{item.gender}</TableCell>
                  <TableCell>{formatDate(item.birth_date, 'dd MMMM yyyy')}</TableCell>
                  <TableCell className="whitespace-normal">
                    <div className="w-[200px] line-clamp-2">
                      {!!item.location?.sub_district?.id && (
                        <>
                          <span className="capitalize">{item.location?.province?.name.toLowerCase()}</span>
                          {', '}
                          <span className="capitalize">{item.location?.regency?.name.toLowerCase()}</span>
                          {', '}
                          <span className="capitalize">{item.location?.district?.name.toLowerCase()}</span>
                          {', '}
                          <span className="capitalize">{item.location?.sub_district?.name.toLowerCase()}</span>
                          {', '}
                        </>
                      )}
                      {!!item.address && item.address}
                    </div>
                  </TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.phone}</TableCell>
                  <TableCell>
                    <div className="flex gap-x-4 justify-end w-[100px]">
                      <Button
                        size="icon"
                        className="flex items-center"
                        type="button"
                        onClick={() => {
                          setIsOpenForm(true);
                          handleOpenFormEdit(item);
                        }}
                      >
                        <Icon type="Pencil" className="flex w-5" />
                      </Button>
                      <Button
                        size="icon"
                        variant="negative"
                        className="flex items-center"
                        onClick={() => setPayloadsDelete({
                          id: item?.id_user,
                          text: item.first_name,
                        })}
                      >
                        <Icon type="Trash" className="flex w-5" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {isErrorUsers && <ErrorComponent />}
            </TableBody>
          </Table>
          <div className="px-2 pt-10 pb-5">
            <Pagination
              count={users?.meta?.total ?? 0}
              page={users?.meta?.page}
              perPage={users?.meta?.size}
              onPageChange={(value) => setPage(value)}
            />
          </div>
        </Card>
      </div>
      <FormUsers
        payload={form}
        isOpen={isOpenForm}
        isLoadingEdit={isLoadingEdit}
        handleCounter={(payloads) => {
          submit(
            handleSubmitForm(payloads, !payloads?.id_user ? 'ADD' : 'EDIT'),
          );
        }}
        handleOpen={(value) => setIsOpenForm(value)}
      />
      <ModalDelete
        id={payloadsDelete?.id || ''}
        text={payloadsDelete?.text || ''}
        isOpen={payloadsDelete !== null}
        isLoading={isLoadingDelete}
        handleOpen={(value) => { if (!value) setPayloadsDelete(null); }}
        handleCounter={(id) => submitDelete({ id })}
      />
    </>
  );
};

export default UsersFeature;
