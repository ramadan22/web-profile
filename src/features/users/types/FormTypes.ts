import {
  GetUsersParams as GetUsersParamsAliases,
  SubmitUsersParams as SubmitUsersParamsAliases,
  UserTypes as UsersTypesAliases,
  Location,
} from '@/services/cms/users/types/UsersTypes';

export type FormUsersPayloadTypes = {
  id_user?: string;
  first_name?: string;
  last_name?: string;
  gender?: string | number;
  location?: Location;
  address?: string;
  birth_date?: string;
  phone?: string;
  email?: string;
  password?: string;
} | null;

export type FormTypes = {
  isOpen: boolean;
  isLoadingEdit: boolean;
  payload: FormUsersPayloadTypes;
  handleOpen: (value: boolean) => void;
  handleCounter: (payloads: FormUsersPayloadTypes) => void;
}

export type GetUsersParams = GetUsersParamsAliases;
export type SubmitUsersParams = SubmitUsersParamsAliases;
export type UsersTypes = UsersTypesAliases | null;
