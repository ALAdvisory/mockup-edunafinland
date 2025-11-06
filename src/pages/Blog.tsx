import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  // Placeholder blog posts - these will be actual articles later
  const posts = [
    {
      title: "The Power of All-Day Pedagogy in Early Childhood Education",
      excerpt:
        "Learning doesn't stop when the lesson ends. Discover how Finnish educators integrate learning into every moment of the day, from meals to outdoor play.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Finnish Education",
    },
    {
      title: "Building Trust with Care Givers: A Finnish Approach",
      excerpt:
        "Strong partnerships with families are the foundation of inclusive education. Learn practical strategies for meaningful collaboration.",
      date: "2024-01-10",
      readTime: "4 min read",
      category: "Collaboration",
    },
    {
      title: "Why Educator Wellbeing Matters for Student Success",
      excerpt:
        "When teachers thrive, children flourish. Explore the connection between educator wellbeing and inclusive classroom cultures.",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Wellbeing",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Insights & <span className="text-primary">Articles</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Special needs education. Inclusive practices. Finnish pedagogy. Practical strategies that work.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-8">
            {posts.map((post, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card"
              >
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-3xl hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>
                  <Button variant="outline" className="group">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">Stay Connected</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get insights on Finnish inclusive education, practical tips for diverse learners, and updates from Eduna Finland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="cta" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-12 bg-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            More articles coming soon.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
