import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import AppError from "AppError";
import authConfig from "config/authConfig";

import IUserRepository from "../repository/IUserRepository";

interface IRequest {
  login: string;
  password: string;
}

interface IResponse {
  user: {
    id: number;
    username: string;
  };
  token: string;
}

export default class UserAuthenticationService {
  constructor(private userRepository: IUserRepository) {}

  async execute({ login, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByUsername(login);
    if (!user) {
      throw new AppError("Usuário ou senha incorretos");
    }

    const isPasswordCorrect = await compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new AppError("Usuário ou senha incorretos");
    }

    const token = sign({}, authConfig.jwtSecret, {
      subject: `${user.id}`,
      expiresIn: authConfig.jwtExpirationTime,
    });

    return {
      user: {
        id: user.id,
        username: user.username,
      },
      token,
    };
  }
}
