import IMenuRepository from "../repository/IMenuRepository";

export default class ListMenuService {
  constructor(private menuRepository: IMenuRepository) {}

  async execute(onlyActives: boolean) {
    const items = onlyActives
      ? await this.menuRepository.list()
      : await this.menuRepository.listActives();

    items.forEach((item) => (item.price = item.price * 10));

    return items;
  }
}
