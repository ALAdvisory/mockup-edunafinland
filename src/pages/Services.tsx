import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Sparkles, Target, Users, Rocket, ArrowRight, Check } from "lucide-react";

const Services = () => {
  const packages = [
    {
      icon: Target,
      title: "Discovery",
      subtitle: "Start Your Inclusion Journey",
      description: "Perfect for schools taking their first steps toward systemic inclusion.",
      timeline: "2-4 weeks",
      price: "Starting package",
      highlights: [
        "Evidence-based assessment of current practices",
        "Goal-setting workshop with leadership team",
        "Custom action plan with clear next steps",
        "Follow-up consultation to ensure momentum",
      ],
      ideal: "Schools new to inclusive education or seeking clarity on where to begin",
    },
    {
      icon: Users,
      title: "Transform",
      subtitle: "Build Lasting Capacity",
      description: "Comprehensive support to embed inclusion into your school culture.",
      timeline: "3-6 months",
      price: "Most popular",
      highlights: [
        "Full assessment with detailed roadmap",
        "Customized workshop series for all staff",
        "Regular team consultation and coaching",
        "Complete resource toolkit and materials",
        "Ongoing partnership and support",
      ],
      ideal: "Schools committed to deep, sustainable change in inclusive practices",
      featured: true,
    },
    {
      icon: Rocket,
      title: "Partnership",
      subtitle: "Long-Term Excellence",
      description: "Ongoing collaboration to achieve world-class inclusive education.",
      timeline: "12+ months",
      price: "Premium support",
      highlights: [
        "Full-spectrum assessment and strategy",
        "Monthly training and development sessions",
        "Priority consultation and rapid support",
        "Leadership mentoring and coaching",
        "Custom materials and curriculum adaptation",
        "Access to complete resource library",
      ],
      ideal: "Schools pursuing excellence and sustained leadership in inclusion",
    },
  ];

  const outcomes = [
    "Clearer vision and shared language around inclusion",
    "Confident, supported educators who feel equipped",
    "Measurable improvements in team collaboration",
    "Children who feel valued, capable, and included",
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-secondary to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Finnish Inclusive Education</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Transform Your School.<br />
              <span className="text-primary">Empower Every Child.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Evidence-based support packages designed to build sustainable, inclusive education — without overwhelming your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink to="/contact">
                <Button variant="cta" size="lg" className="text-lg px-8">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </NavLink>
              <NavLink to="/approach">
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Learn Our Approach
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              What Schools Achieve Working With Us
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-background rounded-xl border border-border/50"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-accent" />
                  </div>
                  <p className="text-lg text-foreground text-left">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Choose Your Path Forward
            </h2>
            <p className="text-xl text-muted-foreground">
              Flexible packages designed for real schools with real constraints. Start small or go comprehensive.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`border-none shadow-xl hover:shadow-2xl transition-all duration-300 bg-card relative ${
                  pkg.featured ? "ring-2 ring-primary scale-105" : ""
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                    <Sparkles className="h-4 w-4" />
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8 pt-10">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <pkg.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">{pkg.title}</h3>
                  <p className="text-lg font-medium text-primary mb-3">{pkg.subtitle}</p>
                  <p className="text-muted-foreground mb-6">{pkg.description}</p>
                  
                  <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-border">
                    <span className="text-sm font-medium text-muted-foreground">{pkg.timeline}</span>
                    <span className="text-sm px-3 py-1 bg-accent/10 text-accent rounded-full">{pkg.price}</span>
                  </div>

                  <div className="space-y-4 mb-8">
                    {pkg.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-accent" />
                        </div>
                        <span className="text-sm text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-secondary rounded-lg mb-6">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">Ideal for:</span> {pkg.ideal}
                    </p>
                  </div>

                  <NavLink to="/contact">
                    <Button 
                      variant={pkg.featured ? "cta" : "default"} 
                      size="lg"
                      className="w-full"
                    >
                      {pkg.featured ? "Start Transforming" : "Get Started"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </NavLink>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Trust Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Built on Proven Expertise</h2>
              <p className="text-lg text-muted-foreground">
                Decades of hands-on experience in Finland's world-renowned education system
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">35+</div>
                <p className="text-muted-foreground">Years Combined Experience</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Finnish-Trained Experts</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">∞</div>
                <p className="text-muted-foreground">Potential for Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-none shadow-2xl bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-white/5" />
            <CardContent className="p-12 md:p-16 text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Don't See What You Need?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Every school's journey is unique. Let's design a custom package that fits your specific context, timeline, and goals.
              </p>
              <NavLink to="/contact">
                <Button variant="hero" size="lg" className="text-lg px-10 py-7">
                  Design Your Custom Package
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </NavLink>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
