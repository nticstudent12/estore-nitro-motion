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
  const clothingProducts = products.filter(p => ['hoodies', 't-shirts', 'sweatshirts', 'jackets', 'athletic', 'performance'].includes(p.category.toLowerCase()));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProductCarousel 
        title="Featured Collection" 
        products={clothingProducts}
        showShopButton={true}
      />
      <ProductCarousel 
        title="New Arrivals" 
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
