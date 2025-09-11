import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  Target, 
  Heart,
  CheckCircle,
  Star,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/craftsmanship-hero.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We never compromise on quality, using only the finest materials and proven techniques in every project."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority. We listen, understand, and deliver exactly what you envision."
    },
    {
      icon: Target,
      title: "Precision Craftsmanship",
      description: "Every detail matters. Our skilled artisans ensure perfect execution from design to completion."
    },
    {
      icon: Heart,
      title: "Passion Driven",
      description: "We're passionate about what we do, and it shows in every project we complete and every customer we serve."
    }
  ];

  const achievements = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "5★", label: "Average Rating" },
    { number: "3+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Our craftsmanship workshop"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Badge variant="outline" className="mb-6">About Bifine Group</Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Crafting Excellence
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-craft-gold to-craft-bronze block">
                  Since 2020
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Founded by Zubif, Bifine Group has grown from a passion for quality craftsmanship 
                into a trusted provider of premium home improvement, automotive accessories, and 
                specialty lifestyle products across the United States.
              </p>
              <Link to="/contact">
                <Button variant="craft" size="lg">
                  Work With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Mission & Partnership */}
        <section className="py-24 bg-gradient-to-b from-background to-accent/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge variant="outline" className="mb-6">Our Mission</Badge>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Transforming Visions into
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-craft-gold to-craft-bronze block">
                    Beautiful Reality
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At Bifine Group, we believe that exceptional craftsmanship begins with understanding 
                  our customers' unique needs and vision. Every project we undertake is a collaboration 
                  designed to exceed expectations and create lasting value.
                </p>
                <div className="space-y-4">
                  {[
                    "Premium quality materials and techniques",
                    "Personalized service and attention to detail",
                    "Timely delivery and professional installation",
                    "Ongoing support and customer satisfaction"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-craft-gold mr-3" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Card className="bg-gradient-to-br from-craft-deep/10 to-craft-bronze/10 border-craft-gold/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Partnership with PR Faculty
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our strategic partnership with PR Faculty, a Nigeria-based management and PR company, 
                    enables us to provide comprehensive business operations, digital presence management, 
                    and exceptional customer service while we focus on what we do best - creating 
                    exceptional products and services.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-craft-gold rounded-full mr-3"></div>
                      <span className="text-sm text-muted-foreground">Business Operations Management</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-craft-gold rounded-full mr-3"></div>
                      <span className="text-sm text-muted-foreground">Digital Marketing & Branding</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-craft-gold rounded-full mr-3"></div>
                      <span className="text-sm text-muted-foreground">Customer Relations & Support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Our Values</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                What Drives Us
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-craft-gold to-craft-bronze block">
                  Every Day
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-craft-gold to-craft-bronze rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-craft-deep" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-24 bg-gradient-to-r from-craft-deep/10 to-craft-bronze/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="outline" className="mb-6">Our Impact</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-16">
              Achievements That
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-craft-gold to-craft-bronze ml-3">
                Speak Volumes
              </span>
            </h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="group">
                  <div className="text-4xl md:text-5xl font-bold text-craft-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                    {achievement.number}
                  </div>
                  <div className="text-muted-foreground font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can bring your vision to life with our exceptional craftsmanship and service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="craft" size="lg">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" size="lg">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;