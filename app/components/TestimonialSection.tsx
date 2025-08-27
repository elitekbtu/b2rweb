"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote, Star, Heart, ThumbsUp, MessageCircle, Share2 } from "lucide-react";

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Amina Kenzheyeva",
      role: "Local Restaurant Owner",
      content: "Back2Roots has transformed our business. Tourists discover us through the AR system and we've seen a 40% increase in visitors. The cultural connection is authentic and meaningful.",
      rating: 5,
      avatar: "AK",
      location: "Astana, Kazakhstan",
      business: "Traditional Kazakh Cuisine",
      impact: "40% increase in visitors"
    },
    {
      name: "Marat Zhumabayev",
      role: "Tourism Guide",
      content: "The AI talking head system is incredible. It provides accurate cultural context and helps visitors understand the real Astana beyond the typical tourist experience.",
      rating: 5,
      avatar: "MZ",
      location: "Astana, Kazakhstan",
      business: "Cultural Tourism Expert",
      impact: "Enhanced visitor experience"
    },
    {
      name: "Elena Petrova",
      role: "International Tourist",
      content: "I discovered hidden gems in Astana I never would have found otherwise. The AR coin collection made exploring fun and the AI guide was incredibly helpful.",
      rating: 5,
      avatar: "EP",
      location: "Moscow, Russia",
      business: "Travel Blogger",
      impact: "Unforgettable cultural journey"
    },
    {
      name: "Daulet Sarsenov",
      role: "Cultural Center Director",
      content: "This platform perfectly bridges technology and tradition. It's helping preserve our cultural heritage while making it accessible to modern visitors.",
      rating: 5,
      avatar: "DS",
      location: "Astana, Kazakhstan",
      business: "National Cultural Center",
      impact: "Cultural preservation success"
    },
    {
      name: "Sarah Johnson",
      role: "Tech Entrepreneur",
      content: "As someone who works in tech, I'm impressed by the seamless integration of AR, AI, and cultural content. This is the future of tourism.",
      rating: 5,
      avatar: "SJ",
      location: "San Francisco, USA",
      business: "Tech Startup Founder",
      impact: "Innovation inspiration"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  const handleLike = () => {
    // Simulate like functionality
    alert("Thank you for your feedback! This helps us improve our platform.");
  };

  const handleShare = () => {
    // Simulate share functionality
    if (navigator.share) {
      navigator.share({
        title: "Back2Roots Testimonial",
        text: `"${currentTestimonial.content}" - ${currentTestimonial.name}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(`"${currentTestimonial.content}" - ${currentTestimonial.name}`);
      alert("Testimonial copied to clipboard!");
    }
  };

  const handleComment = () => {
    // Simulate comment functionality
    alert("Comment feature coming soon! Share your thoughts on our platform.");
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Heart className="w-5 h-5" />
            <span className="text-sm font-medium">Community Voices</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-nomad font-bold text-foreground mb-6">
            What People Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our community of users and local businesses about their Back2Roots experience and success stories
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-12 text-center relative">
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 text-primary/20">
                <Quote className="w-16 h-16" />
              </div>

              {/* Testimonial Content */}
              <div className="mb-8">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 italic">
                  "{currentTestimonial.content}"
                </p>
                
                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary font-nomad">
                      {currentTestimonial.avatar}
                    </span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-foreground text-lg">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-muted-foreground">
                      {currentTestimonial.role}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {currentTestimonial.location}
                    </p>
                  </div>
                </div>

                {/* Business Impact */}
                <div className="bg-primary/5 rounded-2xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground mb-2">Business Impact</p>
                  <p className="text-primary font-semibold">{currentTestimonial.impact}</p>
                </div>

                {/* Interactive Actions */}
                <div className="flex justify-center gap-4 mb-6">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleLike}
                    className="rounded-full px-4 py-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    Like
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleComment}
                    className="rounded-full px-4 py-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Comment
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleShare}
                    className="rounded-full px-4 py-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mb-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary scale-125"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="rounded-full w-12 h-12 p-0 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="rounded-full w-12 h-12 p-0 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Auto-play Toggle */}
              <div className="mt-6">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {isAutoPlaying ? "Pause" : "Play"} Auto-play
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Additional Testimonials Preview */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card key={index} className="bg-background/60 backdrop-blur-sm border border-border/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-sm font-bold text-primary font-nomad">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-muted-foreground line-clamp-3">
                    "{testimonial.content}"
                  </p>
                  <div className="flex justify-center gap-1 mt-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
