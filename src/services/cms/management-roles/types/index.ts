export type UserHasRoleParamsTypes = {
  keyword?: string;
  page?: number;
  size?: number;
}

export type UserHasRoleResponseTypes = {
  id_user: string;
  first_name: string;
  last_name: string;
  email: string;
  created_at: string;
  updated_at: string;
  roles: string;
}

export type getUserRoleListResponseTypes = {
  id_role: string;
  id_user: string;
  id_user_has_role: string;
  slug: string
}
