import React, { useState, useEffect } from 'react';
import { Heart, ShoppingBag, Eye, X, Search, User, Menu, ChevronDown, Users, Clock, TrendingUp, Filter, Sparkles, ChevronLeft, ChevronRight, Star, Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Brand colors
const brandColors = {
    primary: '#1a1a1a',
    accentLight: '#f8f6f3',
    accentBeige: '#d4b896',
    accentGreen: '#4ade80',
    textPrimary: '#1a1a1a',
    textSecondary: '#666666',
    textTertiary: '#999999',
    bgLight: '#ffffff',
    bgDark: '#1a1a1a'
};

// Sample data
const categories = [
    'Nieuw', 'Kleding', 'Accessoires', 'Schoenen', 'Sale', 'Collecties'
];

const navigationItems = [
    { label: 'Jassen & Blazers', category: 'Kleding' },
    { label: 'Truien & Vesten', category: 'Kleding' },
    { label: 'T-shirts & Tops', category: 'Kleding' },
    { label: 'Broeken', category: 'Kleding' },
    { label: 'Jurken', category: 'Kleding' },
    { label: 'Tassen', category: 'Accessoires' },
    { label: 'Sieraden', category: 'Accessoires' },
    { label: 'Riemen', category: 'Accessoires' },
    { label: 'Sneakers', category: 'Schoenen' },
    { label: 'Laarzen', category: 'Schoenen' },
    { label: 'Pumps', category: 'Schoenen' },
    { label: 'Zomer Collectie', category: 'Collecties' },
    { label: 'Herfst Essentials', category: 'Collecties' },
];

const products = [
    {
        id: '1',
        name: 'Elegante Zijden Blouse',
        price: 89.95,
        originalPrice: 119.95,
        discount: 25,
        images: [
            'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        ],
        colors: ['#000000', '#FFFFFF', '#D4B896'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        isNew: true,
        isFavorite: false,
        rating: 4.8,
        reviewCount: 124,
        stockStatus: 'in_stock',
        description: 'Elegante zijden blouse met een tijdloos design. Perfect voor zowel casual als formele gelegenheden.',
        tags: ['blouse', 'zijde', 'elegant']
    },
    {
        id: '2',
        name: 'Premium Leren Handtas',
        price: 249.95,
        originalPrice: 299.95,
        discount: 17,
        images: [
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
        ],
        colors: ['#8B4513', '#000000', '#D4B896'],
        sizes: ['One Size'],
        isNew: false,
        isFavorite: true,
        rating: 4.9,
        reviewCount: 87,
        stockStatus: 'in_stock',
        description: 'Luxe handtas gemaakt van premium Italiaans leer. Ruim genoeg voor al je essentials, met meerdere compartimenten.',
        tags: ['handtas', 'leer', 'premium']
    },
    {
        id: '3',
        name: 'Wollen Oversized Trui',
        price: 129.95,
        originalPrice: null,
        discount: 0,
        images: [
            'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
            'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        ],
        colors: ['#D4B896', '#808080', '#000000'],
        sizes: ['S', 'M', 'L'],
        isNew: true,
        isFavorite: false,
        rating: 4.7,
        reviewCount: 56,
        stockStatus: 'low_stock',
        description: 'Comfortabele oversized trui gemaakt van 100% wol. Perfect voor de koudere dagen.',
        tags: ['trui', 'wol', 'oversized']
    },
    {
        id: '4',
        name: 'Leren Chelsea Boots',
        price: 179.95,
        originalPrice: 219.95,
        discount: 18,
        images: [
            'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80',
            'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80',
        ],
        colors: ['#000000', '#8B4513'],
        sizes: ['36', '37', '38', '39', '40', '41'],
        isNew: false,
        isFavorite: true,
        rating: 4.9,
        reviewCount: 112,
        stockStatus: 'in_stock',
        description: 'Tijdloze Chelsea boots gemaakt van hoogwaardig leer. Voorzien van elastische inzetten en een comfortabele zool.',
        tags: ['schoenen', 'leer', 'boots']
    },
    {
        id: '5',
        name: 'Zijden Midi Rok',
        price: 149.95,
        originalPrice: null,
        discount: 0,
        images: [
            'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
            'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        ],
        colors: ['#000000', '#D4B896', '#800020'],
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: true,
        isFavorite: false,
        rating: 4.6,
        reviewCount: 43,
        stockStatus: 'in_stock',
        description: 'Elegante midi rok gemaakt van luxe zijde. Valt soepel en heeft een subtiele glans.',
        tags: ['rok', 'zijde', 'midi']
    },
    {
        id: '6',
        name: 'Gouden Statement Oorbellen',
        price: 59.95,
        originalPrice: 79.95,
        discount: 25,
        images: [
            'https://images.unsplash.com/photo-1630020085330-9a928a7a7afc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
            'https://images.unsplash.com/photo-1630020085330-9a928a7a7afc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        ],
        colors: ['#FFD700'],
        sizes: ['One Size'],
        isNew: false,
        isFavorite: true,
        rating: 4.8,
        reviewCount: 67,
        stockStatus: 'in_stock',
        description: 'Opvallende statement oorbellen met een gouden afwerking. Lichtgewicht en comfortabel om te dragen.',
        tags: ['sieraden', 'oorbellen', 'goud']
    }
];

const heroContent = {
    title: "Herfst Collectie 2025",
    subtitle: "Ontdek onze nieuwste collectie met tijdloze stukken voor het nieuwe seizoen",
    ctaText: "Shop Nu",
    ctaLink: "/collections/herfst-2025",
    backgroundImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
};

// Component: Navigation Dropdown
const NavigationDropdown = ({ isVisible, items, onItemClick, onMouseLeave }) => {
    return (
        <div
            className={`absolute top-full left-0 w-full bg-white shadow-lg z-50 transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onMouseLeave={onMouseLeave}
        >
            <div className="container mx-auto py-6 px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {items.map((item, index) => (
                        <div key={index} className="space-y-2">
                            <button
                                onClick={() => onItemClick(item)}
                                className="text-left w-full hover:text-accentBeige transition-colors duration-200"
                                style={{ color: brandColors.textPrimary }}
                            >
                                {item.label}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Component: Navigation Bar
const NavigationBar = ({ onCartClick, onSearchClick, cartItemCount, onCategoryHover, onMouseLeave }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}
            style={{ backgroundColor: brandColors.bgLight }}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="text-2xl font-bold tracking-tighter">
                            BOLDYASE
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {categories.map((category, index) => (
                            <a
                                key={index}
                                href={`/collections/${category.toLowerCase()}`}
                                className="text-sm font-medium hover:text-accentBeige transition-colors duration-200"
                                style={{ color: brandColors.textPrimary }}
                                onMouseEnter={() => onCategoryHover(category)}
                            >
                                {category}
                            </a>
                        ))}
                    </nav>

                    {/* Action Icons */}
                    <div className="flex items-center space-x-4">
                        <button
                            className="p-2 hover:text-accentBeige transition-colors duration-200"
                            onClick={onSearchClick}
                        >
                            <Search size={20} />
                        </button>

                        <a
                            href="/account"
                            className="p-2 hover:text-accentBeige transition-colors duration-200"
                        >
                            <User size={20} />
                        </a>

                        <a
                            href="/wishlist"
                            className="p-2 hover:text-accentBeige transition-colors duration-200"
                        >
                            <Heart size={20} />
                        </a>

                        <button
                            className="p-2 hover:text-accentBeige transition-colors duration-200 relative"
                            onClick={onCartClick}
                        >
                            <ShoppingBag size={20} />
                            {cartItemCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-accentBeige text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartItemCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        <nav className="flex flex-col space-y-4">
                            {categories.map((category, index) => (
                                <a
                                    key={index}
                                    href={`/collections/${category.toLowerCase()}`}
                                    className="text-sm font-medium py-2 hover:text-accentBeige transition-colors duration-200"
                                    style={{ color: brandColors.textPrimary }}
                                >
                                    {category}
                                </a>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

// Component: Category Bar
const CategoryBar = ({ categories, activeCategory, onCategoryClick }) => {
    const scrollContainerRef = React.useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const checkScrollPosition = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScrollPosition);
            // Initial check
            checkScrollPosition();

            return () => {
                container.removeEventListener('scroll', checkScrollPosition);
            };
        }
    }, []);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative bg-accentLight py-3 border-t border-b border-gray-200">
            {/* Left scroll arrow */}
            {showLeftArrow && (
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-1 z-10"
                    onClick={scrollLeft}
                    aria-label="Scroll left"
                >
                    <ChevronLeft size={20} />
                </button>
            )}

            {/* Categories */}
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto scrollbar-hide space-x-6 px-8 mx-auto max-w-screen-xl"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`whitespace-nowrap text-sm font-medium px-1 py-1 border-b-2 transition-colors duration-200 ${activeCategory === category
                                ? 'border-accentBeige text-accentBeige'
                                : 'border-transparent hover:text-accentBeige'
                            }`}
                        onClick={() => onCategoryClick(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Right scroll arrow */}
            {showRightArrow && (
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-1 z-10"
                    onClick={scrollRight}
                    aria-label="Scroll right"
                >
                    <ChevronRight size={20} />
                </button>
            )}
        </div>
    );
};

// Component: Hero Section
const HeroSection = ({ title, subtitle, ctaText, ctaLink, backgroundImage }) => {
    return (
        <section
            className="relative h-[70vh] bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            <div className="container mx-auto px-4 relative z-10 text-center text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">{subtitle}</p>

                <Button
                    className="bg-white text-black hover:bg-accentBeige hover:text-white transition-colors duration-300 px-8 py-3 rounded-none text-sm font-medium"
                    asChild
                >
                    <a href={ctaLink}>{ctaText}</a>
                </Button>
            </div>
        </section>
    );
};

// Component: Advanced Look Card
const AdvancedLookCard = ({ product, onAddToCart, onToggleFavorite }) => {
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [isHovered, setIsHovered] = useState(false);
    const [showSizes, setShowSizes] = useState(false);
    const [showColors, setShowColors] = useState(false);

    // Format price with euro symbol
    const formatPrice = (price) => {
        return `€${price.toFixed(2).replace('.', ',')}`;
    };

    return (
        <div
            className="group relative bg-white overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setShowSizes(false);
                setShowColors(false);
            }}
        >
            {/* Product Image */}
            <div className="relative aspect-[3/4] overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                />

                {/* Overlay with actions */}
                <div
                    className={`absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 flex flex-col justify-between p-4 ${isHovered ? 'bg-opacity-10' : ''
                        }`}
                >
                    {/* Top actions */}
                    <div className="flex justify-between">
                        {product.isNew && (
                            <span className="bg-accentBeige text-white text-xs font-semibold px-2 py-1">
                                NIEUW
                            </span>
                        )}

                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                onToggleFavorite();
                            }}
                            className={`p-2 rounded-full ${product.isFavorite ? 'bg-accentBeige text-white' : 'bg-white text-black'
                                }`}
                        >
                            <Heart size={16} fill={product.isFavorite ? 'currentColor' : 'none'} />
                        </button>
                    </div>

                    {/* Bottom actions - only visible on hover */}
                    <div
                        className={`transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                    >
                        <div className="flex space-x-2 mb-2">
                            <button
                                className="flex-1 bg-white text-black font-medium py-2 text-sm hover:bg-accentBeige hover:text-white transition-colors duration-200"
                                onClick={() => setShowSizes(!showSizes)}
                            >
                                {selectedSize || 'Maat'}
                            </button>

                            <button
                                className="flex-1 bg-white text-black font-medium py-2 text-sm hover:bg-accentBeige hover:text-white transition-colors duration-200"
                                onClick={() => setShowColors(!showColors)}
                            >
                                Kleur
                            </button>
                        </div>

                        <button
                            className="w-full bg-black text-white font-medium py-2 text-sm hover:bg-accentBeige transition-colors duration-200"
                            onClick={() => onAddToCart(selectedSize, selectedColor)}
                        >
                            In Winkelwagen
                        </button>
                    </div>
                </div>

                {/* Size selector */}
                {showSizes && (
                    <div className="absolute bottom-[72px] left-0 right-0 bg-white p-2 shadow-lg">
                        <div className="grid grid-cols-3 gap-1">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    className={`py-1 text-sm border ${selectedSize === size
                                            ? 'border-accentBeige bg-accentBeige text-white'
                                            : 'border-gray-200 hover:border-accentBeige'
                                        }`}
                                    onClick={() => {
                                        setSelectedSize(size);
                                        setShowSizes(false);
                                    }}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Color selector */}
                {showColors && (
                    <div className="absolute bottom-[72px] left-0 right-0 bg-white p-2 shadow-lg">
                        <div className="flex justify-center space-x-2">
                            {product.colors.map((color) => (
                                <button
                                    key={color}
                                    className={`w-6 h-6 rounded-full border-2 ${selectedColor === color ? 'border-accentBeige' : 'border-transparent'
                                        }`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => {
                                        setSelectedColor(color);
                                        setShowColors(false);
                                    }}
                                >
                                    <span className="sr-only">Kleur: {color}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="p-4">
                <h3 className="font-medium text-sm mb-1">{product.name}</h3>

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        {product.originalPrice ? (
                            <>
                                <span className="font-semibold">{formatPrice(product.price)}</span>
                                <span className="text-gray-500 line-through text-sm">{formatPrice(product.originalPrice)}</span>
                                <span className="text-accentGreen text-sm">-{product.discount}%</span>
                            </>
                        ) : (
                            <span className="font-semibold">{formatPrice(product.price)}</span>
                        )}
                    </div>

                    <div className="flex items-center">
                        <Star size={14} className="text-accentBeige" fill="currentColor" />
                        <span className="text-xs ml-1">{product.rating}</span>
                    </div>
                </div>

                {/* Stock status */}
                {product.stockStatus === 'low_stock' && (
                    <p className="text-xs text-red-500 mt-1">Nog maar enkele beschikbaar</p>
                )}
            </div>
        </div>
    );
};

// Component: Mobile Product Card
const MobileProductCard = ({
    id, name, price, originalPrice, discount, images, colors, sizes,
    isNew, isFavorite, rating, reviewCount, stockStatus,
    onAddToCart, onToggleFavorite
}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedSize, setSelectedSize] = useState(sizes[0]);
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [showDetails, setShowDetails] = useState(false);

    // Format price with euro symbol
    const formatPrice = (price) => {
        return `€${price.toFixed(2).replace('.', ',')}`;
    };

    // Handle swipe for image gallery
    const handleSwipe = (direction) => {
        if (direction === 'left' && currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        } else if (direction === 'right' && currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            {/* Product Image with Swipe */}
            <div className="relative aspect-[3/4]">
                <div
                    className="absolute inset-0 flex items-center justify-center"
                    onTouchStart={(e) => {
                        const touchStartX = e.touches[0].clientX;
                        const handleTouchEnd = (e) => {
                            const touchEndX = e.changedTouches[0].clientX;
                            const diff = touchStartX - touchEndX
                            if (Math.abs(diff) > 50) {
                                if (diff > 0) {
                                    // Swipe left (naar volgende afbeelding)
                                    handleSwipe('left');
                                } else {
                                    // Swipe right (naar vorige afbeelding)
                                    handleSwipe('right');
                                }
                            }

                            document.removeEventListener('touchend', handleTouchEnd);
                        };

                        document.addEventListener('touchend', handleTouchEnd, { once: true });
                    }}
                >
                    <img
                        src={images[currentImageIndex]}
                        alt={name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>

                {/* Image navigation dots */}
                {images.length > 1 && (
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-accentBeige' : 'bg-white bg-opacity-60'
                                    }`}
                                onClick={() => setCurrentImageIndex(index)}
                                aria-label={`Ga naar afbeelding ${index + 1}`}
                            />
                        ))}
                    </div>
                )}

                {/* Top badges */}
                <div className="absolute top-2 left-2 right-2 flex justify-between">
                    {isNew && (
                        <span className="bg-accentBeige text-white text-xs font-semibold px-2 py-1">
                            NIEUW
                        </span>
                    )}

                    <button
                        onClick={() => onToggleFavorite(id)}
                        className={`p-2 rounded-full ${isFavorite ? 'bg-accentBeige text-white' : 'bg-white text-black'
                            }`}
                        aria-label={isFavorite ? 'Verwijder van favorieten' : 'Voeg toe aan favorieten'}
                    >
                        <Heart size={16} fill={isFavorite ? 'currentColor' : 'none'} />
                    </button>
                </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
                <h3 className="font-medium text-sm mb-1">{name}</h3>

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        {originalPrice ? (
                            <>
                                <span className="font-semibold">{formatPrice(price)}</span>
                                <span className="text-gray-500 line-through text-sm">{formatPrice(originalPrice)}</span>
                                <span className="text-accentGreen text-sm">-{discount}%</span>
                            </>
                        ) : (
                            <span className="font-semibold">{formatPrice(price)}</span>
                        )}
                    </div>

                    <div className="flex items-center">
                        <Star size={14} className="text-accentBeige" fill="currentColor" />
                        <span className="text-xs ml-1">{rating}</span>
                    </div>
                </div>

                {/* Stock status */}
                {stockStatus === 'low_stock' && (
                    <p className="text-xs text-red-500 mt-1">Nog maar enkele beschikbaar</p>
                )}

                {/* Toggle details button */}
                <button
                    className="w-full mt-3 text-xs flex items-center justify-center py-2 border border-gray-200 hover:border-accentBeige transition-colors duration-200"
                    onClick={() => setShowDetails(!showDetails)}
                >
                    <span className="mr-1">{showDetails ? 'Verberg details' : 'Toon details'}</span>
                    {showDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>

                {/* Expanded details */}
                {showDetails && (
                    <div className="mt-3 space-y-3 border-t border-gray-100 pt-3">
                        {/* Size selector */}
                        <div>
                            <label className="text-xs font-medium mb-1 block">Maat</label>
                            <div className="grid grid-cols-4 gap-1">
                                {sizes.map((size) => (
                                    <button
                                        key={size}
                                        className={`py-1 text-xs border ${selectedSize === size
                                            ? 'border-accentBeige bg-accentBeige text-white'
                                            : 'border-gray-200 hover:border-accentBeige'
                                            }`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Color selector */}
                        <div>
                            <label className="text-xs font-medium mb-1 block">Kleur</label>
                            <div className="flex space-x-2">
                                {colors.map((color) => (
                                    <button
                                        key={color}
                                        className={`w-6 h-6 rounded-full border-2 ${selectedColor === color ? 'border-accentBeige' : 'border-transparent'
                                            }`}
                                        style={{ backgroundColor: color }}
                                        onClick={() => setSelectedColor(color)}
                                    >
                                        <span className="sr-only">Kleur: {color}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Add to cart button */}
                        <button
                            className="w-full bg-black text-white font-medium py-2 text-sm hover:bg-accentBeige transition-colors duration-200"
                            onClick={() => onAddToCart(id, selectedSize, selectedColor)}
                        >
                            In Winkelwagen
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

// Component: Product Grid
const ProductGrid = ({ products, onAddToCart, onToggleFavorite }) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
                <div key={product.id}>
                    {isMobile ? (
                        <MobileProductCard
                            {...product}
                            onAddToCart={(size, color) => onAddToCart(product.id, size, color)}
                            onToggleFavorite={() => onToggleFavorite(product.id)}
                        />
                    ) : (
                        <a
                            href={`/products/${product.id}`}
                            className="block h-full"
                        >
                            <AdvancedLookCard
                                product={product}
                                onAddToCart={(size, color) => {
                                    onAddToCart(product.id, size, color);
                                }}
                                onToggleFavorite={() => onToggleFavorite(product.id)}
                            />
                        </a>
                    )}
                </div>
            ))}
        </div>
    );
};

// Component: Featured Collection
const FeaturedCollection = ({ title, products, viewAllLink, onAddToCart, onToggleFavorite }) => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <a
                        href={viewAllLink}
                        className="text-sm font-medium hover:text-accentBeige transition-colors duration-200"
                    >
                        Bekijk alles
                    </a>
                </div>

                <ProductGrid
                    products={products}
                    onAddToCart={onAddToCart}
                    onToggleFavorite={onToggleFavorite}
                />
            </div>
        </section>
    );
};

// Component: Newsletter Signup
const NewsletterSignup = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Hier zou je normaal gesproken de nieuwsbrief aanmelding verwerken
        setIsSubmitted(true);
        // Reset na 3 seconden
        setTimeout(() => {
            setIsSubmitted(false);
            setEmail('');
        }, 3000);
    };

    return (
        <section className="py-16 bg-accentLight">
            <div className="container mx-auto px-4 max-w-3xl text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Blijf op de hoogte</h2>
                <p className="text-textSecondary mb-8 max-w-xl mx-auto">
                    Schrijf je in voor onze nieuwsbrief en ontvang exclusieve aanbiedingen, styling tips en als eerste toegang tot nieuwe collecties.
                </p>

                {isSubmitted ? (
                    <div className="bg-accentGreen/20 text-accentGreen p-4 rounded-md">
                        Bedankt voor je aanmelding! Je ontvangt binnenkort onze nieuwsbrief.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Jouw e-mailadres"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="flex-grow px-4 py-3 border border-gray-200 focus:border-accentBeige focus:outline-none"
                        />
                        <Button
                            type="submit"
                            className="bg-black text-white hover:bg-accentBeige transition-colors duration-200 px-6 py-3 text-sm font-medium"
                        >
                            Aanmelden
                        </Button>
                    </form>
                )}
            </div>
        </section>
    );
};

// Component: Instagram Feed
const InstagramFeed = ({ posts }) => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-2">Volg ons op Instagram</h2>
                    <p className="text-textSecondary">@boldyase</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {posts.map((post, index) => (
                        <a
                            key={index}
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative aspect-square group overflow-hidden"
                        >
                            <img
                                src={post.image}
                                alt={`Instagram post ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 flex items-center justify-center">
                                <Instagram size={24} className="text-white" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Component: Footer
const Footer = () => {
    return (
        <footer className="bg-bgDark text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Shop */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Shop</h3>
                        <ul className="space-y-2">
                            {categories.map((category, index) => (
                                <li key={index}>
                                    <a
                                        href={`/collections/${category.toLowerCase()}`}
                                        className="text-gray-300 hover:text-white transition-colors duration-200"
                                    >
                                        {category}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Informatie */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Informatie</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/pages/over-ons"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    Over ons
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/pages/verzending"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    Verzending & Retour
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/pages/algemene-voorwaarden"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    Algemene Voorwaarden
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/pages/privacy-beleid"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    Privacy Beleid
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/pages/contact"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Klantenservice */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Klantenservice</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/pages/faq"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    Veelgestelde vragen
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/pages/bestellen"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    Bestellen & Betalen
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/pages/retourneren"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    Retourneren
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/pages/maattabel"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    Maattabel
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/account"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    Mijn account
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <MapPin size={18} className="mr-2 flex-shrink-0 mt-0.5" />
                                <span>Modestraat 123<br />1234 AB Amsterdam<br />Nederland</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="mr-2 flex-shrink-0" />
                                <a
                                    href="tel:+31201234567"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    +31 (0)20 123 4567
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} className="mr-2 flex-shrink-0" />
                                <a
                                    href="mailto:info@boldyase.nl"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    info@boldyase.nl
                                </a>
                            </li>
                        </ul>

                        {/* Social Media */}
                        <div className="mt-6">
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.instagram.com/boldyase"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                    aria-label="Instagram"
                                >
                                    <Instagram size={20} />
                                </a>
                                <a
                                    href="https://www.facebook.com/boldyase"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                    aria-label="Facebook"
                                >
                                    <Facebook size={20} />
                                </a>
                                <a
                                    href="https://www.twitter.com/boldyase"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                    aria-label="Twitter"
                                >
                                    <Twitter size={20} />
                                </a>
                                <a
                                    href="https://www.youtube.com/boldyase"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                    aria-label="YouTube"
                                >
                                    <Youtube size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom footer */}
                <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} BOLDYASE. Alle rechten voorbehouden.
                        </p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <img
                            src="/images/payment-methods.png"
                            alt="Betaalmethoden"
                            className="h-6"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Component: Cart Drawer
const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) => {
    // Calculate totals
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? (subtotal >= 75 ? 0 : 4.95) : 0;
    const total = subtotal + shipping;

    // Format price with euro symbol
    const formatPrice = (price) => {
        return `€${price.toFixed(2).replace('.', ',')}`;
    };

    return (
        <div
            className={`fixed inset-0 z-50 ${isOpen ? 'visible' : 'invisible'}`}
            aria-hidden={!isOpen}
        >
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-50' : 'opacity-0'
                    }`}
                onClick={onClose}
            ></div>

            {/* Drawer */}
            <div
                className={`absolute top-0 right-0 w-full md:w-96 h-full bg-white shadow-xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-semibold">Winkelwagen ({cartItems.length})</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:text-accentBeige transition-colors duration-200"
                        aria-label="Sluit winkelwagen"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Cart items */}
                <div className="flex-1 overflow-y-auto p-4 h-[calc(100vh-240px)]">
                    {cartItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <ShoppingBag size={48} className="text-gray-300 mb-4" />
                            <p className="text-textSecondary mb-4">Je winkelwagen is leeg</p>
                            <Button
                                onClick={onClose}
                                className="bg-black text-white hover:bg-accentBeige transition-colors duration-200 px-6 py-2 text-sm font-medium"
                            >
                                Verder winkelen
                            </Button>
                        </div>
                    ) : (
                        <ul className="space-y-4">
                            {cartItems.map((item) => (
                                <li key={item.id} className="flex border-b border-gray-100 pb-4">
                                    {/* Product image */}
                                    <div className="w-20 h-24 bg-gray-100 mr-4 flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Product details */}
                                    <div className="flex-1">
                                        <div className="flex justify-between">
                                            <h3 className="text-sm font-medium">{item.name}</h3>
                                            <button
                                                onClick={() => onRemoveItem(item.id)}
                                                className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                                                aria-label="Verwijder item"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>

                                        <div className="text-xs text-textSecondary mt-1">
                                            <span>Maat: {item.size}</span>
                                            <span className="mx-2">|</span>
                                            <span>
                                                Kleur:
                                                <span
                                                    className="inline-block w-3 h-3 rounded-full ml-1 align-middle"
                                                    style={{ backgroundColor: item.color }}
                                                ></span>
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between mt-2">
                                            <div className="flex items-center border border-gray-200">
                                                <button
                                                    onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                    className="px-2 py-1 hover:bg-gray-100 transition-colors duration-200"
                                                    aria-label="Verminder aantal"
                                                    disabled={item.quantity <= 1}
                                                >
                                                    <Minus size={14} />
                                                </button>

                                                <span className="px-2 py-1 text-sm">{item.quantity}</span>

                                                <button
                                                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                                    className="px-2 py-1 hover:bg-gray-100 transition-colors duration-200"
                                                    aria-label="Verhoog aantal"
                                                >
                                                    <Plus size={14} />
                                                </button>
                                            </div>

                                            <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Footer with totals and checkout */}
                {cartItems.length > 0 && (
                    <div className="border-t border-gray-200 p-4 bg-white">
                        <div className="space-y-2 mb-4">
                            <div className="flex justify-between">
                                <span className="text-textSecondary">Subtotaal</span>
                                <span>{formatPrice(subtotal)}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-textSecondary">Verzendkosten</span>
                                <span>{shipping === 0 ? 'Gratis' : formatPrice(shipping)}</span>
                            </div>

                            {subtotal > 0 && subtotal < 75 && (
                                <div className="text-xs text-accentGreen mt-1">
                                    Nog {formatPrice(75 - subtotal)} te gaan voor gratis verzending!
                                </div>
                            )}

                            <div className="flex justify-between font-semibold pt-2 border-t border-gray-100">
                                <span>Totaal</span>
                                <span>{formatPrice(total)}</span>
                            </div>
                        </div>

                        <Button
                            onClick={onCheckout}
                            className="w-full bg-black text-white hover:bg-accentBeige transition-colors duration-200 py-3 text-sm font-medium"
                        >
                            Afrekenen
                        </Button>

                        <button
                            onClick={onClose}
                            className="w-full text-center mt-2 text-sm text-textSecondary hover:text-accentBeige transition-colors duration-200"
                        >
                            of verder winkelen
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

// Component: Search Modal
const SearchModal = ({ isOpen, onClose, onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [recentSearches, setRecentSearches] = useState([
        'zijden blouse', 'leren tas', 'zomerjurk', 'oversized trui'
    ]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            onSearch(searchQuery);
            // Add to recent searches if not already there
            if (!recentSearches.includes(searchQuery)) {
                setRecentSearches([searchQuery, ...recentSearches].slice(0, 5));
            }
        }
    };

    const handleRecentSearch = (query) => {
        setSearchQuery(query);
        onSearch(query);
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex items-start justify-center ${isOpen ? 'visible' : 'invisible'}`}
            aria-hidden={!isOpen}
        >
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-50' : 'opacity-0'
                    }`}
                onClick={onClose}
            ></div>

            {/* Search container */}
            <div
                className={`relative w-full max-w-2xl bg-white shadow-xl transition-all duration-300 mt-20 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                    }`}
            >
                {/* Search form */}
                <form onSubmit={handleSearch} className="relative">
                    <input
                        type="text"
                        placeholder="Zoek producten..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-4 pr-12 border-b border-gray-200 focus:outline-none focus:border-accentBeige"
                        autoFocus
                    />

                    <button
                        type="submit"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-accentBeige transition-colors duration-200"
                        aria-label="Zoeken"
                    >
                        <Search size={20} />
                    </button>
                </form>

                {/* Recent searches */}
                <div className="p-4">
                    <h3 className="text-sm font-medium text-textSecondary mb-2">Recente zoekopdrachten</h3>
                    <div className="flex flex-wrap gap-2">
                        {recentSearches.map((query, index) => (
                            <button
                                key={index}
                                onClick={() => handleRecentSearch(query)}
                                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-sm rounded-full transition-colors duration-200"
                            >
                                {query}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 p-2 text-gray-400 hover:text-accentBeige transition-colors duration-200"
                    aria-label="Sluit zoeken"
                >
                    <X size={20} />
                </button>
            </div>
        </div>
    );
};

// Main App Component
const ShopifyApp = () => {
    // State
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [hoveredCategory, setHoveredCategory] = useState(null
          const [hoveredCategory, setHoveredCategory] = useState(null);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [cartItems, setCartItems] = useState([
        {
            id: '2',
            name: 'Premium Leren Handtas',
            price: 249.95,
            image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
            size: 'One Size',
            color: '#8B4513',
            quantity: 1
        }
    ]);

    // Sample Instagram posts
    const instagramPosts = [
        {
            image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            link: 'https://www.instagram.com/p/123456'
        },
        {
            image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            link: 'https://www.instagram.com/p/234567'
        },
        {
            image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            link: 'https://www.instagram.com/p/345678'
        },
        {
            image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            link: 'https://www.instagram.com/p/456789'
        }
    ];

    // Get filtered navigation items based on hovered category
    const filteredNavigationItems = navigationItems.filter(
        item => !hoveredCategory || item.category === hoveredCategory
    );

    // Get featured products (first 4 products)
    const featuredProducts = products.slice(0, 4);

    // Get new arrivals (products with isNew flag)
    const newArrivals = products.filter(product => product.isNew);

    // Handlers
    const handleAddToCart = (productId, size, color) => {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        // Check if product already in cart with same size and color
        const existingItemIndex = cartItems.findIndex(
            item => item.id === productId && item.size === size && item.color === color
        );

        if (existingItemIndex !== -1) {
            // Update quantity if already in cart
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += 1;
            setCartItems(updatedCartItems);
        } else {
            // Add new item to cart
            setCartItems([
                ...cartItems,
                {
                    id: productId,
                    name: product.name,
                    price: product.price,
                    image: product.images[0],
                    size,
                    color,
                    quantity: 1
                }
            ]);
        }

        // Open cart drawer
        setIsCartOpen(true);
    };

    const handleUpdateCartItemQuantity = (itemId, newQuantity, size, color) => {
        setCartItems(
            cartItems.map(item =>
                item.id === itemId && item.size === size && item.color === color
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const handleRemoveCartItem = (itemId, size, color) => {
        setCartItems(
            cartItems.filter(item =>
                !(item.id === itemId && item.size === size && item.color === color)
            )
        );
    };

    const handleToggleFavorite = (productId) => {
        // In een echte applicatie zou dit een API-aanroep zijn om de favoriet status te updaten
        console.log(`Toggle favorite for product ${productId}`);
    };

    const handleSearch = (query) => {
        // In een echte applicatie zou dit naar een zoekresultatenpagina navigeren
        console.log(`Search for: ${query}`);
        setIsSearchOpen(false);
    };

    const handleCheckout = () => {
        // In een echte applicatie zou dit naar de checkout pagina navigeren
        console.log('Proceeding to checkout');
        setIsCartOpen(false);
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navigation */}
            <NavigationBar
                onCartClick={() => setIsCartOpen(true)}
                onSearchClick={() => setIsSearchOpen(true)}
                cartItemCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
                onCategoryHover={setHoveredCategory}
                onMouseLeave={() => setHoveredCategory(null)}
            />

            {/* Navigation Dropdown */}
            <NavigationDropdown
                isVisible={!!hoveredCategory}
                items={filteredNavigationItems}
                onItemClick={(item) => {
                    console.log(`Navigate to ${item.label}`);
                    setHoveredCategory(null);
                }}
                onMouseLeave={() => setHoveredCategory(null)}
            />

            {/* Hero Section */}
            <HeroSection
                title={heroContent.title}
                subtitle={heroContent.subtitle}
                ctaText={heroContent.ctaText}
                ctaLink={heroContent.ctaLink}
                backgroundImage={heroContent.backgroundImage}
            />

            {/* Category Bar */}
            <CategoryBar
                categories={categories}
                activeCategory={activeCategory}
                onCategoryClick={setActiveCategory}
            />

            {/* Featured Collection */}
            <FeaturedCollection
                title="Onze Bestsellers"
                products={featuredProducts}
                viewAllLink="/collections/bestsellers"
                onAddToCart={handleAddToCart}
                onToggleFavorite={handleToggleFavorite}
            />

            {/* New Arrivals */}
            <FeaturedCollection
                title="Nieuwe Collectie"
                products={newArrivals}
                viewAllLink="/collections/nieuw"
                onAddToCart={handleAddToCart}
                onToggleFavorite={handleToggleFavorite}
            />

            {/* Newsletter Signup */}
            <NewsletterSignup />

            {/* Instagram Feed */}
            <InstagramFeed posts={instagramPosts} />

            {/* Footer */}
            <Footer />

            {/* Cart Drawer */}
            <CartDrawer
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cartItems={cartItems}
                onUpdateQuantity={handleUpdateCartItemQuantity}
                onRemoveItem={handleRemoveCartItem}
                onCheckout={handleCheckout}
            />

            {/* Search Modal */}
            <SearchModal
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
                onSearch={handleSearch}
            />
        </div>
    );
};

// Product Detail Page Component
const ProductDetailPage = () => {
    // In een echte applicatie zou je de product ID uit de URL halen
    // en de productgegevens ophalen via een API-aanroep
    const product = products[0]; // Gebruik het eerste product als voorbeeld

    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    // Format price with euro symbol
    const formatPrice = (price) => {
        return `€${price.toFixed(2).replace('.', ',')}`;
    };

    const handleAddToCart = () => {
        setCartItems([
            ...cartItems,
            {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0],
                size: selectedSize,
                color: selectedColor,
                quantity
            }
        ]);

        setIsCartOpen(true);
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navigation (hergebruik van hoofdcomponent) */}
            <NavigationBar
                onCartClick={() => setIsCartOpen(true)}
                onSearchClick={() => { }}
                cartItemCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
                onCategoryHover={() => { }}
                onMouseLeave={() => { }}
            />

            {/* Breadcrumbs */}
            <div className="bg-accentLight py-3">
                <div className="container mx-auto px-4">
                    <nav className="text-sm">
                        <ol className="flex items-center space-x-2">
                            <li>
                                <a href="/" className="hover:text-accentBeige transition-colors duration-200">Home</a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span>/</span>
                                <a href="/collections/kleding" className="hover:text-accentBeige transition-colors duration-200">Kleding</a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span>/</span>
                                <span className="text-textSecondary">{product.name}</span>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Product Detail */}
            <section className="py-8 md:py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Product Images */}
                        <div className="space-y-4">
                            {/* Main Image */}
                            <div className="aspect-square bg-gray-100 overflow-hidden">
                                <img
                                    src={product.images[selectedImage]}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Thumbnail Images */}
                            <div className="flex space-x-2 overflow-x-auto">
                                {product.images.map((image, index) => (
                                    <button
                                        key={index}
                                        className={`w-20 h-20 flex-shrink-0 border-2 ${selectedImage === index ? 'border-accentBeige' : 'border-transparent'
                                            }`}
                                        onClick={() => setSelectedImage(index)}
                                    >
                                        <img
                                            src={image}
                                            alt={`${product.name} - Afbeelding ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>

                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="flex items-center">
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star
                                                    key={star}
                                                    size={16}
                                                    className={star <= Math.floor(product.rating) ? 'text-accentBeige' : 'text-gray-300'}
                                                    fill="currentColor"
                                                />
                                            ))}
                                        </div>
                                        <span className="ml-2 text-sm text-textSecondary">
                                            {product.rating} ({product.reviewCount} reviews)
                                        </span>
                                    </div>

                                    {product.stockStatus === 'in_stock' ? (
                                        <span className="text-accentGreen text-sm">Op voorraad</span>
                                    ) : product.stockStatus === 'low_stock' ? (
                                        <span className="text-orange-500 text-sm">Nog maar enkele beschikbaar</span>
                                    ) : (
                                        <span className="text-red-500 text-sm">Niet op voorraad</span>
                                    )}
                                </div>

                                <div className="mb-6">
                                    {product.originalPrice ? (
                                        <div className="flex items-center space-x-2">
                                            <span className="text-2xl font-bold">{formatPrice(product.price)}</span>
                                            <span className="text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                                            <span className="bg-accentGreen text-white px-2 py-1 text-xs font-semibold rounded">
                                                {product.discount}% KORTING
                                            </span>
                                        </div>
                                    ) : (
                                        <span className="text-2xl font-bold">{formatPrice(product.price)}</span>
                                    )}
                                </div>
                            </div>

                            {/* Size Selection */}
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="font-medium">Maat</label>
                                    <a
                                        href="/pages/maattabel"
                                        className="text-sm text-textSecondary hover:text-accentBeige transition-colors duration-200"
                                    >
                                        Maattabel
                                    </a>
                                </div>

                                <div className="grid grid-cols-5 gap-2">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            className={`py-2 border ${selectedSize === size
                                                ? 'border-accentBeige bg-accentBeige text-white'
                                                : 'border-gray-200 hover:border-accentBeige'
                                                }`}
                                            onClick={() => setSelectedSize(size)}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Color Selection */}
                            <div>
                                <label className="font-medium block mb-2">Kleur</label>
                                <div className="flex space-x-3">
                                    {product.colors.map((color) => (
                                        <button
                                            key={color}
                                            className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-accentBeige' : 'border-transparent'
                                                }`}
                                            style={{ backgroundColor: color }}
                                            onClick={() => setSelectedColor(color)}
                                        >
                                            <span className="sr-only">Kleur: {color}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity and Add to Cart */}
                            <div className="flex space-x-4">
                                <div className="flex items-center border border-gray-200">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                                        aria-label="Verminder aantal"
                                        disabled={quantity <= 1}
                                    >
                                        <Minus size={16} />
                                    </button>

                                    <span className="px-4 py-2 text-center w-12">{quantity}</span>

                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                                        aria-label="Verhoog aantal"
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>

                                <button
                                    onClick={handleAddToCart}
                                    className="flex-1 bg-black text-white hover:bg-accentBeige transition-colors duration-200 px-6 py-3 font-medium"
                                >
                                    In Winkelwagen
                                </button>

                                <button
                                    className="p-3 border border-gray-200 hover:border-accentBeige transition-colors duration-200"
                                    aria-label="Voeg toe aan favorieten"
                                >
                                    <Heart size={20} />
                                </button>
                            </div>

                            {/* Shipping Info */}
                            <div className="border-t border-b border-gray-200 py-4 space-y-2">
                                <div className="flex items-center text-sm">
                                    <Truck className="mr-2 text-textSecondary" size={18} />
                                    <span>Gratis verzending vanaf €75</span>
                                </div>
                                <div className="flex items-center text-sm">
                                    <RefreshCw className="mr-2 text-textSecondary" size={18} />
                                    <span>Gratis retourneren binnen 30 dagen</span>
                                </div>
                                <div className="flex items-center text-sm">
                                    <Shield className="mr-2 text-textSecondary" size={18} />
                                    <span>Veilig betalen met iDeal, Creditcard of Afterpay</span>
                                </div>
                            </div>

                            {/* Product Tabs */}
                            <div className="border-b border-gray-200">
                                <div className="flex">
                                    <button
                                        className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === 'description'
                                            ? 'border-accentBeige text-accentBeige'
                                            : 'border-transparent hover:text-accentBeige'
                                            }`}
                                        onClick={() => setActiveTab('description')}
                                    >
                                        Beschrijving
                                    </button>
                                    <button
                                        className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === 'details'
                                            ? 'border-accentBeige text-accentBeige'
                                            : 'border-transparent hover:text-accentBeige'
                                            }`}
                                        onClick={() => setActiveTab('details')}
                                    >
                                        Details
                                    </button>
                                    <button
                                        className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === 'reviews'
                                            ? 'border-accentBeige text-accentBeige'
                                            : 'border-transparent hover:text-accentBeige'
                                            }`}
                                        onClick={() => setActiveTab('reviews')}
                                    >
                                        Reviews ({product.reviewCount})
                                    </button>
                                </div>
                            </div>

                            {/* Tab Content */}
                            <div className="py-4">
                                {activeTab === 'description' && (
                                    <div>
                                        <p>{product.description}</p>
                                    </div>
                                )}

                                {activeTab === 'details' && (
                                    <div className="space-y-4">
                                        <h3 className="font-medium">Productdetails</h3>
                                        <ul className="space-y-2">
                                            <li className="flex">
                                                <span className="w-32 text-textSecondary">Materiaal:</span>
                                                <span>100% Zijde</span>
                                            </li>
                                            <li className="flex">
                                                <span className="w-32 text-textSecondary">Pasvorm:</span>
                                                <span>Regular fit</span>
                                            </li>
                                            <li className="flex">
                                                <span className="w-32 text-textSecondary">Wasvoorschrift:</span>
                                                <span>Handwas</span>
                                            </li>
                                            <li className="flex">
                                                <span className="w-32 text-textSecondary">Artikelnummer:</span>
                                                <span>BLD-{product.id}</span>
                                            </li>
                                        </ul>
                                    </div>
                                )}

                                {activeTab === 'reviews' && (
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="font-medium">Klantreviews</h3>
                                                <div className="flex items-center mt-1">
                                                    <div className="flex">
                                                        {[1, 2, 3, 4, 5].map((star) => (
                                                            <Star
                                                                key={star}
                                                                size={16}
                                                                className={star <= Math.floor(product.rating) ? 'text-accentBeige' : 'text-gray-300'}
                                                                fill="currentColor"
                                                            />
                                                        ))}
                                                    </div>
                                                    <span className="ml-2 text-sm text-textSecondary">
                                                        Gebaseerd op {product.reviewCount} reviews
                                                    </span>
                                                </div>
                                            </div>

                                            <button className="text-sm font-medium text-accentBeige hover:underline">
                                                Schrijf een review
                                            </button>
                                        </div>

                                        {/* Sample reviews */}
                                        <div className="space-y-4">
                                            <div className="border-b border-gray-100 pb-4">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div>
                                                        <h4 className="font-medium">Laura</h4>
                                                        <div className="flex mt-1">
                                                            {[1, 2, 3, 4, 5].map((star) => (
                                                                <Star
                                                                    key={star}
                                                                    size={14}
                                                                    className={star <= 5 ? 'text-accentBeige' : 'text-gray-300'}
                                                                    fill="currentColor"
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <span className="text-sm text-textSecondary">2 weken geleden</span>
                                                </div>
                                                <p className="text-sm">
                                                    Prachtige blouse van hoge kwaliteit. De pasvorm is perfect en het materiaal voelt luxueus aan. Zeer tevreden met mijn aankoop!
                                                </p>
                                            </div>

                                            <div className="border-b border-gray-100 pb-4">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div>
                                                        <h4 className="font-medium">Emma</h4>
                                                        <div className="flex mt-1">
                                                            {[1, 2, 3, 4, 5].map((star) => (
                                                                <Star
                                                                    key={star}
                                                                    size={14}
                                                                    className={star <= 4 ? 'text-accentBeige' : 'text-gray-300'}
                                                                    fill="currentColor"
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <span className="text-sm text-textSecondary">1 maand geleden</span>
                                                </div>
                                                <p className="text-sm">
                                                    Mooie blouse, maar iets kleiner dan verwacht. Ik raad aan om een maat groter te bestellen als je twijfelt.
                                                </p>
                                            </div>
                                        </div>

                                        <button className="text-sm font-medium hover:text-accentBeige transition-colors duration-200">
                                            Bekijk alle {product.reviewCount} reviews
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className="py-12 bg-accentLight">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-8">Je vindt deze items misschien ook leuk</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {products.slice(1, 5).map((relatedProduct) => (
                            <a
                                key={relatedProduct.id}
                                href={`/products/${relatedProduct.id}`}
                                className="block bg-white"
                            >
                                <div className="relative aspect-[3/4] overflow-hidden">
                                    <img
                                        src={relatedProduct.images[0]}
                                        alt={relatedProduct.name}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />

                                    {relatedProduct.isNew && (
                                        <span className="absolute top-2 left-2 bg-accentBeige text-white text-xs font-semibold px-2 py-1">
                                            NIEUW
                                        </span>
                                    )}
                                </div>

                                <div className="p-4">
                                    <h3 className="font-medium text-sm mb-1">{relatedProduct.name}</h3>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            {relatedProduct.originalPrice ? (
                                                <>
                                                    <span className="font-semibold">{formatPrice(relatedProduct.price)}</span>
                                                    <span className="text-gray-500 line-through text-sm">{formatPrice(relatedProduct.originalPrice)}</span>
                                                </>
                                            ) : (
                                                <span className="font-semibold">{formatPrice(relatedProduct.price)}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer (hergebruik van hoofdcomponent) */}
            <Footer />

            {/* Cart Drawer (hergebruik van hoofdcomponent) */}
            <CartDrawer
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cartItems={cartItems}
                onUpdateQuantity={() => { }}
                onRemoveItem={() => { }}
                onCheckout={() => { }}
            />
        </div>
    );
};

// Ontbrekende iconen toevoegen
const Truck = ({ className, size }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M10 17h4V5H2v12h3" />
        <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1" />
        <circle cx="7.5" cy="17.5" r="2.5" />
        <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
);

const RefreshCw = ({ className, size }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M21 2v6h-6" />
        <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
        <path d="M3 22v-6h6" />
        <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
    </svg>
);

const Shield = ({ className, size }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

// Cart Page Component
const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: '1',
            name: 'Elegante Zijden Blouse',
            price: 89.95,
            image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            size: 'M',
            color: '#000000',
            quantity: 1
        },
        {
            id: '2',
            name: 'Premium Leren Handtas',
            price: 249.95,
            image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
            size: 'One Size',
            color: '#8B4513',
            quantity: 1
        }
    ]);

    const [promoCode, setPromoCode] = useState('');
    const [promoCodeApplied, setPromoCodeApplied] = useState(false);
    const [promoDiscount, setPromoDiscount] = useState(0);

    // Calculate totals
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? (subtotal >= 75 ? 0 : 4.95) : 0;
    const discount = promoCodeApplied ? promoDiscount : 0;
    const total = subtotal + shipping - discount;

    // Format price with euro symbol
    const formatPrice = (price) => {
        return `€${price.toFixed(2).replace('.', ',')}`;
    };

    const handleUpdateQuantity = (itemId, size, color, newQuantity) => {
        setCartItems(
            cartItems.map(item =>
                item.id === itemId && item.size === size && item.color === color
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const handleRemoveItem = (itemId, size, color) => {
        setCartItems(
            cartItems.filter(item =>
                !(item.id === itemId && item.size === size && item.color === color)
            )
        );
    };

    const handleApplyPromoCode = (e) => {
        e.preventDefault();

        // Simuleer een promocode check
        if (promoCode.toUpperCase() === 'WELKOM10') {
            setPromoCodeApplied(true);
            setPromoDiscount(subtotal * 0.1); // 10% korting
        } else {
            alert('Ongeldige promotiecode');
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navigation (hergebruik van hoofdcomponent) */}
            <NavigationBar
                onCartClick={() => { }}
                onSearchClick={() => { }}
                cartItemCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
                onCategoryHover={() => { }}
                onMouseLeave={() => { }}
            />

            {/* Page Content */}
            <div className="flex-grow py-8 md:py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl md:text-3xl font-bold mb-8">Winkelwagen</h1>

                    {cartItems.length === 0 ? (
                        <div className="text-center py-12">
                            <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
                            <h2 className="text-xl font-medium mb-4">Je winkelwagen is leeg</h2>
                            <p className="text-textSecondary mb-6">Bekijk onze nieuwste collectie en vind iets moois!</p>
                            <Button
                                className="bg-black text-white hover:bg-accentBeige transition-colors duration-200 px-6 py-3 font-medium"
                                asChild
                            >
                                <a href="/collections/all">Verder winkelen</a>
                            </Button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Cart Items */}
                            <div className="lg:col-span-2">
                                <div className="bg-white border border-gray-200 divide-y divide-gray-200">
                                    {/* Header */}
                                    <div className="hidden md:grid md:grid-cols-12 p-4 text-sm font-medium text-textSecondary">
                                        <div className="md:col-span-6">Product</div>
                                        <div className="md:col-span-2 text-center">Prijs</div>
                                        <div className="md:col-span-2 text-center">Aantal</div>
                                        <div className="md:col-span-2 text-right">Totaal</div>
                                    </div>

                                    {/* Items */}
                                    {cartItems.map((item, index) => (
                                        <div key={`${item.id}-${item.size}-${item.color}`} className="p-4">
                                            <div className="md:grid md:grid-cols-12 md:gap-4 items-center">
                                                {/* Product info */}
                                                <div className="md:col-span-6 flex">
                                                    <div className="w-20 h-24 bg-gray-100 mr-4 flex-shrink-0">
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>

                                                    <div>
                                                        <h3 className="font-medium mb-1">{item.name}</h3>
                                                        <div className="text-sm text-textSecondary mb-2">
                                                            <span>Maat: {item.size}</span>
                                                            <span className="mx-2">|</span>
                                                            <span>
                                                                Kleur:
                                                                <span
                                                                    className="inline-block w-3 h-3 rounded-full ml-1 align-middle"
                                                                    style={{ backgroundColor: item.color }}
                                                                ></span>
                                                            </span>
                                                        </div>

                                                        <button
                                                            onClick={() => handleRemoveItem(item.id, item.size, item.color)}
                                                            className="text-sm text-textSecondary hover:text-accentBeige transition-colors duration-200 md:hidden"
                                                        >
                                                            Verwijderen
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Price - mobile */}
                                                <div className="md:hidden flex justify-between items-center mt-4">
                                                    <span className="text-sm text-textSecondary">Prijs:</span>
                                                    <span>{formatPrice(item.price)}</span>
                                                </div>

                                                {/* Price - desktop */}
                                                <div className="hidden md:block md:col-span-2 text-center">
                                                    {formatPrice(item.price)}
                                                </div>

                                                {/* Quantity - mobile */}
                                                <div className="md:hidden flex justify-between items-center mt-2">
                                                    <span className="text-sm text-textSecondary">Aantal:</span>
                                                    <div className="flex items-center border border-gray-200">
                                                        <button
                                                            onClick={() => handleUpdateQuantity(
                                                                item.id,
                                                                item.size,
                                                                item.color,
                                                                Math.max(1, item.quantity - 1)
                                                            )}
                                                            className="px-2 py-1 hover:bg-gray-100 transition-colors duration-200"
                                                            aria-label="Verminder aantal"
                                                            disabled={item.quantity <= 1}
                                                        >
                                                            <Minus size={14} />
                                                        </button>

                                                        <span className="px-2 py-1 text-sm">{item.quantity}</span>

                                                        <button
                                                            onClick={() => handleUpdateQuantity(
                                                                item.id,
                                                                item.size,
                                                                item.color,
                                                                item.quantity + 1
                                                            )}
                                                            className="px-2 py-1 hover:bg-gray-100 transition-colors duration-200"
                                                            aria-label="Verhoog aantal"
                                                        >
                                                            <Plus size={14} />
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Quantity - desktop */}
                                                <div className="hidden md:flex md:col-span-2 justify-center">
                                                    <div className="flex items-center border border-gray-200">
                                                        <button
                                                            onClick={() => handleUpdateQuantity(
                                                                item.id,
                                                                item.size,
                                                                item.color,
                                                                Math.max(1, item.quantity - 1)
                                                            )}
                                                            className="px-2 py-1 hover:bg-gray-100 transition-colors duration-200"
                                                            aria-label="Verminder aantal"
                                                            disabled={item.quantity <= 1}
                                                        >
                                                            <Minus size={14} />
                                                        </button>

                                                        <span className="px-3 py-1 text-sm">{item.quantity}</span>

                                                        <button
                                                            onClick={() => handleUpdateQuantity(
                                                                item.id,
                                                                item.size,
                                                                item.color,
                                                                item.quantity + 1
                                                            )}
                                                            className="px-2 py-1 hover:bg-gray-100 transition-colors duration-200"
                                                            aria-label="Verhoog aantal"
                                                        >
                                                            <Plus size={14} />
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Total - mobile */}
                                                <div className="md:hidden flex justify-between items-center mt-2">
                                                    <span className="text-sm text-textSecondary">Totaal:</span>
                                                    <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
                                                </div>

                                                {/* Total - desktop */}
                                                <div className="hidden md:block md:col-span-2 text-right font-medium">
                                                    {formatPrice(item.price * item.quantity)}
                                                </div>

                                                {/* Remove button - desktop */}
                                                <button
                                                    onClick={() => handleRemoveItem(item.id, item.size, item.color)}
                                                    className="hidden md:block absolute right-4 top-4 text-gray-400 hover:text-red-500 transition-colors duration-200"
                                                    aria-label="Verwijder item"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Continue Shopping */}
                                <div className="mt-6">
                                    <a
                                        href="/collections/all"
                                        className="inline-flex items-center text-sm font-medium hover:text-accentBeige transition-colors duration-200"
                                    >
                                        <ChevronLeft size={16} className="mr-1" />
                                        Verder winkelen
                                    </a>
                                </div>
                            </div>

                            {/* Order Summary */}
                            <div className="lg:col-span-1">
                                <div className="bg-white border border-gray-200 p-6">
                                    <h2 className="text-lg font-bold mb-4">Besteloverzicht</h2>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex justify-between">
                                            <span className="text-textSecondary">Subtotaal</span>
                                            <span>{formatPrice(subtotal)}</span>
                                        </div>

                                        <div className="flex justify-between">
                                            <span className="text-textSecondary">Verzendkosten</span>
                                            <span>{shipping === 0 ? 'Gratis' : formatPrice(shipping)}</span>
                                        </div>

                                        {promoCodeApplied && (
                                            <div className="flex justify-between text-accentGreen">
                                                <span>Korting (WELKOM10)</span>
                                                <span>-{formatPrice(discount)}</span>
                                            </div>
                                        )}

                                        {subtotal > 0 && subtotal < 75 && (
                                            <div className="text-xs text-accentGreen">
                                                Nog {formatPrice(75 - subtotal)} te gaan voor gratis verzending!
                                            </div>
                                        )}

                                        <div className="border-t border-gray-200 pt-3 flex justify-between font-bold">
                                            <span>Totaal</span>
                                            <span>{formatPrice(total)}</span>
                                        </div>
                                    </div>

                                    {/* Promo Code */}
                                    {!promoCodeApplied && (
                                        <form onSubmit={handleApplyPromoCode} className="mb-6">
                                            <label className="text-sm font-medium block mb-2">Promotiecode</label>
                                            <div className="flex">
                                                <input
                                                    type="text"
                                                    value={promoCode}
                                                    onChange={(e) => setPromoCode(e.target.value)}
                                                    placeholder="Voer code in"
                                                    className="flex-grow px-3 py-2 border border-gray-200 focus:border-accentBeige focus:outline-none"
                                                />
                                                <button
                                                    type="submit"
                                                    className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-accentBeige transition-colors duration-200"
                                                >
                                                    Toepassen
                                                </button>
                                            </div>
                                        </form>
                                    )}

                                    {/* Checkout Button */}
                                    <Button
                                        className="w-full bg-black text-white hover:bg-accentBeige transition-colors duration-200 py-3 text-sm font-medium mb-4"
                                        asChild
                                    >
                                        <a href="/checkout">Afrekenen</a>
                                    </Button>

                                    {/* Payment Methods */}
                                    <div className="text-center">
                                        <p className="text-xs text-textSecondary mb-2">Veilig betalen met</p>
                                        <img
                                            src="/images/payment-methods.png"
                                            alt="Betaalmethoden"
                                            className="h-6 mx-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* You Might Also Like */}
            {cartItems.length > 0 && (
                <section className="py-12 bg-accentLight">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-8">Je vindt deze items misschien ook leuk</h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            {products.slice(2, 6).map((product) => (
                                <a
                                    key={product.id}
                                    href={`/products/${product.id}`}
                                    className="block bg-white"
                                >
                                    <div className="relative aspect-[3/4] overflow-hidden">
                                        <img
                                            src={product.images[0]}
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />

                                        {product.isNew && (
                                            <span className="absolute top-2 left-2 bg-accentBeige text-white text-xs font-semibold px-2 py-1">
                                                NIEUW
                                            </span>
                                        )}
                                    </div>

                                    <div className="p-4">
                                        <h3 className="font-medium text-sm mb-1">{product.name}</h3>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                {product.originalPrice ? (
                                                    <>
                                                        <span className="font-semibold">{formatPrice(product.price)}</span>
                                                        <span className="text-gray-500 line-through text-sm">{formatPrice(product.originalPrice)}</span>
                                                    </>
                                                ) : (
                                                    <span className="font-semibold">{formatPrice(product.price)}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Footer (hergebruik van hoofdcomponent) */}
            <Footer />
        </div>
    );
};

// Checkout Page Component
const CheckoutPage = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: '1',
            name: 'Elegante Zijden Blouse',
            price: 89.95,
            image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            size: 'M',
            color: '#000000',
            quantity: 1
        },
        {
            id: '2',
            name: 'Premium Leren Handtas',
            price: 249.95,
            image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
            size: 'One Size',
            color: '#8B4513',
            quantity: 1
        }
    ]);

    const [activeStep, setActiveStep] = useState('information');
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        apartment: '',
        postalCode: '',
        city: '',
        country: 'NL',
        phone: '',
        shippingMethod: 'standard',
        paymentMethod: 'ideal',
        saveInfo: false
    });

    // Calculate totals
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = formData.shippingMethod === 'standard' ? (subtotal >= 75 ? 0 : 4.95) : 9.95;
    const total = subtotal + shipping;

    // Format price with euro symbol
    const formatPrice = (price) => {
        return `€${price.toFixed(2).replace('.', ',')}`;
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleContinueToShipping = (e) => {
        e.preventDefault();
        setActiveStep('shipping');
    };

    const handleContinueToPayment = (e) => {
        e.preventDefault();
        setActiveStep('payment');
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        // In een echte applicatie zou je hier de bestelling verwerken
        alert('Bedankt voor je bestelling!');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 py-4">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <a href="/" className="text-2xl font-bold tracking-tighter">
                            BOLDYASE
                        </a>

                        <div className="hidden md:flex items-center space-x-4">
                            <span className="text-sm text-textSecondary">Veilig betalen</span>
                            <img
                                src="/images/payment-methods.png"
                                alt="Betaalmethoden"
                                className="h-5"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Checkout Form */}
                    <div className="lg:col-span-2">
                        {/* Progress Steps */}
                        <div className="flex items-center mb-8">
                            <div className={`flex items-center ${activeStep === 'information' ? 'text-black font-medium' : 'text-textSecondary'}`}>
                                <span className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs ${activeStep === 'information' ? 'bg-black text-white' : 'bg-gray-200 text-textSecondary'
                                    }`}>1</span>
                                Gegevens
                            </div>
                            <div className="w-12 h-px bg-gray-200 mx-2"></div>
                            <div className={`flex items-center ${activeStep === 'shipping' ? 'text-black font-medium' : 'text-textSecondary'}`}>
                                <span className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs ${activeStep === 'shipping' ? 'bg-black text-white' : 'bg-gray-200 text-textSecondary'
                                    }`}>2</span>
                                Verzending
                            </div>
                            <div className="w-12 h-px bg-gray-200 mx-2"></div>
                            <div className={`flex items-center ${activeStep === 'payment' ? 'text-black font-medium' : 'text-textSecondary'}`}>
                                <span className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs ${activeStep === 'payment' ? 'bg-black text-white' : 'bg-gray-200 text-textSecondary'
                                    }`}>3</span>
                                Betaling
                            </div>
                        </div>

                        {/* Information Step */}
                        {activeStep === 'information' && (
                            <form onSubmit={handleContinueToShipping}>
                                <div className="bg-white border border-gray-200 p-6 mb-4">
                                    <h2 className="text-lg font-bold mb-4">Contactgegevens</h2>

                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium mb-1">E-mail</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-3 py-2 border border-gray-200 focus:border-accentBeige focus:outline-none"
                                            />
                                        </div>

                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id="saveInfo"
                                                name="saveInfo"
                                                checked={formData.saveInfo}
                                                onChange={handleInputChange}
                                                className="mr-2"
                                            />
                                            <label htmlFor="saveInfo" className="text-sm">
                                                Houd me op de hoogte van nieuws en aanbiedingen
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-6">
                                    <h2 className="text-lg font-bold mb-4">Verzendadres</h2>

                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="firstName" className="block text-sm font-medium mb-1">Voornaam</label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-3 py-2 border border-gray-200 focus:border-accentBeige focus:outline-none"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="lastName" className="block text-sm font-medium mb-1">Achternaam</label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-3 py-2 border border-gray-200 focus:border-accentBeige focus:outline-none"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="address" className="block text-sm font-medium mb-1">Adres</label>
                                            <input
                                                type="text"
                                                id="address"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-3 py-2 border border-gray-200 focus:border-accentBeige focus:outline-none"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="apartment" className="block text-sm font-medium mb-1">Appartement, suite, etc. (optioneel)</label>
                                            <input
                                                type="text"
                                                id="apartment"
                                                name="apartment"
                                                value={formData.apartment}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-200 focus:border-accentBeige focus:outline-none"
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                            <div>
                                                <label htmlFor="postalCode" className="block text-sm font-medium mb-1">Postcode</label>
                                                <input
                                                    type="text"
                                                    id="postalCode"
                                                    name="postalCode"
                                                    value={formData.postalCode}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-3 py-2 border border-gray-200 focus:border-accentBeige focus:outline-none"
                                                />
                                            </div>

                                            <div className="md:col-span-2">
                                                <label htmlFor="city" className="block text-sm font-medium mb-1">Plaats</label>
                                                <input
                                                    type="text"
                                                    id="city"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-3 py-2 border border-gray-200 focus:border-accentBeige focus:outline-none"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="country" className="block text-sm font-medium mb-1">Land</label>
                                            <select
                                                id="country"
                                                name="country"
                                                value={formData.country}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-3 py-2 border border-gray-200 focus:border-accentBeige focus:outline-none"
                                            >
                                                <option value="NL">Nederland</option>
                                                <option value="BE">België</option>
                                                <option value="DE">Duitsland</option>
                                                <option value="FR">Frankrijk</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium mb-1">Telefoonnummer</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone
// ... (all your code above)

export default ShopifyApp;

