import { User } from "@/generated/prisma";
import { UserRepository } from "../user-repository";
import { randomUUID } from "node:crypto";

export class InMemoryUsersRepository implements UserRepository {
  private users: User[] = [];
  
  async create(user: User) {
    user = {
      ...user,
      id: randomUUID(),
      created_at: new Date(),
    }
    this.users.push(user);
    return user;
  }

  async findByEmail(email: string) {
    return this.users.find(user => user.email === email) || null;
  }

}