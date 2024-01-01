import AxiosInstance from '@/lib/axios';
import { DefaultApiResponseType } from '@/types/ApiResponseTypes';
import { UserHasRoleParamsTypes, UserHasRoleResponseTypes, getUserRoleListResponseTypes } from './types';
import { SubmitPayloadTypes } from '@/features/roles/types/FormTypes';

const Queries = {
  GET_USERS_HAS_ROLE: 'GET_USERS_HAS_ROLE',
  GET_USERS_HAS_ROLE_BY_ID: 'GET_USERS_HAS_ROLE_BY_ID',
};

const getUsersHasRole = (
  params: UserHasRoleParamsTypes,
): Promise<DefaultApiResponseType<UserHasRoleResponseTypes[]>> => new Promise((
  resolve,
  reject,
) => {
  AxiosInstance.get('/cms/management-roles', {
    params,
  }).then((response) => (
    resolve(response.data)
  )).catch((error) => (
    reject(error?.response?.data || error)
  ));
});

const getUserRoleList = (
  idUser: string,
): Promise<DefaultApiResponseType<getUserRoleListResponseTypes[]>> => new Promise((
  resolve,
  reject,
) => {
  AxiosInstance.get(`/cms/management-roles/user-has-role/${idUser}`).then((response) => (
    resolve(response.data)
  )).catch((error) => (
    reject(error?.response?.data || error)
  ));
});

const postAssignRole = ({
  idUser,
  params,
}: SubmitPayloadTypes) => new Promise((resolve, reject) => {
  AxiosInstance.post(`/cms/management-roles/user-has-role/${idUser}`, params).then((response) => (
    resolve(response.data)
  )).catch((error) => (
    reject(error?.response?.data || error)
  ));
});

export {
  Queries,
  getUsersHasRole,
  getUserRoleList,
  postAssignRole,
};
