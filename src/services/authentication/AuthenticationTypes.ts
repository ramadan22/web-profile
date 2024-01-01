export type AuthTypes = {
  email: string;
  password: string;
};

export type PayloadsTypes = {
  event: React.FormEvent<HTMLFormElement>;
  email: string;
  password: string;
};

export type LoginResponseTypes = {
  token: string;
};

export type SessionTypes = {
  id_user: string;
  first_name: string;
  last_name: string;
  id_sub_district: number;
  address: string;
  birth_date: string;
  email: string;
  phone: string;
  created_at: string;
  updated_at: string;
  token: string;
}
