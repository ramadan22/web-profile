import { DefaultApiResponseType } from '@/types/ApiResponseTypes';
import {
  GetUsersParams, SubmitUsersParams, SubmitUsersResponse, UsersTypes,
} from './types/UsersTypes';
import AxiosInstance from '@/lib/axios';

const Queries = {
  GET_USERS: 'GET_USERS',
};

const getUsers = async (
  params: GetUsersParams,
): Promise<DefaultApiResponseType<UsersTypes>> => new Promise((resolve, reject) => {
  AxiosInstance.get('/cms/users', {
    params,
  }).then((response) => (
    resolve(response.data)
  )).catch((error) => (
    reject(error?.response?.data || error)
  ));
});

const postUsers = ({
  params,
}: SubmitUsersParams): Promise<DefaultApiResponseType<SubmitUsersResponse>> => new Promise((
  resolve,
  reject,
) => {
  AxiosInstance.post('/cms/users', params)
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => {
      reject(error?.response?.data || error);
    });
});

const putUsers = ({
  id,
  params,
}: SubmitUsersParams): Promise<DefaultApiResponseType<SubmitUsersResponse>> => new Promise((
  resolve,
  reject,
) => {
  AxiosInstance.put(`/cms/users/${id}`, params)
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => {
      reject(error?.response?.data || error);
    });
});

const deleteUsers = (id: string) => new Promise((resolve, reject) => {
  AxiosInstance.delete(`/cms/users/${id}`).then((response) => {
    resolve(response.data);
  }).catch((error) => {
    reject(error?.response?.data || error);
  });
});

export {
  Queries,
  getUsers,
  putUsers,
  postUsers,
  deleteUsers,
};
