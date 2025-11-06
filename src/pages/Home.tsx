import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { Sparkles, Users, BookOpen, Sprout, Award, Globe } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Home = () => {
  const features = [
    {
      icon: Sprout,
      title: "Growing Together",
      description: "We don't bring ready-made solutions, but nurture them together through collaboration and reflection.",
    },
    {
      icon: Users,
      title: "Educator Wellbeing",
      description: "Strengthening teachers' confidence and sense of purpose creates a foundation for thriving children.",
    },
    {
      icon: BookOpen,
      title: "Evidence-Based",
      description: "Rooted in Finnish education excellence with decades of proven inclusive practices.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Finnish values that speak to educators and children everywhere, enriching learning communities worldwide.",
    },
  ];

  const outcomes = [
    "Create a shared vision and language of inclusion",
    "Strengthen staff wellbeing and confidence",
    "Improve team collaboration and leadership",
    "Build sustainable professional capacity",
    "Help every child feel seen, capable, and valued",
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
            Special Needs &<br />
            <span className="text-accent">Inclusive Education</span>
            <br />
            <span className="text-primary-foreground/90 text-4xl md:text-5xl">From Finland</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Expert training and practical support for early childhood educators working with diverse learners and children with special educational needs.
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
                View Packages
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
              Finland's approach to special needs and inclusive education is world-renowned for its evidence-based practices, highly qualified special education teachers, and supportive systems. Every child receives the support they need through early intervention, individualized planning, and collaborative teamwork between educators, specialists, and families.
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
                When Educators Thrive,
                <br />
                <span className="text-primary">Children Flourish</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our work helps schools create sustainable change by focusing on what matters most: the wellbeing and
                confidence of educators. When teachers feel supported and connected, inclusion becomes part of the
                culture — not an extra task.
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
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build an Inclusive School?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join forward-thinking educators who are transforming their schools with Finnish expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/contact">
              <Button variant="hero" size="lg" className="text-lg px-10 py-7">
                Book Free Consultation
              </Button>
            </NavLink>
            <NavLink to="/services">
              <Button variant="outline" size="lg" className="text-lg px-10 py-7 border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Explore Packages
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
