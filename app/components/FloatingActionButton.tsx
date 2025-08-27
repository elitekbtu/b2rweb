"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowUp, MapPin, Headphones } from "lucide-react";
import Image from "next/image";

export default function FloatingActionButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const actions = [
    {
      icon: MapPin,
      label: "Explore",
      action: () => {
        const element = document.getElementById("features");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    {
      icon: Headphones,
      label: "Learn More",
      action: () => {
        const element = document.getElementById("about");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    {
      icon: MessageCircle,
      label: "Contact",
      action: () => {
        const element = document.getElementById("contact");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  ];

  const handleMainButtonClick = () => {
    if (isExpanded) {
      scrollToTop();
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Action Buttons */}
      <div className={`flex flex-col gap-3 transition-all duration-300 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        {actions.map((action, index) => (
          <Button
            key={action.label}
            variant="outline"
            size="sm"
            onClick={action.action}
            className="bg-background/90 backdrop-blur-sm border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <action.icon className="w-4 h-4 mr-2" />
            {action.label}
          </Button>
        ))}
      </div>

      {/* Main FAB with Asylai Mascot */}
      <Button
        onClick={handleMainButtonClick}
        className={`w-16 h-16 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
          isExpanded ? 'rotate-45' : ''
        }`}
      >
        {isExpanded ? (
          <ArrowUp className="w-6 h-6" />
        ) : (
          <Image
            src="/images/asylai.jpg"
            alt="Asylai - Back2Roots Mascot"
            width={48}
            height={48}
            className="object-cover rounded-full"
          />
        )}
      </Button>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        variant="outline"
        size="sm"
        className="mt-3 w-14 h-14 rounded-full bg-background/90 backdrop-blur-sm border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </div>
  );
}
