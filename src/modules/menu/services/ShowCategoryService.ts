import AppError from "AppError";

import ICategoryRepository from "../repository/ICategoryRepository";

export default class ShowCategoryService {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(id: number) {
    const category = await this.categoryRepository.get(id);
    if (!category) throw new AppError("Não encontrado");

    return category;
  }
}
