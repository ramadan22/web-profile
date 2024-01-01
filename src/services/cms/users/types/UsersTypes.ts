export interface Province {
  id: number;
  name: string;
}

export interface Regency {
  id: number;
  name: string;
}

export interface District {
  id: number;
  name: string;
}

export interface SubDistrict {
  id: number;
  name: string;
}

export interface Location {
  province?: Province | null;
  regency?: Regency | null;
  district?: District | null;
  sub_district?: SubDistrict | null;
}

export type UserTypes = {
  id_user: string;
  first_name: string;
  last_name: string;
  gender: string;
  id_sub_district: number;
  address: string;
  birth_date: string;
  email: string;
  phone: string;
  created_at: string;
  updated_at: string | null;
  location: Location;
}

export type UsersTypes = UserTypes[];

export type GetUsersParams = {
  page?: number;
  keyword?: string;
}

export type UsersParams = {
  first_name: string;
  last_name: string;
  gender: number | null;
  address: string;
  id_sub_district: number | null;
  birth_date: string;
  phone: string;
}

export type SubmitUsersParams = {
  id?: string;
  status?: string;
  params: UsersParams;
}

export type SubmitUsersResponse = {
  id_user: string;
  first_name: string;
  last_name: string;
  gender: number;
  address: string;
  id_sub_district: number;
  birth_date: string;
  phone: string;
  email?: string;
  location?: Location;
}
