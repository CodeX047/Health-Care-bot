import React from "react";
import {
  Heart,
  MessageCircle,
  MapPin,
  Clock,
  Users,
  Shield,
  ArrowRight,
  BriefcaseMedical,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import "./../../../Constant/index.jsx";

const onEnterApp = () => {
  window.location.href = "/home";
};

const NavBar = () => {
  return (
    <nav className="bg-white border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-primary rounded-full p-2">
              <BriefcaseMedical className="text-white w-5 h-5" />
            </div>
            <span className="text-primary">Health Care Bot</span>
          </div>
          <Button onClick={onEnterApp}>
            Launch App
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
