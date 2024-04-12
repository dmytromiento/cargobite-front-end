export enum UserType {
  Shipper = "Shipper",
  Transporter = "Transporter",
  Recipient = "Recipient",
}

export type User = {
  name: string;
  age: number;
  type: UserType;
  about: string;
  image: string;
  company: string;
  favorite: boolean;
};

export type SelectOption<T> = {
  label: string;
  value: T;
};

export enum UserSortBy {
  NameAsc = "nameAsc",
  NameDesc = "nameDesc",
  AgeAsc = "ageAsc",
  CompanyAsc = "companyAsc",
}
