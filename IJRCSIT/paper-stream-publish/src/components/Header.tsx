import { useState } from "react";
import { Menu, X, User, Bell, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-slate-900">ResearchHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/browse" 
              className={`font-medium transition-colors ${
                isActive('/browse') 
                  ? 'text-blue-600' 
                  : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              Browse Papers
            </Link>
            <Link 
              to="/submit" 
              className={`font-medium transition-colors ${
                isActive('/submit') 
                  ? 'text-blue-600' 
                  : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              Submit
            </Link>
            <Link 
              to="/review" 
              className={`font-medium transition-colors ${
                isActive('/review') 
                  ? 'text-blue-600' 
                  : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              Review
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-blue-600' 
                  : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              About
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-white text-xs">
                3
              </Badge>
            </Button>
            <Link to="/profile">
              <Button variant="ghost" size="sm">
                <User className="h-5 w-5 mr-2" />
                Profile
              </Button>
            </Link>
            <Link to="/login">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Sign In
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/browse" 
                className={`font-medium ${
                  isActive('/browse') 
                    ? 'text-blue-600' 
                    : 'text-slate-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Papers
              </Link>
              <Link 
                to="/submit" 
                className={`font-medium ${
                  isActive('/submit') 
                    ? 'text-blue-600' 
                    : 'text-slate-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Submit
              </Link>
              <Link 
                to="/review" 
                className={`font-medium ${
                  isActive('/review') 
                    ? 'text-blue-600' 
                    : 'text-slate-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Review
              </Link>
              <Link 
                to="/about" 
                className={`font-medium ${
                  isActive('/about') 
                    ? 'text-blue-600' 
                    : 'text-slate-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="pt-3 border-t border-slate-200">
                <Link to="/login">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-2">
                    Sign In
                  </Button>
                </Link>
                <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Profile
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
