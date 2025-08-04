import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Types
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  description: string;
  rating: number;
  reviews: number;
  sizes?: string[];
  colors?: string[];
  inStock: boolean;
  featured?: boolean;
  slug: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
  color?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

interface AppState {
  // Cart
  cart: CartItem[];
  cartOpen: boolean;
  addToCart: (product: Product, quantity: number, size?: string, color?: string) => void;
  removeFromCart: (productId: string, size?: string, color?: string) => void;
  updateQuantity: (productId: string, quantity: number, size?: string, color?: string) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setCartOpen: (open: boolean) => void;
  
  // Auth
  user: User | null;
  authModalOpen: boolean;
  isSignUp: boolean;
  setUser: (user: User | null) => void;
  toggleAuthModal: () => void;
  setAuthModalOpen: (open: boolean) => void;
  setIsSignUp: (isSignUp: boolean) => void;
  
  // Products
  products: Product[];
  setProducts: (products: Product[]) => void;
  
  // UI
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  
  // Quick Actions
  quickActionsOpen: boolean;
  toggleQuickActions: () => void;
  
  // Computed values
  cartTotal: number;
  cartItemsCount: number;
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Cart state
      cart: [],
      cartOpen: false,
      
      // Cart actions
      addToCart: (product, quantity, size, color) => {
        const currentCart = get().cart;
        const existingItem = currentCart.find(
          item => 
            item.product.id === product.id && 
            item.size === size && 
            item.color === color
        );
        
        if (existingItem) {
          set({
            cart: currentCart.map(item =>
              item.product.id === product.id && 
              item.size === size && 
              item.color === color
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          });
        } else {
          set({
            cart: [...currentCart, { product, quantity, size, color }]
          });
        }
      },
      
      removeFromCart: (productId, size, color) => {
        set({
          cart: get().cart.filter(
            item => !(
              item.product.id === productId && 
              item.size === size && 
              item.color === color
            )
          )
        });
      },
      
      updateQuantity: (productId, quantity, size, color) => {
        if (quantity <= 0) {
          get().removeFromCart(productId, size, color);
          return;
        }
        
        set({
          cart: get().cart.map(item =>
            item.product.id === productId && 
            item.size === size && 
            item.color === color
              ? { ...item, quantity }
              : item
          )
        });
      },
      
      clearCart: () => set({ cart: [] }),
      toggleCart: () => set({ cartOpen: !get().cartOpen }),
      setCartOpen: (open) => set({ cartOpen: open }),
      
      // Auth state
      user: null,
      authModalOpen: false,
      isSignUp: false,
      
      // Auth actions
      setUser: (user) => set({ user }),
      toggleAuthModal: () => set({ authModalOpen: !get().authModalOpen }),
      setAuthModalOpen: (open) => set({ authModalOpen: open }),
      setIsSignUp: (isSignUp) => set({ isSignUp }),
      
      // Products
      products: [],
      setProducts: (products) => set({ products }),
      
      // UI state
      searchQuery: '',
      setSearchQuery: (query) => set({ searchQuery: query }),
      
      // Quick Actions
      quickActionsOpen: false,
      toggleQuickActions: () => set({ quickActionsOpen: !get().quickActionsOpen }),
      
      // Computed values
      get cartTotal() {
        return get().cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
      },
      
      get cartItemsCount() {
        return get().cart.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: 'estore-storage',
      partialize: (state) => ({
        cart: state.cart,
        user: state.user,
        searchQuery: state.searchQuery,
      }),
    }
  )
);