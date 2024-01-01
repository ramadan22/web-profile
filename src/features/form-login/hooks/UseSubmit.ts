import { signIn } from 'next-auth/react';
import { SubmitTypes } from '../types/UseSubmitTypes';

export const submit = async ({ event, email, password }: SubmitTypes) => {
  event.preventDefault();

  const result = await signIn('credentials', {
    email, password, redirect: false,
  });

  return result;
};
