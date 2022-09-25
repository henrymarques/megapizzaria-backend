import { Request, Response } from "express";

import UserRepository from "../../repository/prisma/UserRepository";

import CreateUserService from "../../services/CreateUserService";
import ListUserService from "../../services/ListUserService";

export default class UserController {
  async create(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;
    const createUserService = new CreateUserService(new UserRepository());

    const user = await createUserService.execute({
      username,
      password,
    });

    // return response.location(`/user/${user.id}`).status(201).send();
    return response.status(201).send();
  }

  async index(request: Request, response: Response): Promise<Response> {
    const listUserService = new ListUserService(new UserRepository());

    const users = await listUserService.execute();

    return response.json(users);
  }
}
