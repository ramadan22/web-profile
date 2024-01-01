import { DefaultApiResponseType } from '@/types/ApiResponseTypes';

import AxiosInstance from '@/lib/axios';
import { DistrictsTypes } from '../types';

const Queries = {
  GET_DISTRICTS: 'GET_DISTRICTS',
};

const getDistricts = async (
  idRegency: number | null,
): Promise<DefaultApiResponseType<DistrictsTypes[]>> => AxiosInstance.get(`/master-data/location/districts/${idRegency}`).then((response) => (
  response.data
)).catch((error) => (
  error.response.data
));

export {
  Queries,
  getDistricts,
};
