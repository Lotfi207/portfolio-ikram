// pagesBar.js
'use client'

import React, { useState } from "react";
import Link from "next/link";
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { IoMdMenu, IoMdClose } from "react-icons/io"

function PagesBar() {
  

  const handleNavbarToggle = () => {
    setExpandNavbar((prev) => !prev);
  };

  return (
    <div className=" navbar w-full mx-auto  px-4 sm:px-10 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="toggleButton" onClick={handleNavbarToggle}>
        
      </div>
      <div className="links flex gap-4 justify-end">
        
        <Link href="/" className="cursor-pointer hover:text-black-200 p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border">
         Accueil 
        </Link>
        <Link href="/project"className="cursor-pointer hover:text-black-200 p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border">Projects
        </Link>
        <Link href="/contact"className="cursor-pointer hover:text-black-200 p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border">Contact
        </Link>
        <Link href="/listTemoignage"className="cursor-pointer hover:text-black-200 p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border">List Témoignage
        </Link>
        <Link href="/ajouterTemoignage"className="cursor-pointer hover:text-black-200 p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border">Laisser Témoignage
        </Link>
        
        
       
      </div>
    </div>
  );
}

export default PagesBar;
