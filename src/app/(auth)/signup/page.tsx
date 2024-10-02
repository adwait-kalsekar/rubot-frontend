import { SignupForm } from '@/components';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center mt-24 flex-col">
      <SignupForm />
      <p className="mt-2">
        Already have an Account?{' '}
        <Link className="underline" href="/login">
          Login
        </Link>
      </p>
    </div>
  );
}
