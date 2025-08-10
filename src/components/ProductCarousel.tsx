import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useStore } from '@/stores/useStore';
import { Product } from '@/stores/useStore';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
interface ProductCarouselProps {
  title: string;
  products: Product[];
  showShopButton?: boolean;
}

const ProductCarousel = ({ title, products, showShopButton = true }: ProductCarouselProps) => {
  const addToCart = useStore((state) => state.addToCart);

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
  };

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
          {showShopButton && (
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Shop
              </Button>
            </div>
          )}
        </div>

        <Carousel className="w-full">
          <CarouselContent className="gap-4">
            {products.slice(0, 4).map((product, index) => (
              <CarouselItem key={product.id} className="basis-80">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="group overflow-hidden border-0 bg-card hover:shadow-elegant transition-all duration-300">
                     <Link to={`/product/${product.slug}`} className="block">
                    <div className="aspect-square bg-muted overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground line-clamp-2">{product.name}</h3>
                          <p className="text-sm text-muted-foreground">{product.category}</p>
                        </div>
                        <span className="text-lg font-bold text-foreground">₹ {product.price.toLocaleString()}</span>
                      </div>
                      
                      {product.colors && product.colors.length > 0 && (
                        <p className="text-sm text-muted-foreground mb-3">
                          {product.colors.length} Colour{product.colors.length > 1 ? 's' : ''}
                        </p>
                      )}

                      <Button 
                        onClick={() => handleAddToCart(product)}
                        className="w-full"
                        variant="secondary"
                      >
                        Add to Cart
                      </Button>
                    </div>
                    </Link>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductCarousel;