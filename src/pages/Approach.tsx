import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Smile, Trees, Users2, Lightbulb, Shield, HeartHandshake } from "lucide-react";
import growthPattern from "@/assets/services-hero.jpg";

const Approach = () => {
  const finnishWay = [
    {
      icon: Smile,
      title: "Learning Through Play & Curiosity",
      description: "Children explore and discover through joyful, hands-on experiences that spark natural curiosity.",
    },
    {
      icon: Trees,
      title: "All-Day Pedagogy",
      description: "Learning happens everywhere — not only in lessons, but in play, routines, and relationships.",
    },
    {
      icon: Shield,
      title: "Equality & Inclusion as Foundation",
      description: "Every child deserves the same opportunities and support to thrive, regardless of their needs.",
    },
    {
      icon: Users2,
      title: "Collaboration & Reflection",
      description: "Teachers work together, share insights, and continuously reflect on their practice.",
    },
    {
      icon: HeartHandshake,
      title: "Trust in Teachers",
      description: "Educators are respected professionals with the autonomy to make thoughtful decisions.",
    },
    {
      icon: Lightbulb,
      title: "Shared Responsibility",
      description: "Education is a collaborative effort between teachers, care givers, and the community.",
    },
  ];

  const howWeWork = [
    {
      title: "Collaborative",
      description: "We listen and build on each school's strengths and culture.",
    },
    {
      title: "Reflective",
      description: "We help staff think together and grow a shared understanding.",
    },
    {
      title: "Practical",
      description: "We focus on small, realistic steps that make a visible difference.",
    },
    {
      title: "Holistic",
      description: "Inspired by all-day pedagogy, we see learning as something that happens everywhere.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section
        className="py-32 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${growthPattern})`,
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              The <span className="text-primary">Finnish Way</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Finland's special needs and inclusive education system is built on trust, equality, early intervention, and comprehensive support. Discover the approach that has made Finnish special education world-renowned.
            </p>
          </div>
        </div>
      </section>

      {/* Finnish Education Principles */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Finnish Special Education Framework</h2>
            <p className="text-lg text-muted-foreground">
              These evidence-based principles have shaped decades of successful special needs and inclusive education in Finland.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {finnishWay.map((principle, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <principle.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{principle.title}</h3>
                  <p className="text-muted-foreground">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">How We Work</h2>
            <p className="text-lg text-muted-foreground">
              Our approach is collaborative, reflective, and practical — designed to create lasting change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {howWeWork.map((method, index) => (
              <Card key={index} className="border-none shadow-lg bg-card text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{method.title}</h3>
                  <p className="text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Why It Matters</h2>
            <Card className="border-none shadow-2xl bg-card">
              <CardContent className="p-12">
                <div className="space-y-6 text-lg">
                  <p className="text-muted-foreground">Our work helps schools:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-accent mr-3 font-bold">✓</span>
                      Create a shared vision and language of inclusion
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 font-bold">✓</span>
                      Strengthen staff wellbeing, confidence, and engagement
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 font-bold">✓</span>
                      Improve team collaboration and leadership clarity
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 font-bold">✓</span>
                      Build sustainable professional capacity and school reputation
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 font-bold">✓</span>
                      Most importantly: help every child feel seen, capable, and valued
                    </li>
                  </ul>
                  <p className="text-xl font-semibold text-foreground pt-4">
                    When educators feel supported and connected, inclusion becomes part of the culture — not an extra
                    task.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">See How We Can Support Your School</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Explore our practical services designed to nurture inclusive education in your community.
          </p>
          <NavLink to="/services">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              View Our Services
            </Button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Approach;
