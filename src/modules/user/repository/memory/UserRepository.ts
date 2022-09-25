import User from "../../models/User";
import IUserRepository, { ICreateUserDTO } from "../IUserRepository";

export default class UserRepository implements IUserRepository {
  private createdUsers = 0;
  private users: User[] = [];

  async create({ username, password }: ICreateUserDTO) {
    const user: User = {
      id: this.createdUsers,
      username,
      password,
      createdAt: new Date(),
    };

    this.users.push(user);
    this.createdUsers++;

    return user;
  }

  async list() {
    return this.users;
  }

  async get(id: number) {
    return this.users.find((user) => user.id === id) ?? null;
  }

  async findByUsername(username: string) {
    return this.users.find((user) => user.username === username) ?? null;
  }
}
