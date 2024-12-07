'use client';

import Image from 'next/image';
import { useState } from 'react';

import defaultUserIcon from '../../../public/assets/default-user-icon.png';
import { EditPasswordForm, EditProfileForm } from '@/components';

export default function ProfilePage() {
  // Placeholder user data
  const [user, setUser] = useState({
    email: 'user@example.com',
    username: 'user123',
    fullName: 'John Doe',
    avatar: '',
    password: '',
    confirmPassword: '',
    isStudent: true,
    canvasApiKey: 'test_key_for_canvas',
  });

  const [editing, setEditing] = useState<'profile' | 'password' | 'none'>(
    'none'
  );

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <div className="bg-gray-800 p-4 md:p-10 md:pl-20 rounded">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          {/* Avatar and possibly file input if editing profile */}
          <div className="mb-8 md:mb-0 md:mr-16 flex flex-col items-center md:items-start">
            <Image
              src={user.avatar ? user.avatar : defaultUserIcon}
              height={150}
              width={150}
              alt="User Avatar"
              className="mb-4"
            />
            {editing === 'profile' && <input type="file" className="mt-2" />}
          </div>

          {editing === 'password' ? (
            <EditPasswordForm setEditing={setEditing} />
          ) : editing === 'profile' ? (
            <EditProfileForm
              setEditing={setEditing}
              user={user}
              setUser={setUser}
            />
          ) : (
            <div className="w-full flex flex-col md:flex-row justify-between items-start mt-4 md:mt-0">
              <div className="profile mb-8 md:mb-0">
                <div className="mb-8">
                  <span className="text-3xl md:text-4xl font-semibold">
                    {user.fullName}
                  </span>
                </div>
                <div className="mb-4">
                  <span className="text-base text-gray-500">Username</span>
                  <br />
                  <span className="text-xl">{user.username}</span>
                </div>
                <div className="mb-4">
                  <span className="text-base text-gray-500">Email</span>
                  <br />
                  <span className="text-xl">{user.email}</span>
                </div>
                {user.isStudent && (
                  <div className="mb-4">
                    <span className="text-base text-gray-500">
                      Canvas API Key
                    </span>
                    <br />
                    <span className="text-xl">{user.canvasApiKey}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col md:items-end space-y-4 md:space-y-6">
                <button
                  className="p-2 rounded-md text-lg bg-blue-600 hover:bg-blue-700 w-full md:w-auto"
                  onClick={() => setEditing('profile')}
                >
                  Edit Profile
                </button>
                <button
                  className="p-2 rounded-md text-lg bg-blue-600 hover:bg-blue-700 w-full md:w-auto"
                  onClick={() => setEditing('password')}
                >
                  Change Password
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
