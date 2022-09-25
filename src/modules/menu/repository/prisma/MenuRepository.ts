import { Item, PrismaClient } from "@prisma/client";

import Menu from "../../models/Menu";
import IMenuRepository, {
  ICreateMenuDTO,
  IUpdateMenuDTO,
} from "../IMenuRepository";

export default class MenuRepository implements IMenuRepository {
  private prisma;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async update(data: IUpdateMenuDTO): Promise<Menu> {
    return this.prisma.item.update({ where: { id: data.id }, data });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.item.delete({ where: { id } });
  }

  async create({
    title,
    categoryId,
    price,
    description,
    isActive,
  }: ICreateMenuDTO): Promise<Item> {
    const menuItem = await this.prisma.item.create({
      data: { title, categoryId, price, description, isActive },
    });

    return menuItem;
  }

  async list(): Promise<Menu[]> {
    return this.prisma.item.findMany();
  }

  async listActives(): Promise<Menu[]> {
    return this.prisma.item.findMany({ where: { isActive: true } });
  }

  async get(id: number) {
    return this.prisma.item.findUnique({ where: { id } });
  }
}
