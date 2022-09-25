import Menu from "../../models/Menu";
import IMenuRepository, { ICreateMenuDTO } from "../IMenuRepository";

export default class MenuRepository implements IMenuRepository {
  private createdMenus = 0;
  private users: Menu[] = [];

  async create({ username, password }: ICreateMenuDTO) {
    const user: Menu = {
      id: this.createdMenus,
      username,
      password,
      createdAt: new Date(),
    };

    this.users.push(user);
    this.createdMenus++;

    return user;
  }

  async list() {
    return this.users;
  }

  async get(id: number) {
    return this.users.find((user) => user.id === id) ?? null;
  }

  async findByMenuname(username: string) {
    return this.users.find((user) => user.username === username) ?? null;
  }
}
