import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Heart, Users, Lightbulb, Globe, GraduationCap, Target } from "lucide-react";
import foundersImage from "@/assets/founders-portrait.jpg";

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
              Founded by two Finnish special education teachers with over 35 years of combined expertise. We partner with school leaders to build truly inclusive environments where every child and educator can thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1 space-y-12">
              {/* Olga Saghar */}
              <Card className="border-none shadow-xl bg-card">
                <CardContent className="p-8">
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
                    Olga is a Finnish-trained special education teacher with extensive experience in early childhood and preschool inclusive education. Her passion lies in creating practical, evidence-based solutions that work in real classroom settings.
                  </p>
                  <p className="text-muted-foreground">
                    With years of hands-on experience supporting children with diverse learning needs, Olga specializes in behavioral support, individualized planning, and helping educators build confidence in inclusive practices. She believes that every child deserves to feel capable and valued.
                  </p>
                </CardContent>
              </Card>

              {/* Päivi Pekkala */}
              <Card className="border-none shadow-xl bg-card">
                <CardContent className="p-8">
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
                    Päivi brings deep expertise in Finnish special education pedagogy and collaborative teaching approaches. She excels at helping educational teams develop shared understanding and sustainable inclusive practices.
                  </p>
                  <p className="text-muted-foreground">
                    Her strengths include assessment, early intervention strategies, and building strong partnerships between educators and families. Päivi is dedicated to strengthening teacher wellbeing and professional capacity, knowing that confident educators create thriving learning environments.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="sticky top-24">
                <img
                  src={foundersImage}
                  alt="Eduna Finland founders Olga Saghar and Päivi Pekkala"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
                  <h4 className="text-xl font-bold text-foreground mb-3">Together for Inclusion</h4>
                  <p className="text-muted-foreground">
                    Combining over 35 years of specialized experience in Finnish special needs and inclusive education, Olga and Päivi are dedicated to helping educators worldwide create supportive environments where every child can flourish.
                  </p>
                </div>
                <NavLink to="/contact">
                  <Button variant="cta" size="lg" className="w-full mt-6">
                    Work With Us
                  </Button>
                </NavLink>
              </div>
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
