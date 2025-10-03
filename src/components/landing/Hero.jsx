import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Stats from "./../../../Constant/index.jsx";

const onEnterApp = () => {
  window.location.href = "/home";
};

const Hero = () => {
  const statsArray = Array.isArray(Stats)
    ? Stats
    : Stats && Stats.stats
    ? Stats.stats
    : [];
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl text-foreground leading-tight">
                Healthcare Access for
                <span className="text-primary"> Rural Communities</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Bridge the healthcare gap with our AI-powered assistant. Get
                instant medical guidance, find nearby facilities, and access
                emergency care information - all designed specifically for rural
                communities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={onEnterApp} className="px-8 py-3 text-lg">
                Start Chatting Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="px-8 py-3 text-lg">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {statsArray.map(({ number, label }, idx) => (
                <div className="text-center" key={`stat-${idx}`}>
                  <div className="text-2xl text-primary">{number}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1742106850780-fbcc50b1ef5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGhlYWx0aGNhcmUlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzU5MzkyNjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Rural healthcare community"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
