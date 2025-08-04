import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CartDrawer from '@/components/CartDrawer';
import { useInitializeStore } from '@/hooks/useInitializeStore';

const Index = () => {
  useInitializeStore();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CartDrawer />
    </div>
  );
};

export default Index;
