'use client';

import { useState } from 'react';

export default function SignupForm() {
  const [form, setForm] = useState({
    email: '',
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Handle sign up
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded">
      <h2 className="text-xl mb-4">Sign Up</h2>
      {/* Email Field */}
      <div className="mb-4">
        <label>Email</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 text-white"
        />
      </div>
      {/* Username Field */}
      <div className="mb-4">
        <label>Username</label>
        <input
          name="username"
          value={form.username}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 text-white"
        />
      </div>
      {/* First Name Field */}
      <div className="mb-4">
        <label>First Name</label>
        <input
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 text-white"
        />
      </div>
      {/* Last Name Field */}
      <div className="mb-4">
        <label>Last Name</label>
        <input
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 text-white"
        />
      </div>
      {/* Password Field */}
      <div className="mb-4">
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 text-white"
        />
      </div>
      {/* Confirm Password Field */}
      <div className="mb-4">
        <label>Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 text-white"
        />
      </div>
      <button type="submit" className="bg-blue-600 p-2 w-full">
        Sign Up
      </button>
    </form>
  );
}
