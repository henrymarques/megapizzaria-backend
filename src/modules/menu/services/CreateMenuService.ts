import IMenuRepository, { ICreateMenuDTO } from "../repository/IMenuRepository";

export default class CreateMenuService {
  constructor(private menuRepository: IMenuRepository) {}

  async execute({
    title,
    categoryId,
    price,
    description,
    isActive,
  }: ICreateMenuDTO) {
    return await this.menuRepository.create({
      title,
      categoryId,
      price: price * 10,
      description,
      isActive,
    });
  }
}
