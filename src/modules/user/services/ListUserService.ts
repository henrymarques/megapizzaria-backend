import IUserRepository from "../repository/IUserRepository";

export default class ListUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute() {
    return this.userRepository.list();
  }
}
