import { Item } from "@prisma/client";

import Menu from "../models/Menu";

export interface ICreateMenuDTO {
  title: string;
  categoryId: number;
  price: number;
  description: string;
  isActive: boolean;
}

export interface IUpdateMenuDTO {
  id: number;
  title: string;
  categoryId: number;
  price: number;
  description: string;
  isActive: boolean;
}

export default interface IMenuRepository {
  create(data: ICreateMenuDTO): Promise<Item>;
  list(): Promise<Menu[]>;
  listActives(): Promise<Menu[]>;
  get(id: number): Promise<Menu | null>;
  update(data: IUpdateMenuDTO): Promise<Menu>;
  delete(id: number): Promise<void>;
}
