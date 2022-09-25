import User from "../models/User";

export interface ICreateUserDTO {
  username: string;
  password: string;
}

export default interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  list(): Promise<User[]>;
  get(id: number): Promise<User | null>;
  findByUsername(username: string): Promise<User | null>;
}
