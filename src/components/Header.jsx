import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-[#ff9933] text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/logo.jpg" 
            alt="Temple Logo"
            className="h-30 w-30 object-cover rounded-full"
          />
          <span className="text-3xl font-bold">श्री वैराट देवी मंदिर संस्थान, चिखलदरा  </span>
        </Link>

        <div className="space-x-6 text-lg font-bold hidden md:block">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About Temple</Link>
          <Link to="/gallery" className="hover:underline">Gallery</Link>
          <Link to="/events" className="hover:underline">Events</Link>
          <Link to="/donate" className="hover:underline">Donate</Link>
          <Link to="/aboutChikhaldara" className="hover:underline">About Chikhaldara</Link>
        </div>
      </div>
    </nav>
  );
}


export default Header;
