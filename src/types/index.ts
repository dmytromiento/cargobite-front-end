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
