import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Star, ShoppingCart, Heart, Search, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import carFloorMats from "@/assets/car-floor-mats.jpg";
import homeImprovement from "@/assets/home-improvement.jpg";
import landscapeImage from "@/assets/landscape-solutions.jpg";

const products = [
  {
    id: 1,
    name: "Custom Car Floor Mats - Premium Leather",
    description: "Premium quality custom-fit floor mats designed specifically for your vehicle model. Made with genuine leather and precision cutting.",
    price: 89.99,
    originalPrice: 129.99,
    image: carFloorMats,
    rating: 4.9,
    reviews: 156,
    category: "Automotive",
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 2,
    name: "Custom Furniture Set - Living Room",
    description: "Handcrafted furniture pieces tailored to your space and style preferences. Includes sofa, coffee table, and side tables.",
    price: 1299.99,
    originalPrice: null,
    image: homeImprovement,
    rating: 5.0,
    reviews: 89,
    category: "Furniture",
    badge: "Premium",
    inStock: true,
  },
  {
    id: 3,
    name: "Landscape Design Package - Complete",
    description: "Complete outdoor living transformation with custom hardscaping and design. Includes consultation and installation.",
    price: 2499.99,
    originalPrice: 2999.99,
    image: landscapeImage,
    rating: 4.8,
    reviews: 67,
    category: "Landscaping",
    badge: "Popular",
    inStock: true,
  },
  {
    id: 4,
    name: "Custom Car Floor Mats - Rubber",
    description: "Durable rubber floor mats with custom fit and weather protection. Perfect for all-season use.",
    price: 59.99,
    originalPrice: 79.99,
    image: carFloorMats,
    rating: 4.7,
    reviews: 203,
    category: "Automotive",
    badge: null,
    inStock: true,
  },
  {
    id: 5,
    name: "Kitchen Cabinet Renovation",
    description: "Complete kitchen cabinet makeover with custom design, premium materials, and professional installation.",
    price: 3999.99,
    originalPrice: null,
    image: homeImprovement,
    rating: 4.9,
    reviews: 45,
    category: "Home Improvement",
    badge: "Premium",
    inStock: false,
  },
  {
    id: 6,
    name: "Garden Landscape Lighting",
    description: "Professional outdoor lighting system to enhance your garden's beauty and security during evening hours.",
    price: 899.99,
    originalPrice: 1199.99,
    image: landscapeImage,
    rating: 4.6,
    reviews: 78,
    category: "Landscaping",
    badge: null,
    inStock: true,
  },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const categories = ["all", "Automotive", "Furniture", "Home Improvement", "Landscaping"];

  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "all" || product.category === selectedCategory)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const handleAddToCart = (product: typeof products[0]) => {
    // Create WhatsApp message
    const message = `Hi! I'm interested in ordering:\n\n${product.name}\nPrice: $${product.price}\n\nPlease let me know about availability and delivery details.`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-craft-gold to-craft-bronze ml-3">
                Products
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive range of premium products designed to enhance your lifestyle.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 p-6 bg-card/50 rounded-lg backdrop-blur-sm">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
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
                  {product.badge && (
                    <Badge 
                      variant={product.badge === "Best Seller" ? "destructive" : "secondary"}
                      className="absolute top-4 left-4"
                    >
                      {product.badge}
                    </Badge>
                  )}
                  {!product.inStock && (
                    <Badge 
                      variant="secondary"
                      className="absolute top-4 right-4 bg-muted text-muted-foreground"
                    >
                      Out of Stock
                    </Badge>
                  )}
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
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    <Button 
                      variant="product" 
                      size="sm" 
                      className="group/btn"
                      onClick={() => handleAddToCart(product)}
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:text-craft-gold transition-colors" />
                      {product.inStock ? "Order Now" : "Sold Out"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Products;