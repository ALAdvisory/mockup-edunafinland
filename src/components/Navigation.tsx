import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import edunaLogo from "@/assets/eduna-logo.png";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "Who We Are" },
    { to: "/approach", label: "Our Approach" },
    { to: "/services", label: "Services" },
    { to: "/blog", label: "Insights" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img 
              src={edunaLogo} 
              alt="Eduna Finland - Together for Inclusion" 
              className="h-10 w-auto object-contain [filter:brightness(0)_saturate(100%)] dark:[filter:brightness(0)_saturate(100%)_invert(1)]"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-foreground hover:text-primary transition-colors font-medium"
                activeClassName="text-primary"
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink to="/contact">
              <Button variant="hero" size="sm">
                Get Started
              </Button>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                activeClassName="text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="hero" size="sm" className="w-full">
                Get Started
              </Button>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
