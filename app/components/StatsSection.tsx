"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, MapPin, Star, TrendingUp, Award, Heart, Zap, Globe } from "lucide-react";

export default function StatsSection() {
  const [counts, setCounts] = useState({
    users: 0,
    locations: 0,
    businesses: 0,
    satisfaction: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  const targetCounts = {
    users: 10000,
    locations: 150,
    businesses: 200,
    satisfaction: 98
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("stats-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      setCounts(prev => ({
        users: Math.min(prev.users + Math.ceil(targetCounts.users / steps), targetCounts.users),
        locations: Math.min(prev.locations + Math.ceil(targetCounts.locations / steps), targetCounts.locations),
        businesses: Math.min(prev.businesses + Math.ceil(targetCounts.businesses / steps), targetCounts.businesses),
        satisfaction: Math.min(prev.satisfaction + Math.ceil(targetCounts.satisfaction / steps), targetCounts.satisfaction)
      }));
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    {
      icon: Users,
      value: counts.users.toLocaleString(),
      label: "Active Users",
      description: "Exploring Astana daily",
      color: "from-blue-400/20 to-purple-400/20",
      trend: "+15% this month"
    },
    {
      icon: MapPin,
      value: counts.locations,
      label: "Cultural Locations",
      description: "Discoveries across the city",
      color: "from-green-400/20 to-teal-400/20",
      trend: "+8 new locations"
    },
    {
      icon: TrendingUp,
      value: counts.businesses,
      label: "Local Businesses",
      description: "Connected and growing",
      color: "from-orange-400/20 to-red-400/20",
      trend: "+12% growth"
    },
    {
      icon: Star,
      value: `${counts.satisfaction}%`,
      label: "User Satisfaction",
      description: "Rated by our community",
      color: "from-yellow-400/20 to-orange-400/20",
      trend: "5-star average"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Best Tourism App 2024",
      description: "Kazakhstan Digital Awards"
    },
    {
      icon: Heart,
      title: "Community Choice",
      description: "Most loved by locals"
    },
    {
      icon: Zap,
      title: "Innovation Award",
      description: "Tech Startup Competition"
    },
    {
      icon: Globe,
      title: "Global Recognition",
      description: "Featured in TechCrunch"
    }
  ];

  return (
    <section id="stats-section" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <TrendingUp className="w-5 h-5" />
            <span className="text-sm font-medium">Growth & Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-nomad font-bold text-foreground mb-6">
            Impact & Growth
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how Back2Roots is transforming tourism and local business in Astana with real-time metrics and achievements
          </p>
        </div>
        
        {/* Main Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={stat.label} className="bg-background/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-nomad font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {stat.description}
                </p>
                <div className="text-sm text-primary font-medium">
                  {stat.trend}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-nomad font-semibold text-foreground mb-4">
            Awards & Recognition
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our commitment to innovation and community impact has been recognized by industry leaders
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={achievement.title} className="bg-background/60 backdrop-blur-sm border border-border/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2 text-lg">
                  {achievement.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-background/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-nomad font-semibold text-foreground mb-4">
              Join Our Success Story
            </h3>
            <p className="text-muted-foreground mb-6">
              Be part of the revolution that's transforming how people explore and experience Astana
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium transition-colors duration-300"
              >
                Get Started Today
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById("partners");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-full font-medium transition-colors duration-300"
              >
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
