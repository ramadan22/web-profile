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
import { getSectionOpening, queries } from '@/services/section-opening';

const HomePage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [queries.GET_SECTION_OPENING],
    queryFn: getSectionOpening,
  });

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
