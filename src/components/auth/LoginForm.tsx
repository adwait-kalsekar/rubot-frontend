'use client';

import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { type LoginUser } from '@/types/auth';
import { useAuth } from '@/provider/authProvider';

const LOGIN_URL = '/api/auth/login';

export default function LoginForm() {
  const [form, setForm] = useState<LoginUser>({
    usernameOrEmail: '',
    password: '',
  });
  const router = useRouter();
  const auth = useAuth();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, form);

      if (response.status === 200) {
        auth?.login();
        router.replace('/chat');
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.status === 401) {
          return alert('Login Error! Please Check Credentials');
        } else {
          return alert('Login Error! Something Went Wrong');
        }
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded">
      <h2 className="text-xl mb-4">Login to Existing Account</h2>
      <div className="mb-4">
        <label>Username or Email</label>
        <input
          name="usernameOrEmail"
          value={form.usernameOrEmail}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 text-white"
        />
      </div>
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
      <button type="submit" className="bg-blue-600 p-2 w-full">
        Login
      </button>
    </form>
  );
}
