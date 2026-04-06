import Hero from '@/components/sections/Hero';
import TrustRow from '@/components/sections/TrustRow';
import BeforeAfterSlider from '@/components/sections/BeforeAfterSlider';
import ServicesPreview from '@/components/sections/ServicesPreview';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ProcessSteps from '@/components/sections/ProcessSteps';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import Faq from '@/components/sections/Faq';
import LeadForm from '@/components/sections/LeadForm';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustRow />
      <BeforeAfterSlider />
      <ServicesPreview />
      <WhyChooseUs />
      <ProcessSteps />
      <TestimonialsSection />
      <Faq />
      <LeadForm />
    </>
  );
}
