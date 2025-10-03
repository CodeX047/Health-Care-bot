import React, { useEffect, useState } from "react";
import { Shield, Users, CheckCircle, Star } from "lucide-react";

const Trust = () => {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-8">
          <div className="flex items-center justify-center space-x-3">
            <div className="p-2 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 animate-pulse-slow">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl text-foreground">Trusted & Secure</h2>
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Our AI assistant offers general health advice. For serious medical
            emergencies, call 112 immediately. This tool is a supplement to
            professional medical care.
          </p>

          {/* trust badges */}
          <div className="flex items-center justify-center space-x-6 mt-6">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-sm text-foreground">Evidence-based</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-primary" />
              <span className="text-sm text-foreground">Community-focused</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm text-foreground">Local resources</span>
            </div>
          </div>

          <div className="mt-6">
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-white hover:opacity-95"
            >
              Learn about safety
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
