import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const FeaturedSection = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-4 tracking-tight">
            FLIGHT ESSENTIALS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Your built-to-last, all-week wears—but with style only .eStore can deliver.
          </p>
          <Button size="lg" className="px-8">
            Shop
          </Button>
        </motion.div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">The Essentials</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="group relative overflow-hidden rounded-lg aspect-[4/5] bg-gradient-subtle"
          >
            <img
              src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=750&fit=crop&auto=format"
              alt="Men's Essentials"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <Button variant="secondary" size="lg">
                Men's
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="group relative overflow-hidden rounded-lg aspect-[4/5] bg-gradient-subtle"
          >
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=750&fit=crop&auto=format"
              alt="Women's Essentials"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <Button variant="secondary" size="lg">
                Women's
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="group relative overflow-hidden rounded-lg aspect-[4/5] bg-gradient-subtle"
          >
            <img
              src="https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=750&fit=crop&auto=format"
              alt="Kids' Essentials"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <Button variant="secondary" size="lg">
                Kids'
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;