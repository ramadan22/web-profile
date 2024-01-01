import { UserTypes } from '@/services/users/profile/types';

export type FormTypes = {
  id_role: string;
  slug: string;
};

export type SubmitPayloadTypes = {
  idUser: string;
  params: { id_role: string }[];
}

export type FormTypesProps = {
  isOpen: boolean;
  handleOpen: (value: boolean) => void;
  handleRefetch: () => void;
}

export type GetUsersParamsFormTypes = {
  keyword?: string;
}

export type UserSelectedTypes = UserTypes;
