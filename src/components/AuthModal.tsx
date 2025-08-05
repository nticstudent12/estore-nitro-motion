import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useStore } from '@/stores/useStore';
import { useToast } from '@/hooks/use-toast';

const AuthModal = () => {
  const { authModalOpen, isSignUp, setAuthModalOpen, setIsSignUp, setUser } = useStore();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock authentication
    const user = {
      id: '1',
      email,
      name: isSignUp ? name : email.split('@')[0],
      avatar: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format`
    };
    
    setUser(user);
    setAuthModalOpen(false);
    
    // Show success toast
    toast({
      title: isSignUp ? "Account created!" : "Welcome back!",
      description: isSignUp ? "Your account has been created successfully." : "You have been signed in successfully.",
    });
    
    // Reset form
    setEmail('');
    setPassword('');
    setName('');
  };

  const handleClose = () => {
    setAuthModalOpen(false);
  };

  return (
    <AnimatePresence>
      {authModalOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-background rounded-lg shadow-elegant z-50 p-8"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="text-center flex-1">
                <div className="w-8 h-8 mx-auto mb-4">
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-foreground">
                    <path d="M24 7.8L6.442 15.276c-1.456.618-2.884-.207-2.884-1.674V10.4c0-1.467 1.428-2.292 2.884-1.674L24 16.2V7.8z"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  YOUR ACCOUNT
                </h2>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  FOR EVERYTHING
                </h3>
                <h4 className="text-2xl font-bold text-foreground">
                  .ESTORE
                </h4>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="absolute top-4 right-4"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={isSignUp}
                    className="mt-1"
                  />
                </div>
              )}
              
              <div>
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="keep-signed-in"
                    checked={keepSignedIn}
                    onCheckedChange={(checked) => setKeepSignedIn(checked as boolean)}
                  />
                  <Label htmlFor="keep-signed-in" className="text-sm">
                    Keep me signed in
                  </Label>
                </div>
                {!isSignUp && (
                  <Button variant="link" className="text-sm p-0 h-auto">
                    Forgotten your password?
                  </Button>
                )}
              </div>

              <div className="text-xs text-muted-foreground text-center">
                By logging in, you agree to .eStore's Privacy Policy and Terms of Use.
              </div>

              <Button type="submit" className="w-full" size="lg">
                {isSignUp ? 'JOIN US' : 'SIGN IN'}
              </Button>

              <div className="text-center">
                <span className="text-sm text-muted-foreground">
                  {isSignUp ? 'Already a Member?' : 'Not a Member?'}{' '}
                </span>
                <Button
                  variant="link"
                  className="text-sm p-0 h-auto"
                  onClick={() => setIsSignUp(!isSignUp)}
                >
                  {isSignUp ? 'Sign In' : 'Join Us'}
                </Button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;