import { hash } from "bcrypt";

import AppError from "AppError";

import UserRepository from "modules/user/repository/memory/UserRepository";

import UserAuthenticationService from "../services/UserAuthenticationService";

let userRepository: UserRepository;
let userAuthenticationService: UserAuthenticationService;

describe("UserAuthentication", () => {
  beforeEach(() => {
    userRepository = new UserRepository();
    userAuthenticationService = new UserAuthenticationService(userRepository);
  });

  it("should be able to authenticate", async () => {
    const password = "123456";
    const hashedPassword = await hash(password, 8);

    const user = await userRepository.create({
      username: "fulano",
      password: hashedPassword,
    });

    const response = await userAuthenticationService.execute({
      login: "fulano",
      password: "123456",
    });

    expect(response).toHaveProperty("token");
    // expect(response.user).toContain(userData);
  });

  it("should not be able to authenticate with non existing user", async () => {
    await expect(
      userAuthenticationService.execute({
        login: "fulano",
        password: "123456",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to authenticate with wrong password", async () => {
    await userRepository.create({
      username: "fulano",
      password: "123456",
    });

    await expect(
      userAuthenticationService.execute({
        login: "fulano",
        password: "wrong-password",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
