'use client';

import { useState } from 'react';

const UseForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return {
    email,
    setEmail,
    password,
    setPassword,
  };
};

export default UseForm;
