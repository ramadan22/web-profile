'use server';

import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import ScrollToTopButton from '@/ui/scroll-to-top-button';
import NavbarUI from '@/ui/navbar';
import FooterUI from '@/ui/footer';
import SectionOpeningFeature from '@/features/section-opening';
import SectionEducationalFeature from '@/features/section-educational';
import CareerExperienceFeature from '@/features/section-career-experience';
import SectionSkillFeature from '@/features/section-skill';
import ProjectHistoryFeature from '@/features/section-project-history';
import PersonalLearningFeature from '@/features/section-personal-learning';
import { getSectionOpening, queries as QSectionOpening } from '@/services/section-opening';
import { getSectionEducational, queries as QSectionEducational } from '@/services/section-educational';
import { getSectionCareerExperience, queries as QSectionCareerExperience } from '@/services/section-career-experience';

const HomePage = () => {
  const queryClient = new QueryClient();

  async function query() {
    'use server';

    await queryClient.prefetchQuery({
      queryKey: [QSectionOpening.GET_SECTION_OPENING],
      queryFn: getSectionOpening,
    });

    await queryClient.prefetchQuery({
      queryKey: [QSectionEducational.GET_SECTION_EDUCATIONAL],
      queryFn: getSectionEducational,
    });

    await queryClient.prefetchQuery({
      queryKey: [QSectionCareerExperience.GET_SECTION_CAREER_EXPERIENCE],
      queryFn: getSectionCareerExperience,
    });
  }

  query();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ScrollToTopButton />
      <NavbarUI />
      <div className="mt-[80px] [&>section:nth-child(odd)]:bg-white">
        <section>
          <SectionOpeningFeature />
        </section>
        <section>
          <SectionEducationalFeature />
        </section>
        <section>
          <CareerExperienceFeature />
        </section>
        <section>
          <SectionSkillFeature />
        </section>
        <section>
          <ProjectHistoryFeature />
        </section>
        <section className="pt-20 pb-16">
          <PersonalLearningFeature />
        </section>
      </div>
      <FooterUI />
    </HydrationBoundary>
  );
};

export default HomePage;
