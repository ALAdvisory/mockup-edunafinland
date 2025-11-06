import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Heart, Users, Lightbulb, Globe } from "lucide-react";
import foundersImage from "@/assets/founders.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Every Child Matters",
      description: "Every child has the right to feel safe, capable, and valued. We see the potential in each learner.",
    },
    {
      icon: Users,
      title: "Collaboration & Reflection",
      description: "These are keys to growth. Small, thoughtful changes can lead to big transformation.",
    },
    {
      icon: Lightbulb,
      title: "Practical & Purposeful",
      description: "We strengthen teachers' sense of purpose and wellbeing, not just teach new methods.",
    },
    {
      icon: Globe,
      title: "Global Relevance",
      description: "Our values stem from Finnish early education, but they speak to educators everywhere.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Together for <span className="text-primary">Inclusion</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Eduna Finland stems from two Finnish special education teachers with over 35 years of combined experience.
              We believe that inclusion is not a program, but a mindset — a way of seeing, teaching, and growing
              together.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-foreground mb-6">Meet Olga & Päivi</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We are a company founded by two special education teachers from Finland, bringing together over 35 years
                of combined experience in early childhood and preschool education.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our expertise lies in promoting and developing inclusivity and providing practical examples and tools
                for educators. We don't just understand the theory — we've lived it, taught it, and refined it through
                decades of hands-on work with children, families, and educational teams.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We are dedicated to empowering early learning, preschool and childcare professionals. Our extensive
                knowledge, expertise and resources will help you create inclusive, high-quality environments for all
                children.
              </p>
              <NavLink to="/contact">
                <Button variant="cta" size="lg">
                  Work With Us
                </Button>
              </NavLink>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={foundersImage}
                alt="Eduna Finland founders Olga and Päivi"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              These principles guide everything we do, enriching learning communities worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg bg-card">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-lg">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Share</h2>
                <div className="space-y-4 text-lg">
                  <p>We don't bring ready-made solutions, but create them together.</p>
                  <p>
                    Our aim is not just to teach new methods, but to strengthen teachers' sense of purpose and
                    wellbeing.
                  </p>
                  <p className="text-xl font-semibold">
                    When educators feel confident and supported, they can create the same feeling for the children.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Learn More?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore how we can support your educational community through Finnish inclusive practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/approach">
              <Button variant="default" size="lg">
                Our Approach
              </Button>
            </NavLink>
            <NavLink to="/services">
              <Button variant="outline" size="lg">
                View Services
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
