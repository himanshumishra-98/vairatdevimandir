import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#ff9933] text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Title */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/logo.jpg"
            alt="Temple Logo"
            className="h-20 w-20 object-cover rounded-full"
          />
          <span className="text-xl md:text-3xl font-bold leading-tight">
            श्री वैराट देवी मंदिर संस्थान, चिखलदरा
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Nav Links */}
        <div className="space-x-6 text-lg font-bold hidden md:flex">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About Temple</Link>
          <Link to="/gallery" className="hover:underline">Gallery</Link>
          <Link to="/events" className="hover:underline">Events</Link>
          <Link to="/donate" className="hover:underline">Donate</Link>
          <Link to="/aboutChikhaldara" className="hover:underline">About Chikhaldara</Link>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2 text-center text-white font-bold">
          <Link to="/" className="block hover:underline">Home</Link>
          <Link to="/about" className="block hover:underline">About Temple</Link>
          <Link to="/gallery" className="block hover:underline">Gallery</Link>
          <Link to="/events" className="block hover:underline">Events</Link>
          <Link to="/donate" className="block hover:underline">Donate</Link>
          <Link to="/aboutChikhaldara" className="block hover:underline">About Chikhaldara</Link>
        </div>
      )}
    </nav>
  );
}

export default Header;
