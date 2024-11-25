import { User } from "../models/User";

export class UserService {
  private users: User[] = [];
  private nextId: number = 1;

  addUser(name: string, email: string): User {
    const newUser = new User(this.nextId++, name, email);
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: number, name: string, email: string): User | null {
    const user = this.users.find((user) => user.id === id);
    if (user) {
      user.name = name;
      user.email = email;
      return user;
    }
    return null;
  }

  getUser(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  getAllUsers(): User[] {
    return this.users;
  }
}
