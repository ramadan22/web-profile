import { useState } from 'react';

const State = () => {
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);
  const [isOpenForm, setIsOpenForm] = useState(false);

  return {
    keyword,
    setKeyword,
    page,
    setPage,
    isOpenForm,
    setIsOpenForm,
  };
};

export default State;
