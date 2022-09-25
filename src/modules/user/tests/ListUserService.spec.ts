import { hash } from "bcrypt";

import UserRepository from "../repository/memory/UserRepository";
import ListUserService from "../services/ListUserService";

let userRepository: UserRepository;
let listUserService: ListUserService;

describe("ListUsers", () => {
  beforeEach(() => {
    userRepository = new UserRepository();
    listUserService = new ListUserService(userRepository);
  });

  it("should be able to list all users", async () => {
    const password = "123456";
    const hashedPassword = await hash(password, 8);

    await userRepository.create({
      username: "fulano",
      password: hashedPassword,
    });

    await userRepository.create({
      username: "cicrano",
      password: hashedPassword,
    });

    await userRepository.create({
      username: "beltrano",
      password: hashedPassword,
    });

    const users = await listUserService.execute();

    expect(users).toHaveLength(3);
  });
});
