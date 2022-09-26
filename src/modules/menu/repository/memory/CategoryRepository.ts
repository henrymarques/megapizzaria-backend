import Category from "../../models/Category";

import ICategoryRepository, {
  ICreateCategoryDTO,
  IUpdateCategoryDTO,
} from "../ICategoryRepository";

export default class CategoryRepository implements ICategoryRepository {
  create(data: ICreateCategoryDTO): Promise<Category> {
    throw new Error("Method not implemented.");
  }
  list(): Promise<Category[]> {
    throw new Error("Method not implemented.");
  }
  get(id: number): Promise<Category | null> {
    throw new Error("Method not implemented.");
  }
  update(data: IUpdateCategoryDTO): Promise<Category> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
