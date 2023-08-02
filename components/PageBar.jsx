// pagesBar.js
'use client'

import React, { useState } from "react";
import Link from "next/link";
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { IoMdMenu, IoMdClose } from "react-icons/io"

function PagesBar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [navbar, setNavbar] = useState(false)

  const handleNavbarToggle = () => {
    setExpandNavbar((prev) => !prev);
  };

  return (
    <div className=" navbar w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="toggleButton" onClick={handleNavbarToggle}>
        {/* Your toggle button content */}
      </div>
      <div className="links flex gap-4 justify-end">
        {/* Replace the links with plain text and apply styles */}
        <Link href="/" className="cursor-pointer hover:text-black-200 p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border">
         Accueil 
        </Link>
        <Link href="/formation" className="cursor-pointer hover:text-black-200 p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border">Formation
        </Link>
        <Link href="/project"className="cursor-pointer hover:text-black-200 p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border">Projects
        </Link>
        <Link href="/contact"className="cursor-pointer hover:text-black-200 p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border">Contact
        </Link>
        <Link href="/temoignage"className="cursor-pointer hover:text-black-200 p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border">Temoignage
        </Link>
        
        
        {/* Rest of your code */}
      </div>
    </div>
  );
}

export default PagesBar;
