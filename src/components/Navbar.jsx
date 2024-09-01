import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-transparent fixed w-full z-10 top-0 left-0 flex justify-between items-center px-10 py-4">
      <div className="text-white font-bold text-xl">My Portfolio</div>
      <div>
        <a href="#home" className="text-white mx-4">Home</a>
        <a href="#about" className="text-white mx-4">About</a>
        <a href="#portfolio" className="text-white mx-4">Portfolio</a>
        <a href="#contact" className="text-white mx-4">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;