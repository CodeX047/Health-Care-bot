import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Stats from "./../../../Constant/index.jsx";

// Very small inline count-up hook for simple numeric stats
function useCountUp(target, duration = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!target || isNaN(Number(target))) {
      setValue(target);
      return;
    }
    const end = Number(target);
    let start = 0;
    const stepTime = Math.max(16, duration / end);
    const handle = setInterval(() => {
      start += Math.max(1, Math.round(end / (duration / stepTime)));
      if (start >= end) {
        setValue(end);
        clearInterval(handle);
      } else {
        setValue(start);
      }
    }, stepTime);

    return () => clearInterval(handle);
  }, [target, duration]);

  return value;
}

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

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div>
                <Link to="/chat">
                  <Button
                    className="px-8 py-3 text-lg hover:scale-[1.02] transform transition cursor-pointer"
                  >
                    Start Chatting Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <div className="text-xs text-muted-foreground mt-2">
                  Quick, anonymous medical guidance
                </div>
              </div>

              <div>
                <Link to='/learn-more'>
                  <Button
                    variant="outline"
                  className="px-8 py-3 text-lg hover:scale-[1.02] transform transition cursor-pointer"
                  >
                  Learn More
                </Button>
                </Link>
                <div className="text-xs text-muted-foreground mt-2">
                  How the assistant works and what to expect
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {statsArray.map(({ number, label }, idx) => {
                // If number contains non-digit (like 24/7 or 1000+), show as-is
                const numeric =
                  /^[0-9]+$/.test(String(number).replace(/\D/g, "")) &&
                  !/\D$/.test(String(number));
                const countValue = numeric ? Number(number) : null;
                const display = countValue
                  ? useCountUp(countValue, 1000)
                  : number;

                return (
                  <div className="text-center" key={`stat-${idx}`}>
                    <div className="text-2xl text-primary font-semibold">
                      {display}
                    </div>
                    <div className="text-sm text-muted-foreground">{label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition hover:scale-[1.01]">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1742106850780-fbcc50b1ef5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGhlYWx0aGNhcmUlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzU5MzkyNjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Rural healthcare community"
                className="w-full h-96 object-cover will-change-transform"
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
