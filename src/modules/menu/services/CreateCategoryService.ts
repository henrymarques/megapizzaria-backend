import ICategoryRepository, {
  ICreateCategoryDTO,
} from "../repository/ICategoryRepository";

export default class CreateCategoryService {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute({ name }: ICreateCategoryDTO) {
    return await this.categoryRepository.create({
      name,
    });
  }
}
