import { useQuery } from '@tanstack/react-query';
import { getSectionOpening, queries } from '@/services/section-opening';

export const useGetSectionOpening = () => useQuery({
  queryFn: async () => getSectionOpening(),
  queryKey: [queries.GET_SECTION_OPENING],
});
