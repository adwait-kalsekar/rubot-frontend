import { LoginForm } from '@/components';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center mt-32 flex-col">
      <LoginForm />
      <p className="mt-2">
        New here?{' '}
        <Link className="underline" href="/signup">
          Signup
        </Link>
      </p>
    </div>
  );
}
