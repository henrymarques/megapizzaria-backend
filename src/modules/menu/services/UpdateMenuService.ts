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
