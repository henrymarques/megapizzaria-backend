import AppError from "AppError";

import IMenuRepository, { IUpdateMenuDTO } from "../repository/IMenuRepository";

export default class UpdateMenuService {
  constructor(private menuRepository: IMenuRepository) {}

  async execute({
    id,
    title,
    categoryId,
    price,
    description,
    isActive,
  }: IUpdateMenuDTO) {
    const item = await this.menuRepository.get(id);
    if (!item) throw new AppError("Não encontrado");

    return await this.menuRepository.update({
      id,
      title,
      categoryId,
      price: price * 10,
      description,
      isActive,
    });
  }
}
