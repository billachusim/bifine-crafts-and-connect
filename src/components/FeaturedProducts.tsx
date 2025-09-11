import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import carFloorMats from "@/assets/car-floor-mats.jpg";
import homeImprovement from "@/assets/home-improvement.jpg";
import landscapeImage from "@/assets/landscape-solutions.jpg";

const products = [
  {
    id: 1,
    name: "Custom Car Floor Mats",
    description: "Premium quality custom-fit floor mats designed specifically for your vehicle model.",
    price: "$89.99",
    originalPrice: "$129.99",
    image: carFloorMats,
    rating: 4.9,
    reviews: 156,
    badge: "Best Seller",
    badgeVariant: "destructive" as const,
  },
  {
    id: 2,
    name: "Custom Furniture Set",
    description: "Handcrafted furniture pieces tailored to your space and style preferences.",
    price: "$1,299.99",
    originalPrice: null,
    image: homeImprovement,
    rating: 5.0,
    reviews: 89,
    badge: "Premium",
    badgeVariant: "secondary" as const,
  },
  {
    id: 3,
    name: "Landscape Design Package",
    description: "Complete outdoor living transformation with custom hardscaping and design.",
    price: "$2,499.99",
    originalPrice: "$2,999.99",
    image: landscapeImage,
    rating: 4.8,
    reviews: 67,
    badge: "Popular",
    badgeVariant: "default" as const,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Featured Products
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Most
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-craft-gold to-craft-bronze ml-3">
              Popular Items
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our best-selling products that have earned the trust and satisfaction 
            of hundreds of customers worldwide.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge 
                  variant={product.badgeVariant}
                  className="absolute top-4 left-4"
                >
                  {product.badge}
                </Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-background/80 hover:bg-background"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-craft-gold text-craft-gold"
                            : "text-muted"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-craft-gold transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-craft-gold">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <Button variant="product" size="sm" className="group/btn">
                    <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:text-craft-gold transition-colors" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link to="/products">
            <Button variant="craft" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;