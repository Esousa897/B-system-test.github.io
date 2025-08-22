import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

interface HeroProps {
  onCTAClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCTAClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const heroImages = [
    {
      src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1440&h=500&fit=crop&crop=center&q=80',
      alt: 'BOLDYASE Resort Collection - Luxueuze badmode en reiskleding'
    },
    {
      src: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1440&h=500&fit=crop&crop=center&q=80',
      alt: 'BOLDYASE Resort Collection - Elegante zomerjurken'
    },
    {
      src: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1440&h=500&fit=crop&crop=center&q=80',
      alt: 'BOLDYASE Resort Collection - Resort wear en accessoires'
    },
    {
      src: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1440&h=500&fit=crop&crop=center&q=80',
      alt: 'BOLDYASE Resort Collection - Moderne silhouetten'
    }
  ];

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTAClick = () => {
    if (onCTAClick) {
      onCTAClick();
    } else {
      // Default behavior: scroll to products section
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleScrollIndicatorClick = () => {
    // Scroll to category bar or next section
    const categoryBar = document.querySelector('.category-bar');
    if (categoryBar) {
      categoryBar.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: scroll down by viewport height
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Images with Parallax */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transform: `translate3d(0, ${scrollY * 0.5}px, 0)`,
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover scale-105"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
                BOLDYASE
                <span className="block font-bold text-4xl md:text-6xl mt-2">
                  RESORT COLLECTION
                </span>
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
                Ontdek onze exclusieve resort collectie. Luxueuze badmode en elegante reiskleding voor de moderne vrouw.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleCTAClick}
                  className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-medium"
                >
                  Shop Collectie
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-medium"
                >
                  Bekijk Lookbook
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ease-out ${
                  index === currentImageIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Ga naar afbeelding ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <button
            onClick={handleScrollIndicatorClick}
            className="flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors duration-200 group"
            aria-label="Scroll naar beneden"
          >
            <span className="text-xs font-normal tracking-wider uppercase">
              SCROLL
            </span>
            
            {/* Mouse Icon */}
            <div className="relative w-6 h-10 border-2 border-current rounded-full flex justify-center">
              <div 
                className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce"
                style={{
                  animationDuration: '2s',
                  animationIterationCount: 'infinite'
                }}
              />
            </div>
            
            {/* Chevron Down */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="group-hover:scale-110 transition-transform duration-200 animate-bounce"
              style={{
                animationDuration: '2s',
                animationIterationCount: 'infinite',
                animationDelay: '0.3s'
              }}
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Category Bar Preview */}
      <section className="category-bar bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex justify-center space-x-8 md:space-x-12">
            {['Badmode', 'Jurken', 'Accessoires', 'Resort Wear'].map((category) => (
              <button
                key={category}
                className="text-gray-900 hover:text-gray-600 font-medium text-lg transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section Preview */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <h2 className="text-3xl font-light text-center mb-12 text-gray-900">
            Nieuwe Collectie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-80 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="font-medium text-lg mb-2">Product {item}</h3>
                  <p className="text-gray-600 mb-4">Beschrijving van het product</p>
                  <p className="text-xl font-bold">€199,00</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
