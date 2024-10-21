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
  });

  const [editing, setEditing] = useState<'profile' | 'password' | 'none'>(
    'none'
  );

  return (
    <div className="mr-56 ml-56 items-center mt-10 justify-center">
      <div className="bg-gray-800 p-10 pl-20 rounded">
        {/* <h1 className="text-2xl mb-8">User Profile</h1> */}
        {/* Form fields */}

        <div className="flex flex-row">
          <div className="mb-4 flex flex-col">
            <Image
              src={user.avatar ? user.avatar : defaultUserIcon}
              height={150}
              width={150}
              alt="User Avatar"
              className="mb-8 mr-48"
            />

            {editing === 'profile' && <input className="" type="file" />}
          </div>

          {editing === 'password' ? (
            <>
              <EditPasswordForm
                setEditing={setEditing}
                user={user}
                setUser={setUser}
              />
            </>
          ) : editing === 'profile' ? (
            <>
              <EditProfileForm
                setEditing={setEditing}
                user={user}
                setUser={setUser}
              />
            </>
          ) : (
            <>
              <div className="profile">
                <div className="mb-8">
                  <span className="text-4xl font-semibold">
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
              </div>

              <div className="">
                <button
                  className="ml-72 mt-10 mb-4 p-2 rounded-md text-lg bg-blue-600 hover:bg-blue-700"
                  onClick={() => setEditing('profile')}
                >
                  Edit Profile
                </button>
                <button
                  className="ml-72 mt-4 p-2 rounded-md text-lg bg-blue-600 hover:bg-blue-700"
                  onClick={() => setEditing('password')}
                >
                  Change Password
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
