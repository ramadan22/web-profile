'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import Label from '@/components/Label';
import Logo from '@/assets/images/logo.png';
import Input from '@/components/input';
import UseForm from './hooks/UseForm';
import { submit } from './hooks/UseSubmit';
import { messageError } from '@/lib/toastify';

const FormLogin = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    email,
    setEmail,
    password,
    setPassword,
  } = UseForm();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const result = await submit({ event, email, password });
    const from = searchParams.get('from');

    if (result?.status === 200) router.push(from ?? '/overview');
    if (result?.status !== 200) messageError(`${result?.error}`);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="w-[100px] h-[100px] overflow-hidden flex items-center justify-center rounded-full border mx-auto">
          <Image priority src={Logo} alt="Logo" width={100} height={100} className="object-cover" />
        </div>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <Label htmlFor="email">Email Address</Label>
            <div className="mt-2">
              <Input onChange={(evt) => setEmail(evt.target.value)} value={email} />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <div className="text-sm">
                <Link href="/#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</Link>
              </div>
            </div>
            <div className="mt-2">
              <Input type="password" onChange={(evt) => setPassword(evt.target.value)} value={password} />
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
