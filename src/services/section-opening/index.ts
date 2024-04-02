import AxiosInstance from '@/lib/axios';

const queries = {
  GET_SECTION_OPENING: 'GET_SECTION_OPENING',
};

const getSectionOpening = async () => {
  const result = await AxiosInstance.get('/service/section-opening')
    .then((response) => response.data)
    .catch((error) => error);

  return result;
};

export {
  getSectionOpening,
  queries,
};
