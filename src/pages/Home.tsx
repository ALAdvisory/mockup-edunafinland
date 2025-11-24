import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { Sparkles, Users, BookOpen, Heart, Award, Globe } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";
import finnishNature from "@/assets/finnish-nature.jpg";

const Home = () => {
  const features = [
      {
        icon: Heart,
        title: "Every Child Deserves to Thrive",
        description: "Every child has the right to feel safe, capable, and valued. We see the potential in each learner.",
      },
      {
        icon: Users,
        title: "Collaboration & Reflection",
        description: "Keys to growth. Small, thoughtful changes can lead to meaningful impact.",
      },
    {
      icon: BookOpen,
      title: "Practical from Day One",
      description: "Your educators get strategies, materials, and know-how they can use immediately with children and guardians.",
    },
    {
      icon: Globe,
      title: "Build Trust & Recognition",
      description: "When educators master inclusive practices, guardians trust them. Staff feel valued for their expertise.",
    },
  ];

  const outcomes = [
    "Practical materials and strategies to use from day one",
    "Know-how to build inclusive lessons and communications",
    "Confidence working with children and their guardians",
    "Recognition and trust from guardians for their expertise",
    "Sustainable practices rooted in collaboration and reflection",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            <span className="text-accent">Inclusive Education.</span><br />
            The Finnish Way.
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Expert training and practical support to help your educators work confidently with diverse learners and SEN (Special Educational Needs).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <NavLink to="/contact">
              <Button variant="hero" size="lg" className="text-lg px-10 py-7">
                <Sparkles className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
            </NavLink>
            <NavLink to="/services">
              <Button variant="outline" size="lg" className="text-lg px-10 py-7 border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Services
              </Button>
            </NavLink>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary-foreground rounded-full" />
          </div>
        </div>
      </section>

      {/* Why Finnish Education */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why <span className="text-primary">Finnish Education?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We don't believe in one-size-fits-all solutions. Instead, we take what makes Finnish inclusive education exceptional—its evidence-based practices and collaborative spirit—and adapt it to fit your unique context, culture, and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Invest in Your Educators,<br />
              <span className="text-primary">Transform Your Setting</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We help educational leaders create sustainable change by strengthening their greatest asset: their educators. When your staff feel supported and equipped, inclusion becomes part of your culture — not an added burden.
            </p>
              <div className="space-y-3">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Award className="h-4 w-4 text-accent" />
                    </div>
                    <p className="text-foreground">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={finnishNature} 
                alt="Serene Finnish forest representing the natural approach to education"
                className="aspect-square rounded-2xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Inclusive Education?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join forward-thinking educational leaders who are transforming their institutions with Finnish SEN expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/contact">
              <Button variant="hero" size="lg" className="text-lg px-10 py-7">
                Book Free Consultation
              </Button>
            </NavLink>
            <NavLink to="/services">
              <Button variant="outline" size="lg" className="text-lg px-10 py-7 border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Services
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
