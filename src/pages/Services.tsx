import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Check, Target, GraduationCap, FileText, Presentation, Users, Calendar, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Inclusion Assessment & Planning",
      tagline: "How to Start Inclusive Education",
      description:
        "We know educators want to foster inclusion but often aren't sure where to start. Let us help you create more inclusive spaces for all children and families.",
      features: [
        "Assessment using evidence-based tools to identify strengths and growth areas",
        "Goal setting & action planning tailored to your program's needs",
        "Ongoing support with personalized guidance and resources",
        "Navigation support to implement inclusive practices effectively",
      ],
      cta: "Start Your Journey",
    },
    {
      icon: GraduationCap,
      title: "Professional Development",
      tagline: "Workshops, Training & Consultation",
      description:
        "Comprehensive training programs designed to empower educators with practical skills and confidence in inclusive education.",
      features: [
        "Introduction to Finnish Inclusive Education",
        "Early Support & Collaboration techniques",
        "Understanding SEN & Common Needs",
        "Challenging Behaviour & Positive Guidance",
        "Observation & Assessment tools",
        "Working with Care Givers partnerships",
        "Targeted training for different roles",
      ],
      subServices: [
        "Individual Case Consultation — Observation and strategies for specific children",
        "Team Consultation — Guided reflection and coaching for staff teams",
        "Leadership Support — Strategic guidance for building inclusive structures",
        "Thematic Consultation — Focused sessions on behaviour, communication, or strategies",
        "Ongoing Partnership — Continuous support through regular meetings",
      ],
      cta: "Explore Training",
    },
    {
      icon: FileText,
      title: "Resources & Materials",
      tagline: "Tools to Support Inclusive Practice",
      description:
        "Comprehensive materials and frameworks to support your journey toward inclusive education.",
      features: [
        "Assessment tools for pedagogical practices",
        "Tools for monitoring child development and progress",
        "Individual support plans for children",
        "Inclusive curriculum adaptation templates",
        "Guidelines for all-day pedagogy",
        "Transition & routine support materials",
        "Behaviour support frameworks",
        "Learning environment audit tools",
      ],
      cta: "Access Resources",
    },
    {
      icon: Presentation,
      title: "Speaking Engagements",
      tagline: "Inspiring Keynotes & Presentations",
      description:
        "Book Olga and Päivi to speak at your conference, event, or professional development day. Share Finnish inclusive education insights with your community.",
      features: [
        "Keynote presentations on Finnish inclusive education",
        "Interactive workshops for educational conferences",
        "Professional development day sessions",
        "Leadership seminars on building inclusive cultures",
      ],
      cta: "Book a Speaker",
    },
  ];

  const packages = [
    {
      title: "Discovery Package",
      description: "Perfect for schools just starting their inclusion journey",
      duration: "1-2 weeks",
      includes: [
        "Initial assessment",
        "Goal-setting workshop",
        "Action plan development",
        "Follow-up consultation",
      ],
    },
    {
      title: "Development Package",
      description: "For schools ready to deepen their inclusive practices",
      duration: "3-6 months",
      includes: [
        "Comprehensive assessment",
        "Customized workshop series",
        "Team consultation sessions",
        "Resource materials",
        "Ongoing support",
      ],
      featured: true,
    },
    {
      title: "Partnership Package",
      description: "Long-term collaboration for sustained transformation",
      duration: "12+ months",
      includes: [
        "Full assessment & planning",
        "Regular training sessions",
        "Monthly consultation",
        "Leadership support",
        "Resource library access",
        "Custom materials development",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Practical, evidence-based support to nurture inclusive education in your community. Each service is
              tailored to your unique needs and context.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-none shadow-2xl hover:shadow-3xl transition-all duration-300 bg-card overflow-hidden"
              >
                <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground text-lg">{service.tagline}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {service.subServices && (
                    <div className="mt-6 p-6 bg-secondary rounded-lg">
                      <h4 className="font-semibold text-lg mb-3 text-foreground">Consultation Options:</h4>
                      <div className="space-y-2">
                        {service.subServices.map((sub, idx) => (
                          <div key={idx} className="flex items-start">
                            <Users className="h-4 w-4 text-primary mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-8">
                    <NavLink to="/contact">
                      <Button variant="cta" size="lg">
                        {service.cta}
                      </Button>
                    </NavLink>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Package Options */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Service Packages</h2>
            <p className="text-lg text-muted-foreground">
              Choose a package that fits your timeline and goals, or let's create a custom solution together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`border-none shadow-lg hover:shadow-xl transition-all duration-300 ${
                  pkg.featured ? "ring-4 ring-accent scale-105" : ""
                } bg-card`}
              >
                {pkg.featured && (
                  <div className="bg-accent text-accent-foreground text-center py-2 font-semibold flex items-center justify-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.title}</h3>
                  <p className="text-muted-foreground mb-4">{pkg.description}</p>
                  <div className="flex items-center gap-2 mb-6 text-primary">
                    <Calendar className="h-5 w-5" />
                    <span className="font-semibold">{pkg.duration}</span>
                  </div>
                  <div className="space-y-3 mb-6">
                    {pkg.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  <NavLink to="/contact">
                    <Button variant={pkg.featured ? "cta" : "default"} className="w-full">
                      Get Started
                    </Button>
                  </NavLink>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-none shadow-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Need Custom Support?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Every school is unique. Let's create a tailored package that addresses your specific needs and goals.
              </p>
              <NavLink to="/contact">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                  Let's Create Your Package
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
