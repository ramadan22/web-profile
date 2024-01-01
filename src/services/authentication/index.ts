import { DefaultApiResponseType } from '@/types/ApiResponseTypes';
import { AuthTypes, LoginResponseTypes } from './AuthenticationTypes';
import AxiosInstance from '@/lib/axios';

const authenticate = async ({ email, password }: AuthTypes) => AxiosInstance.post<DefaultApiResponseType<LoginResponseTypes>>('/authentication/signIn', {
  email,
  password,
}, {
  params: {
    type: 'SUPER_ADMIN',
  },
}).then((response) => response.data).catch((error) => error.response);

export const UserService = {
  authenticate,
};
