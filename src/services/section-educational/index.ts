import AxiosInstance from '@/lib/axios';
import { DefaultApiResponseType } from '@/types/ApiResponseTypes';
import { getSectionEducationalTypes } from './types';

const queries = {
  GET_SECTION_EDUCATIONAL: 'GET_SECTION_EDUCATIONAL',
};

const getSectionEducational = async (): Promise<
  DefaultApiResponseType<getSectionEducationalTypes[]>
> => new Promise((resolve, reject) => {
  AxiosInstance.get('/service/section-educational')
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getSectionEducational,
  queries,
};
