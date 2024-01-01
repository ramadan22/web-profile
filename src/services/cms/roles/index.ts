import AxiosInstance from '@/lib/axios';
import { DefaultApiResponseType } from '@/types/ApiResponseTypes';
import { GetRolesParamsTypes, RoleTypes } from './types/RolesTypes';

const Queries = {
  GET_ROLES: 'GET_ROLES',
};

const getRoles = async (
  params: GetRolesParamsTypes = null,
): Promise<DefaultApiResponseType<RoleTypes[]>> => new Promise((resolve, reject) => {
  AxiosInstance.get('/cms/roles', {
    params,
  }).then((response) => (
    resolve(response.data)
  )).catch((error) => (
    reject(error?.response?.data || error)
  ));
});

export {
  Queries,
  getRoles,
};
