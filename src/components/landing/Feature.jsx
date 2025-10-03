import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Features_data from "./../../../Constant/index.jsx";

const Feature = () => {
  const featuresArray = Array.isArray(Features_data)
    ? Features_data
    : Features_data && Features_data.features
    ? Features_data.features
    : [];
  return (
    <section className="py-20 relative overflow-hidden">
      <div
        className="absolute -top-16 -right-16 w-72 h-72 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden
      />
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            Comprehensive healthcare assistance for
            <span className="text-primary"> rural communities</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI assistant combines local resources, emergency guidance, and
            telehealth tools so your community gets fast, practical care when it
            matters most.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {featuresArray.map((feature, index) => (
            <Card
              key={feature.title ?? index}
              className="bg-white dark:bg-card transform transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl focus:outline-none"
              role="article"
              aria-labelledby={`feature-${index}-title`}
            >
              <CardContent className="p-6 flex flex-col h-full justify-between">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-tr from-primary/10 to-accent/20 rounded-lg p-3 flex-shrink-0 text-primary ring-1 ring-primary/10">
                    {feature.icon}
                  </div>

                  <div className="space-y-2">
                    <h3
                      id={`feature-${index}-title`}
                      className="text-lg font-medium text-foreground"
                    >
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
