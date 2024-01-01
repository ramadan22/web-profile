export type ProvincesTypes = {
  id_province: number;
  name: string;
}

export type RegenciesTypes = {
  id_province: number;
  id_regency: number;
  name: string;
}

export type DistrictsTypes = {
  id_regency: number;
  id_district: number;
  name: string;
}

export type SubDistrictsTypes = {
  id_district: number;
  id_sub_district: number;
  name: string;
}
