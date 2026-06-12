import HeroSection from './components/HeroSection';
import TestsMarquee from './components/TestsMarquee';
import StatsCounter from './components/StatsCounter';
import HomeServices from './components/HomeServices';
import HowItWorks from './components/HowItWorks';
import HomePackages from './components/HomePackages';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CTAStrip from './components/CTAStrip';
import { stats } from '@/data/siteData';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TestsMarquee />
      <StatsCounter stats={stats} />
      <HomeServices />
      <HowItWorks />
      <HomePackages />
      <WhyChooseUs />
      <Testimonials />
      <CTAStrip />
    </>
  );
}
