import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import CartDrawer from '@/components/CartDrawer';
import AuthModal from '@/components/AuthModal';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useStore } from '@/stores/useStore';
import { useInitializeStore } from '@/hooks/useInitializeStore';

const Products = () => {
  useInitializeStore();
  
  const { products, addToCart } = useStore();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['Shoes', 'Clothing', 'Accessories'];
  const genders = ['Men', 'Women', 'Unisex'];
  const priceRanges = [
    { label: 'Under ₹ 2,500', value: '0-2500' },
    { label: '₹ 2,501 - ₹ 7,500', value: '2501-7500' },
    { label: '₹ 7,501 - ₹ 12,500', value: '7501-12500' },
    { label: 'Over ₹ 12,500', value: '12500+' }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => 
        selectedCategories.some(cat => product.category.toLowerCase().includes(cat.toLowerCase()))
      );
    }

    if (selectedGenders.length > 0) {
      filtered = filtered.filter(product => 
        selectedGenders.some(gender => product.category.toLowerCase().includes(gender.toLowerCase()))
      );
    }

    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(product => {
        if (priceRange === '12500+') return product.price >= 12500;
        return product.price >= min && product.price <= max;
      });
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Keep original order for featured
        break;
    }

    return filtered;
  }, [products, selectedCategories, selectedGenders, priceRange, sortBy]);

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    }
  };

  const handleGenderChange = (gender: string, checked: boolean) => {
    if (checked) {
      setSelectedGenders([...selectedGenders, gender]);
    } else {
      setSelectedGenders(selectedGenders.filter(g => g !== gender));
    }
  };

  const handleAddToCart = (product: any) => {
    addToCart(product, 1);
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map(category => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
              />
              <Label htmlFor={category} className="text-sm">{category}</Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Gender */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Gender</h3>
        <div className="space-y-3">
          {genders.map(gender => (
            <div key={gender} className="flex items-center space-x-2">
              <Checkbox
                id={gender}
                checked={selectedGenders.includes(gender)}
                onCheckedChange={(checked) => handleGenderChange(gender, checked as boolean)}
              />
              <Label htmlFor={gender} className="text-sm">{gender}</Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Shop By Price</h3>
        <div className="space-y-3">
          {priceRanges.map(range => (
            <div key={range.value} className="flex items-center space-x-2">
              <Checkbox
                id={range.value}
                checked={priceRange === range.value}
                onCheckedChange={(checked) => setPriceRange(checked ? range.value : '')}
              />
              <Label htmlFor={range.value} className="text-sm">{range.label}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AuthModal />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              New ({filteredProducts.length})
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Mobile Filter Button */}
            <div className="md:hidden">
              <Sheet open={showFilters} onOpenChange={setShowFilters}>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Sort By" />
                <ChevronDown className="h-4 w-4" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-8">
              <FilterContent />
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="group overflow-hidden border-0 bg-card hover:shadow-elegant transition-all duration-300 cursor-pointer">
                    <Link to={`/product/${product.slug}`} className="block">
                    <div className="aspect-square bg-muted overflow-hidden">
                      <img
                        src={`https://images.unsplash.com/${product.image}?w=400&h=400&fit=crop&auto=format`}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3 md:p-4">
                      <div className="mb-2">
                        {product.featured && (
                          <span className="text-xs text-accent font-medium">Just In</span>
                        )}
                        <h3 className="font-semibold text-foreground line-clamp-2 text-sm md:text-base">
                          {product.name}
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground">{product.category}</p>
                      </div>
                      
                      {product.colors && product.colors.length > 0 && (
                        <p className="text-xs text-muted-foreground mb-2">
                          {product.colors.length} Colour{product.colors.length > 1 ? 's' : ''}
                        </p>
                      )}

                      <div className="flex items-center justify-between">
                        <span className="font-bold text-foreground">
                          ₹ {product.price.toLocaleString()}
                        </span>
                        <Button 
                          size="sm"
                          onClick={() => handleAddToCart(product)}
                          className="hidden group-hover:flex"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No products found matching your filters.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedGenders([]);
                    setPriceRange('');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Products;
