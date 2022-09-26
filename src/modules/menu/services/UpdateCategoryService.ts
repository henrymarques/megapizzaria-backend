import AppError from "AppError";

import ICategoryRepository, {
  IUpdateCategoryDTO,
} from "../repository/ICategoryRepository";

export default class UpdateCategoryService {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute({ id, name }: IUpdateCategoryDTO) {
    const category = await this.categoryRepository.get(id);
    if (!category) throw new AppError("Não encontrado");

    return await this.categoryRepository.update({
      id,
      name,
    });
  }
}
