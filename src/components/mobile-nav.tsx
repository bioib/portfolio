"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-mantle shadow-base p-4 shadow-md md:hidden">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">Fabio Reva Yanda</h1>
        <button
          onClick={toggleMenu}
          className={`text-text hover:text-text-hover cursor-pointer transition-transform ${isOpen ? "rotate-90" : ""}`}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7M4 18h7"
            />
          </svg>
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "mt-4 max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-2">
          <Link
            href="#about"
            className="text-text hover:text-text-hover hover:bg-surface-0 block rounded px-4 py-2 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-text hover:text-text-hover hover:bg-surface-0 block rounded px-4 py-2 transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-text hover:text-text-hover hover:bg-surface-0 block rounded px-4 py-2 transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
