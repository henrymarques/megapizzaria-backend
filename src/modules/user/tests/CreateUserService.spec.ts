import AppError from "AppError";

import UserRepository from "modules/user/repository/memory/UserRepository";
import CreateUserService from "../services/CreateUserService";

let userRepository: UserRepository;
let createUserService: CreateUserService;

describe("CreateUser", () => {
  beforeEach(() => {
    userRepository = new UserRepository();
    createUserService = new CreateUserService(userRepository);
  });

  it("should be able to create a new user", async () => {
    const user = await createUserService.execute({
      username: "fulano",
      password: "123456",
    });

    expect(user).toHaveProperty("id");
  });

  it("should not be able to create a new user with same username from another", async () => {
    await createUserService.execute({
      username: "fulano",
      password: "123456",
    });

    await expect(
      createUserService.execute({
        username: "fulano",
        password: "123456",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
