import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Heart, Users, Lightbulb, Globe, GraduationCap, Target } from "lucide-react";
import olgaPortrait from "@/assets/olga-portrait.jpg";
import paiviPortrait from "@/assets/paivi-portrait.jpg";

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
              Two Finnish special education experts. 35+ years combined experience. One mission: help you build schools where every child and educator thrives.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 max-w-4xl mx-auto">
            {/* Olga Saghar */}
            <Card className="border-none shadow-xl bg-card">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                  <img
                    src={olgaPortrait}
                    alt="Olga Saghar - Co-Founder & Special Education Expert"
                    className="rounded-xl shadow-lg w-full"
                  />
                  <div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">Olga Saghar</h3>
                        <p className="text-primary font-medium">Co-Founder & Special Education Expert</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Finnish trained special education teacher specializing in early childhood and preschool inclusion. Olga transforms complex concepts into practical strategies educators can use immediately. She makes the Finnish approach accessible and real.
                    </p>
                    <p className="text-muted-foreground">
                      Her focus: behavioral support, individualized planning, and early intervention. She helps educators spot support needs early and respond with confidence. No theory for theory's sake. Just sustainable practices that work in actual classrooms with real children.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Päivi Pekkala */}
            <Card className="border-none shadow-xl bg-card">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                  <img
                    src={paiviPortrait}
                    alt="Päivi Pekkala - Co-Founder & Inclusion Specialist"
                    className="rounded-xl shadow-lg w-full"
                  />
                  <div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Target className="h-8 w-8 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">Päivi Pekkala</h3>
                        <p className="text-accent font-medium">Co-Founder & Inclusion Specialist</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Over 25 years, Päivi has helped hundreds of educators transform challenging behaviors into breakthrough moments. She specializes in ADHD and autism support—bringing both five academic degrees and lived experience as a parent. Päivi especially supports educators facing sensory overwhelm, emotional regulation challenges, and complex family dynamics through her expertise in music-based interventions and multidisciplinary collaboration.
                    </p>
                    <p className="text-muted-foreground">
                      Her approach: listen deeply, act practically. Educators working with Päivi gain confidence to handle what once felt impossible. She doesn't just teach methods—she rebuilds your sense of purpose. Parents trust her. Kids feel safe with her. And teachers rediscover why they chose this work.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Card - Network */}
            <div className="mt-8 p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
              <h4 className="text-xl font-bold text-foreground mb-3">Extended Network for Larger Projects</h4>
              <p className="text-muted-foreground mb-6">
                For comprehensive initiatives, Olga and Päivi collaborate with a network of top educators, assembling specialized teams tailored to your needs.
              </p>
              <NavLink to="/contact">
                <Button variant="cta" size="lg" className="w-full">
                  Work With Us
                </Button>
              </NavLink>
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
                  <p>We motivate educators to engage with their peers. We believe in peer-to-peer learning, not just teaching.</p>
                  <p>
                    To create a phenomenon, we need more people learning through collaboration and shared experience.
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
