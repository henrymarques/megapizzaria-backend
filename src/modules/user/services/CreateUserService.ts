import { hash } from "bcrypt";

import AppError from "AppError";

import IUserRepository, { ICreateUserDTO } from "../repository/IUserRepository";

export default class CreateUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute({ username, password }: ICreateUserDTO) {
    const userExists = await this.userRepository.findByUsername(username);
    if (!!userExists) {
      throw new AppError("E-mail já utilizado");
    }

    const hashedPassword = await hash(password, 8);

    return await this.userRepository.create({
      password: hashedPassword,
      username: username,
    });
  }
}
