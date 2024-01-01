import { useState } from 'react';
import { FormTypes, UserSelectedTypes } from '../types/FormTypes';

const UseForm = () => {
  const [form, setForm] = useState<FormTypes[] | null>(null);
  const [search, setSearch] = useState('');
  const [userSelected, setUserSelected] = useState<UserSelectedTypes | null>(null);

  const handleFormInput = (payload: FormTypes) => {
    let updatePayload: FormTypes[] = [];

    if (form?.find((item) => item.id_role === payload?.id_role)) {
      updatePayload = form.filter((item) => item.id_role !== payload?.id_role);
    } else if (form) {
      updatePayload = [...form, payload];
    }

    setForm(updatePayload);
  };

  return {
    form,
    setForm,
    search,
    setSearch,
    userSelected,
    setUserSelected,
    handleFormInput,
  };
};

export default UseForm;
