import { PrismaClient } from "@prisma/client";

import Category from "../../models/Category";

import ICategoryRepository, {
  ICreateCategoryDTO,
  IUpdateCategoryDTO,
} from "../ICategoryRepository";

export default class CategoryRepository implements ICategoryRepository {
  private prisma;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async update(data: IUpdateCategoryDTO): Promise<Category> {
    return this.prisma.category.update({ where: { id: data.id }, data });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.category.delete({ where: { id } });
  }

  async create({ name }: ICreateCategoryDTO): Promise<Category> {
    const category = await this.prisma.category.create({
      data: { name },
    });

    return category;
  }

  async list(): Promise<Category[]> {
    return this.prisma.category.findMany();
  }

  async get(id: number) {
    return this.prisma.category.findUnique({ where: { id } });
  }
}
