import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Sparkles, Target, Users, Rocket, ArrowRight, Check, Mic2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Professional Development",
      description: "Practical, inclusive professional development through targeted trainings and hands-on workshops. We deliver concrete strategies and early support tools that help educators strengthen everyday pedagogy and create learning environments where every child can participate and thrive.",
    },
    {
      title: "Consultation",
      description: "Ongoing consultation to support educators in applying inclusive practices in real classroom situations. Through regular check-ins and practical guidance, we help teams solve challenges, stay aligned, and strengthen consistent, child-centered approaches.",
    },
    {
      title: "Family and Caregiver Support",
      description: "Support for families and caregivers through practical guidance and open communication, helping build strong home-setting partnerships that promote each child's wellbeing and participation.",
    },
    {
      title: "Practical Tools",
      description: "Ready-to-use tools that help educators support children's participation, regulation, and learning in everyday situations. Tested in real classrooms, designed for immediate impact.",
    },
    {
      title: "Curriculum and Lesson Plan Adaptation",
      description: "Practical frameworks and tailored strategies that help educators meet diverse learning needs while keeping daily teaching clear, inclusive, and manageable.",
    },
  ];

  const packages = [
    {
      icon: Target,
      title: "Discovery",
      subtitle: "Start Your Inclusion Journey",
      description: "Perfect for educational settings taking their first steps toward systemic inclusion.",
      timeline: "2-4 weeks",
      price: "Starting package",
      highlights: [
        "Assessment of current practices",
        "Goal-setting workshop with leadership team",
        "Custom action plan with clear next steps",
        "Follow-up consultation to ensure momentum",
      ],
      ideal: "Educational settings new to inclusive education or seeking clarity on where to begin",
    },
    {
      icon: Users,
      title: "Transform",
      subtitle: "Build Lasting Capacity",
      description: "Comprehensive support to embed inclusion into your educational culture.",
      timeline: "3-6 months",
      price: "Most popular",
      highlights: [
        "Assessment of current practices",
        "Customized workshop series for all staff",
        "Inclusive lesson plans",
        "Practical tools and guidelines",
        "Regular team consultation and coaching",
        "Ongoing support",
      ],
      ideal: "Educational settings committed to deep, sustainable change in inclusive practices",
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
        "Assessment of current practices",
        "Monthly training and development sessions",
        "Inclusive lesson plans",
        "Practical tools and guidelines",
        "Leadership mentoring and coaching",
        "Ongoing support",
        "Priority consultation and rapid support",
      ],
      ideal: "Educational settings pursuing excellence and sustained leadership in inclusion",
    },
  ];

  const outcomes = [
    "Clear vision and shared language across your setting",
    "Confident educators who feel equipped and supported",
    "Measurable improvements in collaboration and culture",
    "Children who thrive in truly inclusive environments",
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
              <span className="text-primary">Every Child Included.</span><br />
              Every Educator Empowered.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Finnish SEN expertise that supports educational settings without overwhelming your teams.
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

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground">
              We offer flexible support tailored to your setting's unique needs and goals.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              What Your Setting Will Achieve
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
              Service Packages
            </h2>
            <p className="text-xl text-muted-foreground">
              Flexible packages designed for real educational settings with real constraints. Start small or go comprehensive.
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

      {/* Custom Solutions CTA */}
      <section className="py-20 bg-gradient-to-br from-secondary via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Don't See What You're Looking For?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Every educational setting's journey is unique. Let's design a custom package that fits your specific context, timeline, and goals. We also offer hourly consultations to support compliance with local regulations.
            </p>
            <NavLink to="/contact">
              <Button variant="cta" size="lg" className="text-lg px-8">
                Design Your Custom Solution
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Speaking Engagements */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
                <Mic2 className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">Book Our Experts</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Speaking Engagements
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Invite Olga and Päivi to inspire your event with practical insights from Finnish inclusive education.
              </p>
            </div>

            <Card className="border-none shadow-xl bg-card">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    With decades of Finnish SEN and inclusive education experience, Olga and Päivi deliver engaging presentations that resonate with educators at all levels.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-secondary rounded-xl">
                      <h4 className="font-semibold text-foreground mb-3">Popular Topics:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Building inclusive classrooms</li>
                        <li>• Finnish early intervention</li>
                        <li>• Educator wellbeing & confidence</li>
                        <li>• Practical behavioral support</li>
                        <li>• Collaborative cultures</li>
                      </ul>
                    </div>
                    
                    <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                      <p className="text-sm text-foreground mb-4">
                        <span className="font-semibold">Flexible formats:</span> From keynotes to half-day workshops, tailored to your needs.
                      </p>
                      <NavLink to="/contact">
                        <Button variant="cta" className="w-full">
                          Book a Speaker
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
