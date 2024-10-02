'use client';

import { useAuth } from '@/provider/authProvider';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LOGOUT_URL = '/api/auth/logout';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
    <nav className="bg-black-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and App Name */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center flex-row">
            {/* <Image
              width={200}
              height={10}
              src={logo}
              alt="Logo"
              className="mr-8"
            /> */}
            <h1 className="text-4xl font-bold font-sans">
              <span className="text-red-600">RU</span>bot
            </h1>
          </Link>
        </div>

        {/* Right Side Dropdown Menu */}
        <div className="flex items-center space-x-6 text-xl">
          {/* Navigation Links */}
          <ul className="flex space-x-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            {isLoggedIn ? (
              <li>
                <Link href="/chat">Chat</Link>
              </li>
            ) : (
              <li>
                <Link href="/signup">Signup</Link>
              </li>
            )}
          </ul>

          {isLoggedIn && (
            <>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center focus:outline-none"
              >
                <span>Account</span>
                {/* Down Arrow Icon */}
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
                <ul className="absolute right-20 mt-48 w-48 bg-gray-700 rounded-md shadow-lg">
                  <li className="block px-4 py-2 hover:bg-gray-600 rounded-md">
                    <Link
                      className="block px-4 py-2 "
                      href="/profile"
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
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
