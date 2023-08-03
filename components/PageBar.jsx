// pagesBar.js
'use client'
import React, { useState} from "react";
import Link from "next/link";
import './pagesBar.css'

function PagesBar() {
  
  
  
  

  return (
    <div className=" navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
      
      <div className="toggleButton" >
        <div className="toggleIcon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="links flex gap-4 justify-end">
        
        <Link href="/" className=" nav-item nav-link active cursor-pointer hover:text-black-200 p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border">
         Accueil 
        </Link>
        <Link href="/project"className=" nav-item nav-link active cursor-pointer hover:text-black-200 p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border">Projects
        </Link>
        <Link href="/contact"className="cursor-pointer hover:text-black-200 p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border">Contact
        </Link>
        <Link href="/listTemoignage"className=" nav-item nav-link active cursor-pointer hover:text-black-200 p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border">List Témoignage
        </Link>
        <Link href="/ajouterTemoignage"className=" nav-item nav-link activecursor-pointer hover:text-black-200 p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border">Laisser Témoignage
        </Link>
        
        
       
      </div>
    </div>
  );
}

export default PagesBar;
