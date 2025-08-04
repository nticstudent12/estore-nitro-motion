import { useEffect } from 'react';
import { useStore } from '@/stores/useStore';
import { sampleProducts } from '@/data/products';

export const useInitializeStore = () => {
  const { setProducts, addToCart } = useStore();

  useEffect(() => {
    // Initialize products
    setProducts(sampleProducts);
    
    // Add a sample product to cart for demo purposes
    const sampleProduct = sampleProducts[0]; // CodeRunner Pro
    addToCart(sampleProduct, 1, '10', 'Black');
  }, [setProducts, addToCart]);
};