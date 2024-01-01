import AxiosInstance from '@/lib/axios';
import { DefaultApiResponseType } from '@/types/ApiResponseTypes';
import { UserTypes } from './types';

const getProfile = async (token: string) => AxiosInstance.get<DefaultApiResponseType<UserTypes>>('/service/users/profile', {
  headers: {
    Authorization: token,
  },
}).then((response) => response.data);

export {
  getProfile,
};
