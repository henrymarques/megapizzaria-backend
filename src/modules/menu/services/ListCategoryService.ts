import ICategoryRepository from "../repository/ICategoryRepository";

export default class ListCategoryService {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute() {
    return this.categoryRepository.list();
  }
}
