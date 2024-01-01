/* eslint-disable no-param-reassign */

import type {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import axios from 'axios';
import { getSession, signOut } from 'next-auth/react';
import { SessionTypes } from '@/services/authentication/AuthenticationTypes';
import { DefaultApiResponseType } from '@/types/ApiResponseTypes';

const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const onRequest = async (
  config: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> => {
  config.headers['x-api-key'] = process.env.NEXT_PUBLIC_X_API_KEY;
  const session = await getSession();

  const user = session?.user as SessionTypes;

  if (session && !config.headers.Authorization) {
    if (session?.user) {
      config.headers.Authorization = user.token;
    }
  }

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => Promise.reject(error);

const onResponse = (response: AxiosResponse): AxiosResponse => {
  if (response.status === 401) {
    // for signout if token expire or for refresh token
  }

  return response;
};

const onResponseError = (error: AxiosError) => Promise.reject(error);

AxiosInstance.interceptors.request.use(onRequest, onRequestError);
AxiosInstance.interceptors.response.use(
  (response: AxiosResponse) => onResponse(response),
  (error: AxiosError<DefaultApiResponseType>) => {
    if (error.response?.data.status === 401) {
      signOut({ callbackUrl: '/' });
    }
    return onResponseError(error);
  },
);

export default AxiosInstance;
