'use client';

import { User } from '@/types/auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Dispatch, FormEvent, SetStateAction, useState } from 'react';

const PROFILE_URL = `/api/profile`;

interface EditProfileForm {
  setEditing: Dispatch<SetStateAction<'password' | 'profile' | 'none'>>;
  userProfile: User | undefined;
}

function EditProfileForm({ setEditing, userProfile }: EditProfileForm) {
  const [user, setUser] = useState({
    email: userProfile?.email,
    username: userProfile?.username,
    fullName: userProfile?.fullName,
    avatar: userProfile?.profile.avatar,
    canvasApiKey: userProfile?.profile.canvasApiKey,
  });

  const [isStudent, setIsStudent] = useState<boolean>(
    userProfile?.profile.isStudent || false
  );

  const queryClient = useQueryClient();

  const profileMutation = useMutation({
    mutationFn: async () => {
      try {
        const response = await axios.post(PROFILE_URL, { ...user, isStudent });
        if (response.status === 200) {
          return alert('Profile Updated successfully');
        }
      } catch (err) {
        return alert('Error');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['profile'],
      });
      setEditing('none');
    },
    onError: () => {
      return alert('Error Updating Profile');
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    profileMutation.mutate();
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <h1 className="text-2xl mb-4">Update Profile</h1>
      {/* Form fields */}

      <div className="mb-4">
        <label>Full Name</label>
        <input
          name="fullName"
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
      <div className="mb-4">
        <label
          htmlFor="isStudent"
          className="flex items-center space-x-2 cursor-pointer"
        >
          <span className="text-white font-medium">Is Student?</span>
          <input
            id="isStudent"
            name="isStudent"
            type="checkbox"
            checked={isStudent}
            onChange={() => setIsStudent(!isStudent)}
            className="h-4 w-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500 focus:ring-offset-gray-800 focus:ring-2"
          />
        </label>
      </div>

      {isStudent && (
        <>
          <div className="mb-4">
            <label>Canvas API Key</label>
            <input
              name="canvasApiKey"
              value={user.canvasApiKey || ''}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-white"
              type="text"
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
