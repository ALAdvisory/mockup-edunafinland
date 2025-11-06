import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageCircle, Sparkles } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Trim all fields
    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      organization: formData.organization.trim(),
      role: formData.role.trim(),
      service: formData.service,
      message: formData.message.trim(),
    };
    
    // Form validation
    if (!trimmedData.name || trimmedData.name.length > 100) {
      toast({
        title: "Invalid Name",
        description: "Please enter a valid name (max 100 characters).",
        variant: "destructive",
      });
      return;
    }
    
    if (!trimmedData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    if (!trimmedData.message || trimmedData.message.length > 2000) {
      toast({
        title: "Invalid Message",
        description: "Please enter a message (max 2000 characters).",
        variant: "destructive",
      });
      return;
    }

    // In a real application, this would send to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      organization: "",
      role: "",
      service: "",
      message: "",
    });
  };

  const services = [
    "Inclusion Assessment & Planning",
    "Professional Development",
    "Team Consultation",
    "Resources & Materials",
    "Speaking Engagement",
    "Custom Package",
    "Just Exploring",
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Free Consultation Available</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Let's Start the <span className="text-primary">Conversation</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Book a complimentary consultation to explore how we can support your school's inclusion journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <Card className="border-none shadow-2xl bg-card">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Get Started Today</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">
                      Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="mt-2"
                      maxLength={100}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="organization">Organization</Label>
                    <Input
                      id="organization"
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="School, preschool, or company name"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="role">Your Role</Label>
                    <Input
                      id="role"
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="e.g., Principal, Teacher, Director"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Interested In</Label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your needs and how we can help..."
                      className="mt-2 min-h-[150px]"
                      maxLength={2000}
                      required
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {formData.message.length}/2000 characters
                    </p>
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info Cards */}
            <div className="space-y-6">
              <Card className="border-none shadow-lg bg-card">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Responsive Partnership</h3>
                  <p className="text-muted-foreground">
                    We respond promptly to all inquiries and are committed to understanding your unique needs and context.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-card">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Initial Consultation</h3>
                  <p className="text-muted-foreground">
                    After you reach out, we'll schedule a complimentary consultation to understand your needs and explore
                    how we can support your journey.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-3">Not Sure Where to Start?</h3>
                  <p className="text-primary-foreground/90 mb-4">
                    That's okay! We're here to help you figure out the best path forward. Just tell us a bit about your
                    goals and challenges.
                  </p>
                  <p className="text-sm text-primary-foreground/80">
                    Whether you're exploring options or ready to take action, we'll meet you where you are.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Builders */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Why Work With Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">35+</div>
                <p className="text-muted-foreground">Years Combined Experience</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Collaborative Approach</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">∞</div>
                <p className="text-muted-foreground">Potential for Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
