import AppError from "AppError";

import IMenuRepository from "../repository/IMenuRepository";

export default class ShowMenuService {
  constructor(private menuRepository: IMenuRepository) {}

  async execute(id: number) {
    const item = await this.menuRepository.get(id);
    if (!item) throw new AppError("Não encontrado");

    item.price = item.price * 10;
    return item;
  }
}
