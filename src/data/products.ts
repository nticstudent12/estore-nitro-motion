import { Product } from '@/stores/useStore';

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'CodeRunner Pro Hoodie',
    price: 89,
    originalPrice: 119,
    image: '/images/products/coderunner-pro-hoodie.jpg',
    images: [
      '/images/products/coderunner-pro-hoodie.jpg',
      '/images/products/test1.png'
    ],
    category: 'Hoodies',
    description:
      'Premium cotton hoodie designed for men who value comfort and style. Features soft fleece lining and spacious front pocket.',
    rating: 4.9,
    reviews: 234,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Gray', 'Navy'],
    inStock: true,
    featured: true,
    slug: 'coderunner-pro-hoodie'
  },
  {
    id: '2',
    name: 'DevFlow Elite Tee',
    price: 39,
    originalPrice: 49,
    image: '/images/products/devflow-elite-tshirt.jpg',
    images: [
      '/images/products/devflow-elite-tshirt.jpg',
      '/images/products/test1.png'
    ],
    category: 'T-Shirts',
    description:
      'Sleek t-shirt perfect for the modern man. Combines style with ultra-soft fabric for all-day comfort.',
    rating: 4.7,
    reviews: 156,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    inStock: true,
    featured: true,
    slug: 'devflow-elite-tee'
  },
  {
    id: '3',
    name: 'Terminal Walker Sweatshirt',
    price: 69,
    originalPrice: 89,
    image: '/images/products/terminal-walker-sweatshirt.jpg',
    images: [
      '/images/products/terminal-walker-sweatshirt.jpg',
      '/images/products/test1.png'
    ],
    category: 'Hoodies',
    description:
      'Casual everyday sweatshirt for men. Minimalist design with maximum comfort for daily wear.',
    rating: 4.6,
    reviews: 89,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Gray'],
    inStock: true,
    featured: false,
    slug: 'terminal-walker-sweatshirt'
  },
  {
    id: '4',
    name: 'Stack Overflow Jacket',
    price: 129,
    originalPrice: 159,
    image: '/images/products/stack-overflow-jacket.jpg',
    images: [
      '/images/products/stack-overflow-jacket.jpg',
      '/images/products/test1.png'
    ],
    category: 'Jackets',
    description:
      'Premium jacket for the modern man. Advanced materials meet exceptional style and comfort.',
    rating: 4.8,
    reviews: 167,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Navy', 'Charcoal'],
    inStock: true,
    featured: true,
    slug: 'stack-overflow-jacket'
  },
  {
    id: '5',
    name: 'Urban Cargo Pants',
    price: 79,
    originalPrice: 99,
    image: '/images/products/git-push-force-shirt.jpg',
    images: [
      '/images/products/git-push-force-shirt.jpg',
      '/images/products/test1.png'
    ],
    category: 'Cargo Pants',
    description:
      'Tactical cargo pants perfect for urban exploration. Multiple pockets and durable fabric construction.',
    rating: 4.5,
    reviews: 92,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Khaki', 'Olive', 'Gray'],
    inStock: true,
    featured: false,
    slug: 'urban-cargo-pants'
  },
  {
    id: '6',
    name: 'Athletic Performance Tee',
    price: 55,
    originalPrice: 69,
    image: '/images/products/async-runner-shirt.jpg',
    images: [
      '/images/products/async-runner-shirt.jpg',
      '/images/products/test1.png'
    ],
    category: 'T-Shirts',
    description:
      'High-performance athletic shirt for active men. Lightweight, breathable, and moisture-wicking fabric.',
    rating: 4.7,
    reviews: 134,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Blue', 'Red'],
    inStock: true,
    featured: true,
    slug: 'athletic-performance-tee'
  },
  {
    id: '7',
    name: 'Classic Jogger Sweatpants',
    price: 65,
    originalPrice: 85,
    image: '/images/products/coderunner-pro-hoodie.jpg',
    images: [
      '/images/products/coderunner-pro-hoodie.jpg',
      '/images/products/test1.png'
    ],
    category: 'Joggers',
    description:
      'Comfortable jogger sweatpants for men. Perfect for lounging, workouts, and casual wear.',
    rating: 4.6,
    reviews: 201,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Gray', 'Navy', 'Charcoal'],
    inStock: true,
    featured: false,
    slug: 'classic-jogger-sweatpants'
  },
  {
    id: '8',
    name: 'Slim Fit Denim Jeans',
    price: 95,
    originalPrice: 125,
    image: '/images/products/devflow-elite-tshirt.jpg',
    images: [
      '/images/products/devflow-elite-tshirt.jpg',
      '/images/products/test1.png'
    ],
    category: 'Jeans',
    description:
      'Premium slim fit jeans for men. Classic design with modern comfort and durability.',
    rating: 4.8,
    reviews: 312,
    sizes: ['30', '32', '34', '36', '38'],
    colors: ['Dark Blue', 'Light Blue', 'Black', 'Gray'],
    inStock: true,
    featured: true,
    slug: 'slim-fit-denim-jeans'
  },
  {
    id: '9',
    name: 'Athletic Track Pants',
    price: 72,
    originalPrice: 92,
    image: '/images/products/terminal-walker-sweatshirt.jpg',
    images: [
      '/images/products/terminal-walker-sweatshirt.jpg',
      '/images/products/test1.png'
    ],
    category: 'Track Pants',
    description:
      'Professional track pants for men. Ideal for sports, training, and active lifestyle.',
    rating: 4.4,
    reviews: 156,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Navy', 'Red', 'White'],
    inStock: true,
    featured: false,
    slug: 'athletic-track-pants'
  }
];

export const featuredProducts = sampleProducts.filter(product => product.featured);
export const newProducts = sampleProducts.slice(0, 3);
export const saleProducts = sampleProducts.filter(
  product => product.originalPrice && product.originalPrice > product.price
);
