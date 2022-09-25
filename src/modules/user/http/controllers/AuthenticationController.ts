import { Request, Response } from "express";
import UserRepository from "../../repository/prisma/UserRepository";

import UserAuthenticationService from "../../services/UserAuthenticationService";

export default class AuthenticationController {
  async create(request: Request, response: Response): Promise<Response> {
    const { login, password } = request.body;

    const userAuthenticationService = new UserAuthenticationService(
      new UserRepository()
    );

    const { user, token } = await userAuthenticationService.execute({
      login,
      password,
    });

    return response.json({ user, token });
  }
}
