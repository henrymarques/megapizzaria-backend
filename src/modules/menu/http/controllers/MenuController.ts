import { Request, Response } from "express";

import MenuRepository from "../../repository/prisma/MenuRepository";

import ListMenuService from "../../services/ListMenuService";
import CreateMenuService from "../../services/CreateMenuService";
import ShowMenuService from "../../services/ShowMenuService";
import DeleteMenuService from "../../services/DeleteMenuService";
import UpdateMenuService from "../../services/UpdateMenuService";

export default class MenuController {
  async list(request: Request, response: Response): Promise<Response> {
    const { onlyActives } = request.query;

    const listMenuService = new ListMenuService(new MenuRepository());
    const items = await listMenuService.execute(!!onlyActives);

    return response.json(items);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showMenuService = new ShowMenuService(new MenuRepository());
    const item = await showMenuService.execute(Number(id));

    return response.json(item);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { title, categoryId, price, description, isActive } = request.body;
    const createMenuService = new CreateMenuService(new MenuRepository());

    const item = await createMenuService.execute({
      title,
      categoryId,
      price,
      description,
      isActive,
    });

    return response.location(`/menu/${item.id}`).status(201).send();
  }

  async remove(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteMenuService = new DeleteMenuService(new MenuRepository());
    await deleteMenuService.execute(Number(id));

    return response.status(204).send();
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { title, categoryId, price, description, isActive } = request.body;
    const updateMenuService = new UpdateMenuService(new MenuRepository());
    const item = await updateMenuService.execute({
      id: Number(id),
      title,
      categoryId,
      price,
      description,
      isActive,
    });

    return response.location(`/menu/${item.id}`).status(204).send();
  }
}
