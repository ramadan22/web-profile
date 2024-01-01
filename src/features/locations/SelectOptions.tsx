'use client';

import { useQuery } from '@tanstack/react-query';
import { SelectOptionsTypes } from './types/SelectOptionsTypes';
import { Queries as QProvinces, getProvinces } from '@/services/master-data/location/provinces';
import { Queries as QRegencies, getRegencies } from '@/services/master-data/location/regencies';
import { Queries as QDistricts, getDistricts } from '@/services/master-data/location/districts';
import { Queries as QSubDistricts, getSubDistricts } from '@/services/master-data/location/sub-districts';
import Combobox from '@/components/combobox';

const SelectOptionsProvinces = ({ selected, onChange }: SelectOptionsTypes) => {
  const {
    data: provinces,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [QProvinces.GET_PROVINCES],
    queryFn: () => getProvinces(),
    refetchOnWindowFocus: true,
    retry: false,
  });

  return (
    <Combobox
      isLoading={isLoading}
      isError={isError}
      selected={selected}
      onChange={(value) => onChange(value)}
      widthDropdown={400}
      options={provinces?.data?.map((item) => ({ text: item.name, value: `${item.id_province}` })) || []}
    />
  );
};

const SelectOptionsRegencies = ({ id = null, selected, onChange }: SelectOptionsTypes) => {
  const {
    data: regency,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [QRegencies.GET_REGENCIES, { id }],
    queryFn: () => getRegencies(id),
    enabled: id !== null,
    refetchOnWindowFocus: true,
    retry: false,
  });

  return (
    <Combobox
      isLoading={isLoading}
      isError={isError}
      selected={selected}
      onChange={(value) => onChange(value)}
      widthDropdown={400}
      options={regency?.data?.map((item) => ({ text: item.name, value: `${item.id_regency}` })) || []}
    />
  );
};

const SelectOptionsDistricts = ({ id = null, selected, onChange }: SelectOptionsTypes) => {
  const {
    data: districts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [QDistricts.GET_DISTRICTS, { id }],
    queryFn: () => getDistricts(id),
    enabled: id !== null,
    refetchOnWindowFocus: true,
    retry: false,
  });

  return (
    <Combobox
      isLoading={isLoading}
      isError={isError}
      selected={selected}
      onChange={(value) => onChange(value)}
      widthDropdown={400}
      options={districts?.data?.map((item) => ({ text: item.name, value: `${item.id_district}` })) || []}
    />
  );
};

const SelectOptionsSubDistricts = ({ id = null, selected, onChange }: SelectOptionsTypes) => {
  const {
    data: subDistricts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [QSubDistricts.GET_SUB_DISTRICTS, { id }],
    queryFn: () => getSubDistricts(id),
    enabled: id !== null,
    refetchOnWindowFocus: true,
    retry: false,
  });

  return (
    <Combobox
      isLoading={isLoading}
      isError={isError}
      selected={selected}
      onChange={(value) => onChange(value)}
      widthDropdown={400}
      options={subDistricts?.data?.map((item) => ({ text: item.name, value: `${item.id_sub_district}` })) || []}
    />
  );
};

export {
  SelectOptionsProvinces,
  SelectOptionsRegencies,
  SelectOptionsDistricts,
  SelectOptionsSubDistricts,
};
