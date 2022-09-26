import Category from "../models/Category";

export interface ICreateCategoryDTO {
  name: string;
}

export interface IUpdateCategoryDTO {
  id: number;
  name: string;
}

export default interface ICategoryRepository {
  create(data: ICreateCategoryDTO): Promise<Category>;
  list(): Promise<Category[]>;
  get(id: number): Promise<Category | null>;
  update(data: IUpdateCategoryDTO): Promise<Category>;
  delete(id: number): Promise<void>;
}
