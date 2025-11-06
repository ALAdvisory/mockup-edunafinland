import { NavLink } from "@/components/NavLink";
import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold">Eduna</span>
              <span className="text-2xl font-light ml-1">Finland</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Inclusive education from Finland. Growing together, enriching every learner.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Who We Are
                </NavLink>
              </li>
              <li>
                <NavLink to="/approach" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Our Approach
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Insights
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">Professional Development</li>
              <li className="text-primary-foreground/80">Inclusion Assessment</li>
              <li className="text-primary-foreground/80">Team Consultation</li>
              <li className="text-primary-foreground/80">Resources & Materials</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <NavLink
                to="/contact"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>Contact Us</span>
              </NavLink>
              <a
                href="https://www.linkedin.com/company/eduna-finland"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Eduna Finland. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
