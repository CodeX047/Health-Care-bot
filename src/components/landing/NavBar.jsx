import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <nav className="border-b border-border shadow-sm sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/image/logo.png"
              alt="Health Care Bot"
              className="w-40 sm:w-[150px]"
            />
          </div>
          <div>
            <Link to="/chat">
              <Button className="px-4 py-2 bg-primary text-white rounded-md cursor-pointer">
                Launch App
              </Button>
            </Link>
            <Link to={"/sms"}>
              <Button className="ml-3 px-4 py-2 bg-primary text-white rounded-md cursor-pointer">
                Open SMS App
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
