'use client';

import { useEffect } from 'react';
import Label from '@/components/Label';
import DefaultDialog from '@/components/dialog/DefaultDialog';
import Input from '@/components/input';
import { FormTypes } from './types/FormTypes';
import UseForm from './hooks/UseForm';
import { Textarea } from '@/components/textarea';
import Icon from '@/components/icon';
import DefaultCalendar from '@/components/calendar/DefaultCalendar';
import DefaultSelect from '@/components/select/DefaultSelect';
import Button from '@/components/button';
import { genders } from '@/data';
import {
  SelectOptionsProvinces, SelectOptionsRegencies, SelectOptionsDistricts, SelectOptionsSubDistricts,
} from '@/features/locations/SelectOptions';

const FormUsers = ({
  payload, isOpen, isLoadingEdit, handleOpen, handleCounter,
}: FormTypes) => {
  const {
    form,
    setForm,
    initiateValueForm,
  } = UseForm();

  useEffect(() => {
    initiateValueForm(payload);
  }, [payload]);

  return (
    <DefaultDialog
      width={900}
      isOpen={isOpen}
      title={`Form ${!form?.id_user ? 'Add' : 'Edit'}`}
      description={`${!form?.id_user ? 'Add' : 'Edit'} Users Data`}
      onOpenChange={(value) => handleOpen(value)}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCounter(form);
        }}
        className="flex flex-col gap-y-6"
      >
        <div className="grid grid-cols-2 gap-x-4">
          <div>
            <Label htmlFor="first_name">First Name</Label>
            <Input
              className="text-xs"
              value={form?.first_name || ''}
              placeholder="Input First Name"
              onChange={(event) => setForm({ ...form, first_name: event.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="first_name">Last Name</Label>
            <Input
              className="text-xs"
              value={form?.last_name || ''}
              placeholder="Input Last Name"
              onChange={(event) => setForm({ ...form, last_name: event.target.value })}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="first_name">Gender</Label>
          <DefaultSelect
            value={form?.gender !== null ? `${form?.gender}` : ''}
            options={genders}
            onChange={(value) => {
              setForm({ ...form, gender: Number(value) });
            }}
          />
        </div>
        <div>
          <Label htmlFor="birth_date">Birth Date</Label>
          <DefaultCalendar
            value={form?.birth_date}
            onChange={(value) => {
              setForm({ ...form, birth_date: value });
            }}
          />
        </div>
        {!form?.id_user && (
          <div>
            <Label htmlFor="phone">Email</Label>
            <Input
              className="text-xs"
              value={form?.email || ''}
              placeholder="Input Email"
              onChange={(event) => setForm({ ...form, email: event.target.value })}
            />
          </div>
        )}
        {!form?.id_user && (
          <div>
            <Label htmlFor="phone">Password</Label>
            <Input
              className="text-xs"
              value={form?.password || ''}
              placeholder="Input Password"
              onChange={(event) => setForm({ ...form, password: event.target.value })}
            />
          </div>
        )}
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            className="text-xs"
            value={form?.phone || ''}
            placeholder="Input Phone"
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="first_name">Province</Label>
          <SelectOptionsProvinces
            onChange={(value) => setForm({
              ...form,
              location: {
                province: {
                  id: Number(value?.value),
                  name: value?.text || '',
                },
                regency: null,
                district: null,
                sub_district: null,
              },
            })}
            selected={{
              text: form?.location?.province?.name || '',
              value: form?.location?.province?.id || '',
            }}
          />
        </div>
        <div>
          <Label htmlFor="first_name">Regency</Label>
          <SelectOptionsRegencies
            id={form?.location?.province?.id || null}
            onChange={(value) => setForm({
              ...form,
              location: {
                ...form?.location,
                regency: {
                  id: Number(value?.value),
                  name: value?.text || '',
                },
                district: null,
                sub_district: null,
              },
            })}
            selected={{
              text: form?.location?.regency?.name || '',
              value: form?.location?.regency?.id || '',
            }}
          />
        </div>
        <div>
          <Label htmlFor="first_name">District</Label>
          <SelectOptionsDistricts
            id={form?.location?.regency?.id || null}
            onChange={(value) => setForm({
              ...form,
              location: {
                ...form?.location,
                district: {
                  id: Number(value?.value),
                  name: value?.text || '',
                },
                sub_district: null,
              },
            })}
            selected={{
              text: form?.location?.district?.name || '',
              value: form?.location?.district?.id || '',
            }}
          />
        </div>
        <div>
          <Label htmlFor="first_name">Sub District</Label>
          <SelectOptionsSubDistricts
            id={form?.location?.district?.id || null}
            onChange={(value) => setForm({
              ...form,
              location: {
                ...form?.location,
                sub_district: {
                  id: Number(value?.value),
                  name: value?.text || '',
                },
              },
            })}
            selected={{
              text: form?.location?.sub_district?.name || '',
              value: form?.location?.sub_district?.id || '',
            }}
          />
        </div>
        <div>
          <Label htmlFor="address">Address</Label>
          <Textarea
            value={form?.address}
            className="w-full h-[208px] text-sm"
            placeholder="Type your address"
            icon={<Icon type="Pencil" className="w-6 text-gray-light" />}
            onChange={(event) => setForm({ ...form, address: event?.target.value })}
          />
        </div>
        <div className="grid grid-cols-2 gap-x-4 justify-around ">
          <Button
            variant="outline"
            type="button"
            className="border-black"
            onClick={() => handleOpen(false)}
          >
            Cancel
          </Button>
          <Button type="submit">
            {isLoadingEdit ? (
              <span>Loading...</span>
            ) : (
              <span>Submit</span>
            )}
          </Button>
        </div>
      </form>
    </DefaultDialog>
  );
};

export default FormUsers;
