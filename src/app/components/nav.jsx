'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="bg-white p-4 shadow-md fixed top-0 left-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left-aligned Links */}
        <div className="flex items-center space-x-6">
          <Link className="text-gray-800 font-bold text-xl" href="/">
          GodCrew
          </Link>

          {/* Links for Desktop */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link className="text-gray-600 hover:text-gray-800" href="#home">
              Home
            </Link>
            <Link href="#Crew" className="text-gray-600 hover:text-gray-800">
              Crew
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
                Services
              </button>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                  <Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" href="/services/death-cleanup">
                    Death Cleanup
                  </Link>
                  <Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" href="/services/bio-cleanup">
                    Bio Cleanup
                  </Link>
                </div>
              )}
            </div>

            <Link className="text-gray-600 hover:text-gray-800" href="#contact">
              Contact
            </Link>
          </div>
        </div>

        {/* Right-aligned Call Button */}
        <div className="flex items-center space-x-4">
          

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 px-4">
          <Link className="block text-gray-600 hover:text-gray-800" href="#home">
            Home
          </Link>
          <Link className="block text-gray-600 hover:text-gray-800" href="#Crew">
            Crew
          </Link>

          {/* Services Dropdown in Mobile Menu */}
          <div className="space-y-1">
            <span className="text-gray-600 font-semibold">Services</span>
            <div className="ml-4 space-y-1">
              <Link className="block text-gray-600 hover:text-gray-800" href="/services/death-cleanup">
                Death Cleanup
              </Link>
              <Link className="block text-gray-600 hover:text-gray-800" href="/services/bio-cleanup">
                Bio Cleanup
              </Link>
            </div>
          </div>

          <Link className="block text-gray-600 hover:text-gray-800" href="#contact">
            Contact
          </Link>
          
        </div>
      )}
    </nav>
  );
}
