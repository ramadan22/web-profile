import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import DefaultDialog from '@/components/dialog/DefaultDialog';
import { FormTypesProps, SubmitPayloadTypes } from './types/FormTypes';
import Combobox from '@/components/combobox';
import Label from '@/components/Label';
import Button from '@/components/button';
import { getUsers, Queries as QGetUsers } from '@/services/cms/users';
import UseForm from './hooks/UseForm';
import useDebounce from '@/utils/debounce';
import { CheckBoxWithLabel } from '@/components/checkbox';
import { getUserRoleList, postAssignRole, Queries as QGetUserHasRole } from '@/services/cms/management-roles';
import { getRoles, Queries as QRoles } from '@/services/cms/roles';
import { messageError, messageSuccess } from '@/lib/toastify';

const Form = ({ isOpen, handleOpen, handleRefetch }: FormTypesProps) => {
  const {
    form,
    setForm,
    search,
    setSearch,
    userSelected,
    setUserSelected,
    handleFormInput,
  } = UseForm();

  const debouncedSearch = useDebounce<string>(search, 500);

  const { data: users, isLoading: isLoadingUsers, isError: isErrorUsers } = useQuery({
    queryKey: [QGetUsers.GET_USERS, { keyword: debouncedSearch }],
    queryFn: () => getUsers({ keyword: debouncedSearch }),
    enabled: !!debouncedSearch,
    refetchOnWindowFocus: true,
    retry: false,
  });

  const {
    data: userHasRole,
    isLoading: isLoadingUserHasRole,
    isError: isErrorUserHasRole,
  } = useQuery({
    queryKey: [QGetUserHasRole.GET_USERS_HAS_ROLE_BY_ID, userSelected?.id_user],
    queryFn: () => getUserRoleList(userSelected?.id_user || ''),
    refetchOnWindowFocus: true,
    enabled: !!userSelected,
    retry: false,
  });

  const {
    data: roles,
    // isLoading: isLoadingRoles,
    // isError: isErrorRoles,
  } = useQuery({
    queryKey: [QRoles.GET_ROLES],
    queryFn: () => getRoles(),
    refetchOnWindowFocus: true,
    retry: false,
  });

  const { mutate: submit, isPending: isLoadingSubmit } = useMutation({
    mutationFn: ({ idUser, params }: SubmitPayloadTypes) => postAssignRole({ idUser, params }),
    onError: (error) => {
      messageError(error.message);
    },
    onSuccess: () => {
      messageSuccess('Success manage user role data');
      handleOpen(false);
      handleRefetch();
    },
  });

  useEffect(() => {
    if (userHasRole) {
      setForm(userHasRole?.data?.map((item) => ({
        id_role: item.id_role,
        slug: item.slug,
      })) || null);
    }
  }, [userHasRole]);

  return (
    <DefaultDialog
      isOpen={isOpen}
      title="Add user has role data"
      description="Assign user with role"
      onOpenChange={(value) => {
        setSearch('');
        setUserSelected(null);
        handleOpen(value);
      }}
    >
      <form
        className="flex flex-col gap-y-10"
        onSubmit={(e) => {
          e.preventDefault();
          submit({
            idUser: userSelected?.id_user || '',
            params: form?.map((item) => ({ id_role: item.id_role })) || [],
          });
        }}
      >
        <div className="flex flex-col gap-y-2">
          <Label>Find User</Label>
          <Combobox
            selected={null}
            widthDropdown={400}
            isError={isErrorUsers}
            isLoading={isLoadingUsers}
            onChangeInputSearch={(value) => setSearch(value)}
            options={users?.data?.map((item) => ({ text: item.email, value: item.id_user })) || []}
            onChange={(value) => {
              const find = users?.data?.find((item) => item.id_user === value.value) || null;
              setUserSelected(find);
            }}
          />
        </div>
        {userSelected && (
          <>
            <div className="flex flex-col gap-y-4 text-sm">
              <div className="grid grid-cols-5">
                <Label>Name</Label>
                <p className="flex gap-x-4 col-span-4">
                  <span>:</span>
                  <span>
                    {`${userSelected.first_name} ${userSelected.last_name}`}
                  </span>
                </p>
              </div>
              <div className="grid grid-cols-5">
                <Label>Email</Label>
                <p className="flex gap-x-4 col-span-4">
                  <span>:</span>
                  <span>
                    {userSelected.email}
                  </span>
                </p>
              </div>
              <div className="grid grid-cols-5">
                <Label>Phone</Label>
                <p className="flex gap-x-4 col-span-4">
                  <span>:</span>
                  <span>
                    {userSelected.phone}
                  </span>
                </p>
              </div>
            </div>
            {!isLoadingUserHasRole && !isErrorUserHasRole }
            <div className="flex gap-x-6 flex-wrap">
              {roles?.data?.map((item) => {
                const findRoleBySlug = form?.find((
                  item2,
                ) => item2.slug === item.slug);

                return (
                  <CheckBoxWithLabel
                    key={item.id_role}
                    label={item.name}
                    checked={!!findRoleBySlug}
                    onClick={() => handleFormInput(item)}
                  />
                );
              })}
            </div>
          </>
        )}
        <div className="grid grid-cols-2 gap-x-4 mt-5 mb-2">
          <Button
            type="button"
            variant="outline"
            className="border-black/50"
            onClick={() => {
              setSearch('');
              setUserSelected(null);
              handleOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button disabled={(!form || (form !== null && form?.length < 1)) || isLoadingSubmit}>
            {isLoadingSubmit ? 'Loading...' : 'Submit'}
          </Button>
        </div>
      </form>
    </DefaultDialog>
  );
};

export default Form;
