import { useQuery } from '@tanstack/react-query';
import { getSectionCareerExperience, queries } from '@/services/section-career-experience';

export const useGetSectionCareerExperience = () => useQuery({
  queryFn: async () => getSectionCareerExperience(),
  queryKey: [queries.GET_SECTION_CAREER_EXPERIENCE],
});
