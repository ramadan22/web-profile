'use client';

import ScrollToTopButton from '@/ui/scroll-to-top-button';
import NavbarUI from '@/ui/navbar';
import FooterUI from '@/ui/footer';
import SectionOpeningFeature from '@/features/section-opening';
import SectionEducationalFeature from '@/features/section-educational';
import CareerExperienceFeature from '@/features/section-career-experience';
import SectionSkillFeature from '@/features/section-skill';
import ProjectHistoryFeature from '@/features/section-project-history';
import PersonalLearningFeature from '@/features/section-personal-learning';

const HomePage = () => (
  <>
    <ScrollToTopButton />
    <NavbarUI />
    <div className="mt-[80px] [&>section:nth-child(odd)]:bg-white">
      <section className="pt-20 pb-16">
        <SectionOpeningFeature />
      </section>
      <section className="pt-20 pb-16">
        <SectionEducationalFeature />
      </section>
      <section className="pt-20 pb-16">
        <CareerExperienceFeature />
      </section>
      <section className="pt-20 pb-16">
        <SectionSkillFeature />
      </section>
      <section className="pt-20 pb-16">
        <ProjectHistoryFeature />
      </section>
      <section className="pt-20 pb-16">
        <PersonalLearningFeature />
      </section>
    </div>
    <FooterUI />
  </>
);

export default HomePage;
