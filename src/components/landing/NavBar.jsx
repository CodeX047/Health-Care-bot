import React from "react";
import { Link } from "react-router-dom";
import { BriefcaseMedical } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <nav className="border-b border-border shadow-sm sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-primary rounded-full p-2">
              <BriefcaseMedical className="text-white w-5 h-5" />
            </div>
            <span className="text-primary">Health Care Bot</span>
          </div>
          <Link to="/chat">
            <Button className="px-4 py-2 bg-primary text-white rounded-md cursor-pointer">
              Launch App
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
