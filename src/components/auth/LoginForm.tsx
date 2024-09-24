'use client';

import { useState } from 'react';

export default function LoginForm() {
  const [form, setForm] = useState({ usernameOrEmail: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const jsonData = JSON.stringify(form);
    console.log(jsonData);
    // Handle login
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded">
      <h2 className="text-xl mb-4">Login</h2>
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
