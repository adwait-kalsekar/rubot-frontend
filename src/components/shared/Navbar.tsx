'use client';

import CloseIcon from '@mui/icons-material/Close';
import { useAuth } from '@/provider/authProvider';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LOGOUT_URL = '/api/auth/logout';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const auth = useAuth();
  const isLoggedIn = auth?.isAuthenticated;

  async function handleLogout() {
    const response = await axios.post(LOGOUT_URL);
    console.log(response.data);
    setDropdownOpen(false);
    auth?.logout();
    router.replace('/');
  }

  return (
    <nav className="bg-black-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between relative">
        {/* Logo and App Name */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center flex-row">
            <h1 className="text-4xl font-bold font-sans">
              <span className="text-red-600 mr-6">RU</span>bot
            </h1>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {mobileMenuOpen ? (
              <CloseIcon fontSize="large" />
            ) : (
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-xl">
          <ul className="flex space-x-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            {isLoggedIn ? (
              <li>
                <Link href="/chat">Chat</Link>
              </li>
            ) : (
              <li>
                <Link href="/login">Login</Link>
              </li>
            )}
          </ul>

          {isLoggedIn && (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center focus:outline-none"
              >
                <span>Account</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.585l3.71-4.355a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <ul className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-50">
                  <li className="block px-4 py-2 hover:bg-gray-600 rounded-md">
                    <Link
                      href="/profile"
                      className="block px-4 py-2"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                  </li>
                  <li className="block px-4 py-2 hover:bg-gray-600 rounded-md">
                    <button className="block px-4 py-2" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black-800 mt-2 p-4 text-white">
          {/* Center-aligned navigation links */}
          <ul className="flex flex-col items-center space-y-4 text-center mb-4">
            <li>
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
            </li>
            {isLoggedIn ? (
              <li>
                <Link href="/chat" onClick={() => setMobileMenuOpen(false)}>
                  Chat
                </Link>
              </li>
            ) : (
              <li>
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  Login
                </Link>
              </li>
            )}
          </ul>

          {isLoggedIn && (
            <div className="border-t border-gray-700 pt-4">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-center focus:outline-none w-full ml-2"
              >
                <span>Account</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.585l3.71-4.355a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <ul className="mt-2 w-full bg-gray-700 rounded-md shadow-lg">
                  <li className="block px-4 py-2 hover:bg-gray-600 rounded-md">
                    <Link
                      href="/profile"
                      className="block px-4 py-2"
                      onClick={() => {
                        setDropdownOpen(false);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Profile
                    </Link>
                  </li>
                  <li className="block px-4 py-2 hover:bg-gray-600 rounded-md">
                    <button
                      className="block px-4 py-2"
                      onClick={() => {
                        handleLogout();
                        setMobileMenuOpen(false);
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
