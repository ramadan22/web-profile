'use client';

import { useState } from 'react';

const State = () => {
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [payloadsDelete, setPayloadsDelete] = useState<{ id: string, text: string } | null>(null);

  return {
    page,
    setPage,
    keyword,
    setKeyword,
    isOpenForm,
    setIsOpenForm,
    payloadsDelete,
    setPayloadsDelete,
  };
};

export default State;
