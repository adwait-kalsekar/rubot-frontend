'use client';

import { Dispatch, FormEvent, SetStateAction } from 'react';

interface EditProfileForm {
  setEditing: Dispatch<SetStateAction<'password' | 'profile' | 'none'>>;
  user: {
    email: string;
    username: string;
    fullName: string;
    avatar: string;
    password: string;
    confirmPassword: string;
    isStudent: boolean;
    canvasApiKey: string;
  };
  setUser: Dispatch<
    SetStateAction<{
      email: string;
      username: string;
      fullName: string;
      avatar: string;
      password: string;
      confirmPassword: string;
      isStudent: boolean;
      canvasApiKey: string;
    }>
  >;
}

function EditProfileForm({ setEditing, user, setUser }: EditProfileForm) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle profile update
    if (user.password && user.password != user.confirmPassword) {
      return alert('Passwords not same');
    }

    alert('Profile saved');

    setEditing('none');
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <h1 className="text-2xl mb-4">Update Profile</h1>
      {/* Form fields */}

      <div className="mb-4">
        <label>Full Name</label>
        <input
          name="firstName"
          value={user.fullName}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 text-white"
          required
        />
      </div>

      <div className="mb-4">
        <label>Username</label>
        <input
          name="username"
          value={user.username}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 text-white"
          required
        />
      </div>
      <div className="mb-4">
        <label>Email</label>
        <input
          name="email"
          value={user.email}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 text-white"
          type="email"
          required
        />
      </div>

      {user.isStudent && (
        <>
          <div className="mb-4">
            <label>Canvas API Key</label>
            <input
              name="email"
              value={user.canvasApiKey}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-white"
              type="text"
              required
            />
          </div>
        </>
      )}
      {/* Add other fields similarly */}
      <div className="mt-8">
        <button
          onClick={() => setEditing('none')}
          className="bg-gray-600 p-2 ml-auto mr-2 rounded-md"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="ml-2 bg-blue-600 hover:bg-blue-700 p-2 rounded-md"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
export default EditProfileForm;
