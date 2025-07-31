import React, { useState } from "react";
import { ChevronDown, Globe, Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white w-full border-b border-gray-200 text-sm">
      <div className="max-w-[1600px] mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left side: Logo & nav */}
        <div className="flex items-center gap-8">
          <img
            src="https://mms.businesswire.com/media/20230907020022/en/1881986/5/Mailchimp_Logo_50-50_Black.jpg?download=1"
            alt="Mailchimp Logo"
            className="h-7"
          />
          <nav className="hidden md:flex items-center gap-6 text-gray-900 font-medium">
            <div className="flex items-center gap-1 cursor-pointer hover:underline">
              Solutions & Services <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:underline">
              Integrations <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:underline">
              Resources <ChevronDown className="w-4 h-4" />
            </div>
            <a href="#" className="hover:underline">
              Switch to Mailchimp
            </a>
            <a href="#" className="hover:underline">
              Pricing
            </a>
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 text-gray-900">
          <Search className="w-5 h-5 cursor-pointer hidden md:block" />
          <div className="hidden md:flex items-center gap-1 cursor-pointer">
            <Globe className="w-4 h-4" />
            <span>EN</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <span className="hidden lg:inline whitespace-nowrap">
            Sales: +1 (855) 523‑8789
          </span>
          <button className="px-4 py-1.5 border border-black rounded-full font-medium hover:bg-gray-100">
            Log In
          </button>
          <button className="px-4 py-1.5 bg-yellow-400 hover:bg-yellow-300 rounded-full font-medium">
            Sign Up
          </button>

          {/* Hamburger for small screens */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 space-y-3 bg-white text-gray-900 border-t border-gray-200">
          <div className="flex items-center gap-1">
            Solutions & Services <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-1">
            Integrations <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-1">
            Resources <ChevronDown className="w-4 h-4" />
          </div>
          <a href="#" className="block hover:underline">
            Switch to Mailchimp
          </a>
          <a href="#" className="block hover:underline">
            Pricing
          </a>
          <div className="flex items-center gap-2 pt-2">
            <Globe className="w-4 h-4" />
            <span>EN</span>
          </div>
          <div>Sales: +1 (855) 523‑8789</div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
