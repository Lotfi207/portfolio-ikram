// pagesBar.js
'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";

function PagesBar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const handleNavbarToggle = () => {
    setExpandNavbar((prev) => !prev);
  };

  return (
    <div className="navbar bg-gray-500 text-black p-4">
      <div className="toggleButton" onClick={handleNavbarToggle}>
        {/* Your toggle button content */}
      </div>
      <div className="links flex gap-4">
        {/* Replace the links with Tailwind CSS styles */}
        <Link href="/" className="hover:text-black-200">Accueil</Link>
        <Link href="/formation" className="hover:text-black-200">Formation</Link>
        <Link href="/project" className="hover:text-black-200">Projects</Link>
        <Link href="/contact" className="hover:text-black-200">Contact</Link>
        <Link href="/temoignage" className="hover:text-black-200">temoignage</Link>
        
        {/* Rest of your code */}
      </div>
    </div>
  );
}

export default PagesBar;
