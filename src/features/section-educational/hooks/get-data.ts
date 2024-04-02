import { useQuery } from '@tanstack/react-query';
import { getSectionEducational, queries } from '@/services/section-educational';

export const useGetSectionEducational = () => useQuery({
  queryFn: async () => getSectionEducational(),
  queryKey: [queries.GET_SECTION_EDUCATIONAL],
});
