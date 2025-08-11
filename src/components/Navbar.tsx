import { motion } from 'framer-motion';
import { Search, ShoppingBag, User, Menu, X, ChevronDown, Heart } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useStore } from '@/stores/useStore';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const { 
    cartItemsCount, 
    toggleCart, 
    toggleAuthModal, 
    user,
    setUser,
    searchQuery,
    setSearchQuery
  } = useStore();

  const handleCategoryFilter = (category: string) => {
    const params = new URLSearchParams();
    params.set('category', category);
    navigate(`/products?${params.toString()}`);
  };

  const handleSpecialFilter = (filter: string) => {
    const params = new URLSearchParams();
    params.set('filter', filter);
    navigate(`/products?${params.toString()}`);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-accent transition-colors font-medium">
              Main
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-foreground hover:text-accent">
                    Shop
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-6 p-6 md:w-[500px] lg:w-[600px]">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h3 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                            By Category
                          </h3>
                          <div className="space-y-3">
                            <div>
                              <h4 className="font-medium text-foreground mb-2">Tops</h4>
                              <div className="space-y-1">
                                <button
                                  onClick={() => handleCategoryFilter('T-Shirts')}
                                  className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                  T-Shirts
                                </button>
                                <button
                                  onClick={() => handleCategoryFilter('Jackets')}
                                  className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                  Jackets & Coats
                                </button>
                                <button
                                  onClick={() => handleCategoryFilter('Hoodies')}
                                  className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                  Hoodies & Sweatshirts
                                </button>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-medium text-foreground mb-2">Bottoms</h4>
                              <div className="space-y-1">
                                <button
                                  onClick={() => handleCategoryFilter('Cargo Pants')}
                                  className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                  Cargo Pants
                                </button>
                                <button
                                  onClick={() => handleCategoryFilter('Joggers')}
                                  className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                  Joggers & Sweatpants
                                </button>
                                <button
                                  onClick={() => handleCategoryFilter('Jeans')}
                                  className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                  Jeans
                                </button>
                                <button
                                  onClick={() => handleCategoryFilter('Track Pants')}
                                  className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                  Track Pants
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-6">
                          <div>
                            <h3 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider flex items-center">
                              <span className="mr-2">🔥</span> Featured
                            </h3>
                            <button
                              onClick={() => handleSpecialFilter('latest')}
                              className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                              Last Drop
                            </button>
                          </div>
                          
                          <div>
                            <h3 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                              Shop
                            </h3>
                            <button
                              onClick={() => navigate('/products')}
                              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-md transition-colors"
                            >
                              All Products
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/gallery" className="text-foreground hover:text-accent transition-colors font-medium">
              Gallery
            </Link>
            <Link to="/about" className="text-foreground hover:text-accent transition-colors font-medium">
              About
            </Link>
            <Link to="/support" className="text-foreground hover:text-accent transition-colors font-medium">
              Support
            </Link>
            <Link to="/community" className="text-foreground hover:text-accent transition-colors font-medium">
              Community
            </Link>
          </div>


          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              onClick={toggleAuthModal}
              className="hidden md:flex items-center text-sm font-medium"
            >
              Login
            </Button>

            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleCart}
                className="relative"
              >
                <ShoppingBag className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    {cartItemsCount}
                  </motion.span>
                )}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden py-4 border-t border-border/50"
          >
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-foreground font-medium px-2 py-1" onClick={() => setMobileMenuOpen(false)}>
                Main
              </Link>
              <Link to="/products" className="text-foreground font-medium px-2 py-1" onClick={() => setMobileMenuOpen(false)}>
                Shop
              </Link>
              <Link to="/gallery" className="text-foreground font-medium px-2 py-1" onClick={() => setMobileMenuOpen(false)}>
                Gallery
              </Link>
              <Link to="/about" className="text-foreground font-medium px-2 py-1" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link to="/support" className="text-foreground font-medium px-2 py-1" onClick={() => setMobileMenuOpen(false)}>
                Support
              </Link>
              <Link to="/community" className="text-foreground font-medium px-2 py-1" onClick={() => setMobileMenuOpen(false)}>
                Community
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;