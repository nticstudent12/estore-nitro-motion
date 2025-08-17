import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useStore } from '@/stores/useStore';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

const CartDrawer = () => {
  const navigate = useNavigate();
  const { 
    cartOpen, 
    cart, 
    cartTotal, 
    cartItemsCount,
    setCartOpen, 
    updateQuantity, 
    removeFromCart,
    clearCart 
  } = useStore();

  const handleCheckout = () => {
    setCartOpen(false);
    navigate('/checkout');
  };

  const drawerVariants = {
    hidden: { x: '100%' },
    visible: { x: 0 }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  };

  if (!cartOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setCartOpen(false)}
        />

        {/* Drawer */}
        <motion.div
          variants={drawerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute right-0 top-0 h-full w-full max-w-md bg-card border-l border-border shadow-2xl"
        >
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="border-b border-border p-6">
              {/* Brand Logo */}
              <div className="flex justify-center mb-4">
                <img 
                  src="/lovable-uploads/ee58d6dd-244b-4797-babc-4935bb4eb035.png" 
                  alt="SM Vêtement Gros" 
                  className="h-8 w-auto opacity-80"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <ShoppingBag className="h-6 w-6" />
                  <h2 className="text-xl font-bold">Cart ({cartItemsCount})</h2>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setCartOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
                  <p className="text-muted-foreground mb-6">
                    Add some products to get started!
                  </p>
                  <Button onClick={() => setCartOpen(false)}>
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence>
                    {cart.map((item, index) => (
                      <motion.div
                        key={`${item.product.id}-${item.size}-${item.color}`}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                        className="flex items-center space-x-4 rounded-xl bg-muted/50 p-4"
                      >
                        {/* Product Image */}
                        <div className="h-16 w-16 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-primary-foreground">
                            {item.product.name.charAt(0)}
                          </span>
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm truncate">
                            {item.product.name}
                          </h4>
                          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                            {item.size && <span>Size: {item.size}</span>}
                            {item.color && <span>Color: {item.color}</span>}
                          </div>
                          <div className="font-bold text-sm mt-1">
                            ${item.product.price}
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => 
                              updateQuantity(
                                item.product.id, 
                                item.quantity - 1, 
                                item.size, 
                                item.color
                              )
                            }
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm font-semibold">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => 
                              updateQuantity(
                                item.product.id, 
                                item.quantity + 1, 
                                item.size, 
                                item.color
                              )
                            }
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive hover:bg-destructive/10"
                            onClick={() => 
                              removeFromCart(item.product.id, item.size, item.color)
                            }
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-border p-6 space-y-4">
                <div className="flex items-center justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                
                <div className="space-y-3">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    onClick={handleCheckout}
                  >
                    Checkout
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full text-destructive border-destructive/20 hover:bg-destructive/10"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CartDrawer;