import { expect, describe, it, beforeEach } from "vitest";
import { RegisterUseCase } from "./register";
import { compare } from "bcryptjs";
import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository";
import { UserAlreadyExistError } from "./errors/user-already-exist-error";

describe("Register Use Case", () => {
  let inMemoryUsersRepository: InMemoryUsersRepository;
  let registerUseCase: RegisterUseCase;

  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    registerUseCase = new RegisterUseCase(inMemoryUsersRepository);
  }); 

  it("should hash the user's password", async () => {
    const { user } = await registerUseCase.execute({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "password123",
      phone: "123-456-7890",
    });

    const isPasswordHashed = await compare("password123", user.password_hash!);

    expect(isPasswordHashed).toBe(true);
  });

  it("should not create a user with an existing email", async () => {
    await registerUseCase.execute({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "password123",
      phone: "123-456-7890",
    });

    expect(async () => {
      await registerUseCase.execute({
        name: "Jane Doe",
        email: "johndoe@example.com",
        password: "password123",
        phone: "123-456-7890",
      });
    }).rejects.toBeInstanceOf(UserAlreadyExistError);
  });

  it("should be able to register a user", async () => {
    const { user } = await registerUseCase.execute({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "password123",
      phone: "123-456-7890",
    });

    expect(user).toHaveProperty("id");
    expect(user.name).toBe("John Doe");
    expect(user.email).toBe("johndoe@example.com");
    expect(user.phone).toBe("123-456-7890");
  });
});