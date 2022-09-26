import { Item } from "@prisma/client";
import Menu from "../../models/Menu";
import IMenuRepository, {
  ICreateMenuDTO,
  IUpdateMenuDTO,
} from "../IMenuRepository";

export default class MenuRepository implements IMenuRepository {
  create(data: ICreateMenuDTO): Promise<Item> {
    throw new Error("Method not implemented.");
  }
  list(): Promise<Menu[]> {
    throw new Error("Method not implemented.");
  }
  listActives(): Promise<Menu[]> {
    throw new Error("Method not implemented.");
  }
  get(id: number): Promise<Menu | null> {
    throw new Error("Method not implemented.");
  }
  update(data: IUpdateMenuDTO): Promise<Menu> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
