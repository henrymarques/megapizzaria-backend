import AppError from "AppError";

import IMenuRepository from "../repository/IMenuRepository";

export default class ShowMenuService {
  constructor(private menuRepository: IMenuRepository) {}

  async execute(id: number) {
    const item = this.menuRepository.get(id);
    if (!item) throw new AppError("Não encontrado");

    await this.menuRepository.delete(id);
  }
}
