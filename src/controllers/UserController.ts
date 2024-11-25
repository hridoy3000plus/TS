import { UserService } from "../services/UserService";
import { User } from "../models/User";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  addUser(name: string, email: string): User {
    return this.userService.addUser(name, email);
  }

  updateUser(id: number, name: string, email: string): User | null {
    return this.userService.updateUser(id, name, email);
  }

  getUser(id: number): User | undefined {
    return this.userService.getUser(id);
  }

  getAllUsers(): User[] {
    return this.userService.getAllUsers();
  }
}
