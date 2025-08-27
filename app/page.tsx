"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/app/components/Navigation";
import FloatingActionButton from "@/app/components/FloatingActionButton";
import StatsSection from "@/app/components/StatsSection";
import TestimonialSection from "@/app/components/TestimonialSection";
import Image from "next/image";
import { 
  MapPin, 
  Headphones, 
  Coins, 
  Building2, 
  Users, 
  Globe,
  ChevronRight,
  Star,
  ArrowRight,
  Play,
  Download,
  Smartphone,
  Camera,
  Brain,
  Zap,
  Award,
  Heart,
  TrendingUp,
  Shield,
  Lightbulb,
  Rocket,
  Target,
  CheckCircle,
  Phone,
  Mail,
  Map,
  Clock,
  Globe2,
  Users2,
  Building,
  Coffee,
  ShoppingBag,
  Hotel,
  Bus,
  Train,
  Plane,
  Car,
  Compass,
  Calendar,
  Gift,
  Trophy,
  Flame,
  Sparkles,
  Handshake
} from "lucide-react";

export default function Home() {
  const handleDiscoverMore = () => {
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLearnFeatures = () => {
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetInTouch = () => {
    // Simulate contact form or redirect
    alert("Thank you for your interest! Our team will contact you soon. You can also reach us at: info@back2roots.kz");
  };

  const handleDownloadApp = () => {
    // Simulate app download
    alert("Download started! The Back2Roots app will be available on App Store and Google Play soon.");
  };

  const handleWatchDemo = () => {
    // Simulate video demo
    alert("Demo video will open in a new window. Experience the magic of Back2Roots!");
  };

  const handleExploreAstana = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSupportBusiness = () => {
    const element = document.getElementById("partners");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingActionButton />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.png"
            alt="Back2Roots Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Floating Icons */}
          <div className="absolute top-32 right-32 animate-bounce" style={{animationDelay: '0.5s'}}>
            <Coins className="w-8 h-8 text-primary/60" />
          </div>
          <div className="absolute bottom-32 left-32 animate-bounce" style={{animationDelay: '1.5s'}}>
            <MapPin className="w-8 h-8 text-primary/60" />
          </div>
          <div className="absolute top-1/3 left-20 animate-bounce" style={{animationDelay: '2.5s'}}>
            <Headphones className="w-8 h-8 text-primary/60" />
          </div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 animate-fade-in-up">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-white/90 font-medium">Revolutionizing Tourism in Astana</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-nomad font-bold text-white mb-6 animate-fade-in-up drop-shadow-2xl">
            Back2Roots
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 animate-fade-in-up drop-shadow-lg" style={{animationDelay: '0.2s'}}>
            Explore Astana in a new way
          </p>
          
          <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto animate-fade-in-up drop-shadow-lg" style={{animationDelay: '0.3s'}}>
            Experience the future of cultural exploration with AI-powered guidance, AR treasure hunts, and authentic local connections
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full group"
              onClick={handleDiscoverMore}
            >
              Discover More
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-black bg-white/90 hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full group"
              onClick={handleLearnFeatures}
            >
              Learn About Features
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">10K+</div>
              <div className="text-white/70 text-sm">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">150+</div>
              <div className="text-white/70 text-sm">Locations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">98%</div>
              <div className="text-white/70 text-sm">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Handshake className="w-5 h-5" />
              <span className="text-sm font-medium">Strategic Partnerships</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-nomad font-semibold text-foreground mb-4">
              Trusted Partners
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Working together with industry leaders to bring innovation and cultural preservation to Astana
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              { name: "Astana Innovations", logo: "/images/astaninnovations.PNG", description: "Leading innovation hub in Kazakhstan" },
              { name: "Astana Hub", logo: "/images/astanahub.PNG", description: "Tech ecosystem accelerator" },
              { name: "Meta", logo: "/images/meta.PNG", description: "AI and AR technology partner" },
              { name: "AWS", logo: "/images/aws.PNG", description: "Cloud infrastructure provider" }
            ].map((partner, index) => (
              <Card key={partner.name} className="bg-background/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={80}
                      height={80}
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{partner.name}</h3>
                  <p className="text-xs text-muted-foreground">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Partnership Benefits */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Innovation</h3>
              <p className="text-muted-foreground text-sm">Cutting-edge technology and research collaboration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Global Reach</h3>
              <p className="text-muted-foreground text-sm">International expertise and market access</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Community</h3>
              <p className="text-muted-foreground text-sm">Building strong local tech ecosystem</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-medium">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-nomad font-bold text-foreground mb-6">
                About Back2Roots
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Back2Roots is a revolutionary React Native application powered by an AI talking head system with voice-to-voice interactions and an AR coin collection system inspired by Pokemon-Go.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our mission is to help tourists in Astana easily discover new cultural and commercial attractions while giving businesses a way to connect with visitors through innovative technology.
              </p>
              
              {/* Feature Highlights */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Innovative AR Technology</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Community Driven Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Cultural Preservation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Local Business Support</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button onClick={handleExploreAstana} className="bg-primary hover:bg-primary/90">
                  Explore Astana
                  <MapPin className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" onClick={handleSupportBusiness}>
                  Support Business
                  <Building className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/30 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/asylai.jpg"
                    alt="Asylai - Back2Roots V2V Mascot"
                    fill
                    className="object-cover rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-8 right-8 w-24 h-24 bg-background/90 rounded-2xl shadow-lg flex items-center justify-center animate-bounce">
                  <MapPin className="w-12 h-12 text-primary" />
                </div>
                <div className="absolute bottom-8 left-8 w-20 h-20 bg-background/90 rounded-2xl shadow-lg flex items-center justify-center animate-bounce" style={{animationDelay: '1s'}}>
                  <Headphones className="w-10 h-10 text-primary" />
                </div>
                
                {/* Stats Overlay */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-background rounded-2xl shadow-xl p-4 border border-border/50">
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-xs text-muted-foreground">AR Locations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-xs text-muted-foreground">AI Guide</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">100+</div>
                      <div className="text-xs text-muted-foreground">Businesses</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Zap className="w-5 h-5" />
              <span className="text-sm font-medium">Core Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-nomad font-bold text-foreground mb-6">
              Key Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover what makes Back2Roots the ultimate companion for exploring Astana with cutting-edge technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Coins,
                title: "AR Coin Collection",
                description: "Pokemon-Go style system for discovering hidden treasures across Astana with interactive rewards",
                color: "from-yellow-400/20 to-orange-400/20",
                features: ["GPS Tracking", "Virtual Rewards", "Social Sharing", "Leaderboards"]
              },
              {
                icon: Headphones,
                title: "AI Talking Head Guide",
                description: "Voice-to-voice interactions with intelligent cultural guidance and local knowledge",
                color: "from-blue-400/20 to-purple-400/20",
                features: ["Natural Language", "Cultural Context", "Multi-language", "Personalized"]
              },
              {
                icon: MapPin,
                title: "Discover Attractions",
                description: "Find the best restaurants, cultural sites, and hidden gems in the city",
                color: "from-green-400/20 to-teal-400/20",
                features: ["Interactive Maps", "Reviews", "Photos", "Directions"]
              },
              {
                icon: Building2,
                title: "Support Local Business",
                description: "Connect tourists with authentic local experiences and boost local commerce",
                color: "from-red-400/20 to-pink-400/20",
                features: ["Business Profiles", "Special Offers", "Direct Contact", "Reviews"]
              }
            ].map((feature, index) => (
              <Card key={feature.title} className="bg-background/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-nomad font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  
                  {/* Feature List */}
                  <div className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Feature Demo CTA */}
          <div className="mt-16 text-center">
            <div className="bg-background/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50">
              <h3 className="text-2xl font-nomad font-semibold text-foreground mb-4">
                Experience the Magic
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                See how Back2Roots transforms your Astana experience with interactive demos and real-time features
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={handleWatchDemo} className="bg-primary hover:bg-primary/90">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </Button>
                <Button variant="outline" onClick={handleDownloadApp}>
                  <Download className="w-4 h-4 mr-2" />
                  Download App
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Commerce Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-3xl p-12 md:p-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-medium">Economic Impact</span>
              </div>
              <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-nomad font-bold text-foreground mb-6">
                Boosting Local Commerce
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Tourists will discover restaurants and businesses through our AR system, boosting local commerce while providing visitors with new adventures and authentic experiences.
              </p>
              
              {/* Benefits Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-background/80 px-6 py-4 rounded-2xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Increased Foot Traffic</h4>
                  <p className="text-sm text-muted-foreground">40% more visitors discover local businesses</p>
                </div>
                <div className="bg-background/80 px-6 py-4 rounded-2xl">
                                     <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                     <Building2 className="w-6 h-6 text-primary" />
                   </div>
                   <h4 className="font-semibold text-foreground mb-2">Cultural Discovery</h4>
                  <p className="text-sm text-muted-foreground">Authentic cultural experiences for tourists</p>
                </div>
                <div className="bg-background/80 px-6 py-4 rounded-2xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Local Business Growth</h4>
                  <p className="text-sm text-muted-foreground">Sustainable economic development</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2 bg-background/80 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-sm font-medium text-foreground">Increased Foot Traffic</span>
                </div>
                <div className="flex items-center gap-2 bg-background/80 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-sm font-medium text-foreground">Cultural Discovery</span>
                </div>
                <div className="flex items-center gap-2 bg-background/80 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-sm font-medium text-foreground">Local Business Growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Call to Action Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Rocket className="w-5 h-5" />
            <span className="text-sm font-medium">Get Started</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-nomad font-bold text-foreground mb-6">
            Join the Journey
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Back2Roots is bringing Astana to life. Experience the future of cultural exploration and local commerce with our innovative platform.
          </p>
          
          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground text-sm mb-3">Speak with our team directly</p>
              <p className="text-primary font-medium">+7 777 123 4567</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
              <p className="text-muted-foreground text-sm mb-3">Send us a detailed message</p>
              <p className="text-primary font-medium">info@back2roots.kz</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <Map className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
              <p className="text-muted-foreground text-sm mb-3">Meet us in person</p>
              <p className="text-primary font-medium">Astana, Kazakhstan</p>
            </div>
          </div>

          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg rounded-full group" onClick={handleGetInTouch}>
            Get in Touch
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary/50 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <Image
                  src="/images/logo.jpg"
                  alt="Back2Roots Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-lg font-nomad font-semibold text-foreground">Back2Roots</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Bringing Astana to life through innovation and culture
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-foreground mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>AR Coin Collection</li>
                <li>AI Talking Head</li>
                <li>Cultural Discovery</li>
                <li>Local Business Support</li>
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Partners</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Contact</li>
                <li>Support</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-border/50">
            <p className="text-muted-foreground">
              © 2024 Back2Roots. All rights reserved. Bringing Astana to life through innovation and culture.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
