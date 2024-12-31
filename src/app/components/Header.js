// src/components/Header.js

"use client"; // Mark this component as a client component


import { useState } from 'react';
export default function Header() {
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu
    return (
      <header className="flex items-center justify-between bg-black text-white p-4 ">
        <img src="/logoAtiPayam.png" alt="Logo" className="w-28" />
      

<nav className="flex-1">
        {/* دکمه همبرگری */}
        <div className="sm:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white focus:outline-none"
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* منوی ناوبری */}
        <ul className={`flex-col sm:flex-row flex items-center justify-center gap-8 ${isOpen ? 'flex' : 'hidden'} sm:flex`}>
          <li><a href="./" className="hover:underline">خانه</a></li>
          <li><a href="/about" className="hover:underline">درباره ما</a></li>
          <li><a href="/blog" className="hover:underline">وبلاگ</a></li>
          <li><a href="/contact" className="hover:underline">تماس با ما</a></li>
        </ul>
      </nav>
 
        <div className="w-32"><p className="font-bold text-2xl">02188717451<br/>09197648808</p></div>
      </header>
    );
  }
  