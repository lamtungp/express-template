import { BuildOptions, Model } from 'sequelize';

export interface AuthResponse {
  token: string;
}

export interface UserAttributes {
  id: number;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserModel extends Model<UserAttributes>, UserAttributes {}
export class User extends Model<UserModel, UserAttributes> {}
export type UserStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserModel;
};
