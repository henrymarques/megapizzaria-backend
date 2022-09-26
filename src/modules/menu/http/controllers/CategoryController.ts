import { Request, Response } from "express";

import CategoryRepository from "../../repository/prisma/CategoryRepository";

import ListCategoryService from "../../services/ListCategoryService";
import CreateCategoryService from "../../services/CreateCategoryService";
import ShowCategoryService from "../../services/ShowCategoryService";
import DeleteCategoryService from "../../services/DeleteCategoryService";
import UpdateCategoryService from "../../services/UpdateCategoryService";

export default class CategoryController {
  async list(request: Request, response: Response): Promise<Response> {
    const listCategoryService = new ListCategoryService(
      new CategoryRepository()
    );
    const categories = await listCategoryService.execute();

    return response.json(categories);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showCategoryService = new ShowCategoryService(
      new CategoryRepository()
    );
    const category = await showCategoryService.execute(Number(id));

    return response.json(category);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const createCategoryService = new CreateCategoryService(
      new CategoryRepository()
    );

    const newCategory = await createCategoryService.execute({ name });

    return response.location(`/category/${newCategory.id}`).status(201).send();
  }

  async remove(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteCategoryService = new DeleteCategoryService(
      new CategoryRepository()
    );
    await deleteCategoryService.execute(Number(id));

    return response.status(204).send();
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name } = request.body;
    const updateCategoryService = new UpdateCategoryService(
      new CategoryRepository()
    );
    const category = await updateCategoryService.execute({
      id: Number(id),
      name,
    });

    return response.location(`/category/${category.id}`).status(204).send();
  }
}
