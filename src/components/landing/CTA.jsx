import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const onEnterApp = () => {
  window.location.href = "/home";
};

const CTA = () => {

  return (
    <section className="py-16 relative overflow-hidden bg-primary">
      

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="space-y-6">
          <h2 className="text-3xl text-white">Ready to Get Started?</h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of rural community members who rely on our AI
            healthcare assistant for trusted health information and guidance.
          </p>

          <div className="flex items-center justify-center gap-4 flex-col sm:flex-row">
            <Button
              onClick={onEnterApp}
              variant="secondary"
              className="px-8 py-3 text-lg transform hover:-translate-y-0.5 transition"
            >
              Launch Healthcare AI Bot
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
