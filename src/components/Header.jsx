import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#ff9933] text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* लोगो और शीर्षक */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/logo.jpg"
            alt="मंदिर लोगो"
            className="h-20 w-20 object-cover rounded-full"
          />
          <span className="text-xl md:text-3xl font-bold leading-tight">
            श्री वैराट देवी मंदिर संस्थान, चिखलदरा
          </span>
        </Link>

        {/* मोबाइल मेनू बटन */}
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

        {/* डेस्कटॉप नेविगेशन लिंक */}
        <div className="space-x-6 text-lg font-bold hidden md:flex">
          <Link to="/" className="hover:underline">मुख्य पृष्ठ</Link>
          <Link to="/about" className="hover:underline">मंदिर के बारे में</Link>
          <Link to="/gallery" className="hover:underline">गैलरी</Link>
          <Link to="/events" className="hover:underline">आयोजन</Link>
          <Link to="/donate" className="hover:underline">दान करें</Link>
          <Link to="/aboutChikhaldara" className="hover:underline">चिखलदरा के बारे में</Link>
        </div>
      </div>

      {/* मोबाइल नेविगेशन लिंक */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2 text-center text-white font-bold">
          <Link to="/" className="block hover:underline">मुख्य पृष्ठ</Link>
          <Link to="/about" className="block hover:underline">मंदिर के बारे में</Link>
          <Link to="/gallery" className="block hover:underline">गैलरी</Link>
          <Link to="/events" className="block hover:underline">आयोजन</Link>
          <Link to="/donate" className="block hover:underline">दान करें</Link>
          <Link to="/aboutChikhaldara" className="block hover:underline">चिखलदरा के बारे में</Link>
        </div>
      )}
    </nav>
  );
}

export default Header;
