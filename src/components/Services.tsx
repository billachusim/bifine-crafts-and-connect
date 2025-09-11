import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Trees, 
  Palette, 
  Car, 
  Wrench, 
  Sparkles,
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Home,
    title: "Home Improvement",
    description: "Complete remodeling solutions from kitchens to bathrooms, creating spaces that reflect your style and enhance your lifestyle.",
    features: ["Kitchen Remodeling", "Bathroom Renovation", "Custom Cabinetry", "Flooring Installation"],
    popular: true,
  },
  {
    icon: Trees,
    title: "Landscape Solutions",
    description: "Transform your outdoor space with our comprehensive landscaping services, from design to installation and maintenance.",
    features: ["Garden Design", "Hardscaping", "Irrigation Systems", "Outdoor Lighting"],
    popular: false,
  },
  {
    icon: Palette,
    title: "Custom Furnishings",
    description: "Handcrafted furniture and interior pieces designed to perfectly fit your space and personal aesthetic preferences.",
    features: ["Custom Furniture", "Built-in Storage", "Window Treatments", "Decorative Elements"],
    popular: false,
  },
  {
    icon: Car,
    title: "Automotive Accessories",
    description: "Premium car accessories and custom solutions to enhance your vehicle's functionality and appearance.",
    features: ["Floor Mats", "Seat Covers", "Trunk Organizers", "Dashboard Accessories"],
    popular: true,
  },
  {
    icon: Wrench,
    title: "Specialty Products",
    description: "Unique lifestyle products and custom solutions tailored to your specific needs and preferences.",
    features: ["Custom Solutions", "Specialty Tools", "Lifestyle Products", "Personalized Items"],
    popular: false,
  },
  {
    icon: Sparkles,
    title: "Design Consultation",
    description: "Professional design services to help you visualize and plan your project before implementation begins.",
    features: ["3D Visualization", "Material Selection", "Project Planning", "Budget Estimation"],
    popular: false,
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-accent/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Solutions for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-craft-gold to-craft-bronze block">
              Every Need
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From home improvements to custom automotive accessories, we provide 
            end-to-end solutions with exceptional quality and attention to detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm relative overflow-hidden"
              >
                {service.popular && (
                  <Badge 
                    variant="destructive"
                    className="absolute top-4 right-4 z-10"
                  >
                    Popular
                  </Badge>
                )}
                
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-craft-gold to-craft-bronze rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-craft-deep" />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-craft-gold transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-craft-gold rounded-full mr-3"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:border-craft-gold group-hover:text-craft-gold transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-craft-deep/10 to-craft-bronze/10 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with our team for a free consultation and let us help 
            bring your vision to life with our expert craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="craft" size="lg">
                Get Free Quote
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;