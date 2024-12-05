'use client';

import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from 'react';

import defaultUserIcon from '../../../public/assets/default-user-icon.png';

interface EditPasswordFormProps {
  setEditing: Dispatch<SetStateAction<'password' | 'profile' | 'none'>>;
}

function EditPasswordForm({ setEditing }: EditPasswordFormProps) {
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle profile update
    if (passwords.newPassword != passwords.confirmNewPassword) {
      return alert('Password and Confirm Password are not same');
    }

    alert('Password Updated');

    setEditing('none');
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <h1 className="text-2xl mb-4">Change Password</h1>
      {/* Form fields */}

      <div className="mb-4">
        <label>Current Password</label>
        <input
          name="currentPassword"
          value={passwords.currentPassword}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 text-white"
          type="password"
          required
        />
      </div>
      <div className="mb-4">
        <label>New Password</label>
        <input
          name="newPassword"
          value={passwords.newPassword}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 text-white"
          type="password"
          required
        />
      </div>
      <div className="mb-4">
        <label>Confirm New Password</label>
        <input
          name="confirmNewPassword"
          value={passwords.confirmNewPassword}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 text-white"
          type="password"
          required
        />
      </div>
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
export default EditPasswordForm;
