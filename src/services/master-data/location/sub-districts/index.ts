import { DefaultApiResponseType } from '@/types/ApiResponseTypes';

import AxiosInstance from '@/lib/axios';
import { SubDistrictsTypes } from '../types';

const Queries = {
  GET_SUB_DISTRICTS: 'GET_SUB_DISTRICTS',
};

const getSubDistricts = async (
  idDistrict: number | null,
): Promise<DefaultApiResponseType<SubDistrictsTypes[]>> => AxiosInstance.get(`/master-data/location/sub-districts/${idDistrict}`).then((response) => (
  response.data
)).catch((error) => (
  error.response.data
));

export {
  Queries,
  getSubDistricts,
};
