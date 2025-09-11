import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/craftsmanship-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium craftsmanship workshop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-craft-deep/90 to-craft-deep/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-craft-gold/20 border border-craft-gold/30 mb-8">
            <Star className="h-4 w-4 text-craft-gold mr-2" />
            <span className="text-craft-light text-sm font-medium">
              Premium Quality Craftsmanship Since 2020
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-craft-light mb-6 leading-tight">
            Exceptional
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-craft-gold to-craft-bronze">
              Craftsmanship
            </span>
            for Your Life
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-craft-light/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            From custom home improvements to specialty lifestyle products, we deliver 
            exceptional quality and personalized service that transforms your vision into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/products">
              <Button variant="hero" size="lg" className="group">
                Explore Our Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="heroSecondary" size="lg">
                View Services
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-craft-light/80">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-craft-gold mr-2">100+</span>
              <span className="text-sm">Satisfied Customers</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-craft-light/30"></div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-craft-gold mr-2">5★</span>
              <span className="text-sm">Average Rating</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-craft-light/30"></div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-craft-gold mr-2">24/7</span>
              <span className="text-sm">Customer Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-craft-light/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-craft-gold rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;