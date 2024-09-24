'use client';

import { useState } from 'react';

export default function ProfilePage() {
  // Placeholder user data
  const [user, setUser] = useState({
    email: 'user@example.com',
    username: 'user123',
    firstName: 'John',
    lastName: 'Doe',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Handle profile update
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Profile</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <div className="mb-4">
          <label>Email</label>
          <input
            name="email"
            value={user.email}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white"
          />
        </div>
        {/* Add other fields similarly */}
        <button type="submit" className="bg-blue-600 p-2">
          Save Changes
        </button>
      </form>
    </div>
  );
}
