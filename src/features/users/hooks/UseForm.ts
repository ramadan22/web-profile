import { useState } from 'react';
import { UsersTypes, FormUsersPayloadTypes } from '../types/FormTypes';
import { formatDate } from '@/lib/date-fns';

const UseForm = () => {
  const [form, setForm] = useState<FormUsersPayloadTypes>(null);

  const initiateValueForm = (payloads: FormUsersPayloadTypes) => {
    setForm(payloads);
  };

  const handleOpenFormEdit = (payloads: UsersTypes) => {
    setForm(payloads ? {
      id_user: payloads.id_user,
      first_name: payloads.first_name,
      last_name: payloads.last_name,
      gender: payloads.gender === 'Male' ? 1 : 0,
      location: payloads.location,
      address: payloads.address,
      phone: payloads.phone,
      birth_date: formatDate(`${new Date(payloads.birth_date)}`, 'yyyy-MM-dd'),
    } : null);
  };

  const handleSubmitForm = (payloads: FormUsersPayloadTypes, status: 'EDIT' | 'ADD') => ({
    id: payloads?.id_user || '',
    status,
    params: {
      first_name: payloads?.first_name || '',
      last_name: payloads?.last_name || '',
      gender: payloads?.gender !== null ? Number(payloads?.gender) : null,
      address: payloads?.address || '',
      email: payloads?.email || '',
      password: payloads?.password || '',
      id_sub_district: payloads?.location?.sub_district?.id || null,
      birth_date: payloads?.birth_date || '',
      phone: payloads?.phone || '',
    },
  });

  return {
    form,
    setForm,
    initiateValueForm,
    handleOpenFormEdit,
    handleSubmitForm,
  };
};

export default UseForm;
