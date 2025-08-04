import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductCarousel from '@/components/ProductCarousel';
import FeaturedSection from '@/components/FeaturedSection';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import AuthModal from '@/components/AuthModal';
import { useInitializeStore } from '@/hooks/useInitializeStore';
import { useStore } from '@/stores/useStore';

const Index = () => {
  useInitializeStore();
  const products = useStore((state) => state.products);

  // Filter products for different sections
  const shoesProducts = products.filter(p => p.category.toLowerCase().includes('shoes'));
  const clothingProducts = products.filter(p => p.category.toLowerCase().includes('clothing') || p.category.toLowerCase().includes('apparel'));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProductCarousel 
        title="Best of Air Max" 
        products={shoesProducts}
        showShopButton={true}
      />
      <ProductCarousel 
        title="Gear Up" 
        products={clothingProducts}
        showShopButton={true}
      />
      <FeaturedSection />
      <Footer />
      <CartDrawer />
      <AuthModal />
    </div>
  );
};

export default Index;
