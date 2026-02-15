import HeroSection from './components/HeroSection';
import StatsCounter from './components/StatsCounter';
import HomeServices from './components/HomeServices';
import HomePackages from './components/HomePackages';
import WhyChooseUs from './components/WhyChooseUs';
import CTAStrip from './components/CTAStrip';
import { stats } from '@/data/siteData';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsCounter stats={stats} />
      <HomeServices />
      <HomePackages />
      <WhyChooseUs />
      <CTAStrip />
    </>
  );
}
