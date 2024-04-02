import { useQuery } from '@tanstack/react-query';
import { getSectionOpening } from '@/services/section-opening';

export const useGetSectionOpening = () => useQuery({
  queryFn: async () => getSectionOpening(),
  queryKey: ['GET_SECTION_OPENING'],
});
