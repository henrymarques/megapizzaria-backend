import { PrismaClient } from "@prisma/client";

import User from "../../models/User";
import IUserRepository, { ICreateUserDTO } from "../IUserRepository";

export default class UserRepository implements IUserRepository {
  private prisma;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async create({ username, password }: ICreateUserDTO): Promise<User> {
    const user = await this.prisma.user.create({
      data: { username, password },
    });

    return user;
  }

  async list(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async get(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { username } });
  }
}
