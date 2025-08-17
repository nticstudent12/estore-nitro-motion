import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Twitter, Facebook, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Featured',
      links: ['New Arrivals', 'Best Sellers', 'Sale Items', 'Premium Collection']
    },
    {
      title: 'Clothing',
      links: ['T-Shirts', 'Hoodies', 'Sweatshirts', 'Jackets']
    },
    {
      title: 'Categories',
      links: ['Athletic', 'Performance', 'Casual', 'Premium']
    },
    {
      title: "Kids'",
      links: ['Kids T-Shirts', "Kids' Hoodies", "Kids' Sweatshirts", "Kids' Jackets"]
    }
  ];

  const companyLinks = [
    {
      title: 'FIND A STORE',
      links: []
    },
    {
      title: 'BECOME A MEMBER',
      links: []
    },
    {
      title: 'SIGN UP FOR EMAIL',
      links: ['Send Us Feedback']
    },
    {
      title: 'STUDENT DISCOUNTS',
      links: []
    }
  ];

  const helpLinks = [
    {
      title: 'GET HELP',
      links: ['Order Status', 'Delivery', 'Returns', 'Payment Options', 'Contact Us On .eStore.com Inquiries', 'Contact Us On All Other Inquiries']
    },
    {
      title: 'ABOUT .ESTORE',
      links: ['News', 'Careers', 'Investors', 'Sustainability']
    }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Brand Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/ee58d6dd-244b-4797-babc-4935bb4eb035.png" 
            alt="SM Vêtement Gros" 
            className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-foreground text-left justify-start">
                      {link}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Company and help links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="space-y-6">
            {companyLinks.map((section) => (
              <div key={section.title}>
                <Button variant="link" className="h-auto p-0 text-foreground hover:text-muted-foreground font-medium">
                  {section.title}
                </Button>
                {section.links.length > 0 && (
                  <ul className="mt-2 space-y-2">
                    {section.links.map((link) => (
                      <li key={link}>
                        <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-foreground text-left justify-start">
                          {link}
                        </Button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {helpLinks.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-foreground text-left justify-start">
                        {link}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="text-sm text-muted-foreground">India</span>
            </div>
            <span className="text-sm text-muted-foreground">© 2024 SM Vêtement Gros. All Rights Reserved</span>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <Button variant="link" className="text-sm text-muted-foreground hover:text-foreground">
                Guides
              </Button>
              <Button variant="link" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Sale
              </Button>
              <Button variant="link" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Use
              </Button>
              <Button variant="link" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full">
                <Youtube className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;