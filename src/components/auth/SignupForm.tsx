'use client';

import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { type SignupUser } from '@/types/auth';
import { useAuth } from '@/provider/authProvider';

const SIGNUP_URL = '/api/auth/signup';

export default function SignupForm() {
  const [form, setForm] = useState<SignupUser>({
    email: '',
    username: '',
    fullName: '',
    password: '',
    confirmPassword: '',
  });

  const router = useRouter();
  const auth = useAuth();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      return alert('Passwords do not match');
    }

    try {
      const response = await axios.post(SIGNUP_URL, form);

      if (response.status === 201) {
        auth?.login();
        router.replace('/login');
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.status === 409) {
          return alert('User with email or username already exists');
        } else {
          return alert('Something went wrong');
        }
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded">
      <h2 className="text-xl mb-4">Create your Account</h2>
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
        <label>Full Name</label>
        <input
          name="fullName"
          value={form.fullName}
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
        Signup
      </button>
    </form>
  );
}
