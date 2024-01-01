import { DefaultApiResponseType } from '@/types/ApiResponseTypes';

import AxiosInstance from '@/lib/axios';
import { RegenciesTypes } from '../types';

const Queries = {
  GET_REGENCIES: 'GET_REGENCIES',
};

const getRegencies = async (
  idProvince: number | null,
): Promise<DefaultApiResponseType<RegenciesTypes[]>> => AxiosInstance.get(`/master-data/location/regencies/${idProvince}`).then((response) => (
  response.data
)).catch((error) => (
  error.response.data
));

export {
  Queries,
  getRegencies,
};
