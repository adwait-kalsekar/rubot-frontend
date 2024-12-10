'use client';

import Image from 'next/image';
import { useState } from 'react';

import defaultUserIcon from '../../../public/assets/default-user-icon.png';
import { EditPasswordForm, EditProfileForm } from '@/components';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import axios from 'axios';
import { Profile } from '@/types/profile';
import ViewProfile from '@/components/profile/ViewProfile';

const queryClient = new QueryClient();

export default function ProfilePage() {
  return (
    <QueryClientProvider client={queryClient}>
      <ViewProfile />
    </QueryClientProvider>
  );
}
