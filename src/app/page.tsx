import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import ValuePropositionSection from '@/components/home/ValuePropositionSection';
import ProcessShowcase from '@/components/home/ProcessShowcase';
import TechnologyShowcase from '@/components/home/TechnologyShowcase';
import Projects from '@/components/home/Projects';
import Testimonials from '@/components/home/Testimonials';
import ContactCTA from '@/components/home/ContactCTA';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ValuePropositionSection />
      <ProcessShowcase />
      <TechnologyShowcase />
      <Projects />
      <Testimonials />
      <ContactCTA />
    </Layout>
  );
}
