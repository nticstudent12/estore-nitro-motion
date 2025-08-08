import { motion } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useStore } from '@/stores/useStore';

const HeroSection = () => {
  const { setCartOpen } = useStore();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const glitchVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.02 }
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] repeat" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-medium text-sm mb-6"
            >
              <Star className="w-4 h-4 mr-2 fill-current" />
              Premium Collection 2024
            </motion.div>

            <motion.h1
              variants={glitchVariants}
              whileHover="hover"
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-none mb-6"
            >
              <span className="block text-gradient">Just Do</span>
              <span className="block text-glitch animate-glitch">Everything</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Discover the ultimate collection of premium products designed for developers who demand excellence in every detail.
            </motion.p>

            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="hero"
                  size="lg" 
                  className="group"
                  onClick={() => setCartOpen(true)}
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Story
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start space-x-8 mt-12"
            >
              <div className="text-center">
                <div className="text-3xl font-black text-gradient">500K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-gradient">50K+</div>
                <div className="text-sm text-muted-foreground">Products Sold</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-gradient">4.9</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Hero Product */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-3xl opacity-20 animate-float" />
              
              {/* Product Showcase */}
              <motion.div
                className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 shadow-card"
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="aspect-square bg-gradient-card rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder for product image */}
                  <div className="w-48 h-48 bg-gradient-primary rounded-2xl flex items-center justify-center">
                    <span className="text-6xl font-black text-primary-foreground opacity-50">
                      .e
                    </span>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    NEW
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-4 left-4 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-3"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="text-sm font-bold">Limited Edition</div>
                    <div className="text-xs text-muted-foreground">Developer Collection</div>
                  </motion.div>
                </div>

                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-gradient mb-2">
                    CodeRunner Pro
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Premium clothing designed for developers
                  </p>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl font-black text-foreground">$299</span>
                    <span className="text-lg text-muted-foreground line-through">$399</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;