import { DefaultApiResponseType } from '@/types/ApiResponseTypes';

import AxiosInstance from '@/lib/axios';
import { ProvincesTypes } from '../types';

const Queries = {
  GET_PROVINCES: 'GET_PROVINCES',
};

const getProvinces = async (): Promise<DefaultApiResponseType<ProvincesTypes[]>> => AxiosInstance.get('/master-data/location/provinces').then((response) => (
  response.data
)).catch((error) => (
  error.response.data
));

export {
  Queries,
  getProvinces,
};
