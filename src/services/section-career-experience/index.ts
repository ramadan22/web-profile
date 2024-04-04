import AxiosInstance from '@/lib/axios';
import { DefaultApiResponseType } from '@/types/ApiResponseTypes';
import { getSectionCareerExperienceTypes } from './types';

const queries = {
  GET_SECTION_CAREER_EXPERIENCE: 'GET_SECTION_CAREER_EXPERIENCE',
};

const getSectionCareerExperience = async (): Promise<
  DefaultApiResponseType<getSectionCareerExperienceTypes[]>
> => new Promise((resolve, reject) => {
  AxiosInstance.get('/service/section-career-experience')
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getSectionCareerExperience,
  queries,
};
