import { expect, describe, it } from "vitest";
import { RegisterUserUseCase } from "./register";
import { compare } from "bcryptjs";
import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository";
import { UserAlreadyExistError } from "./errors/user-already-exist-error";

describe("Register Use Case", () => {
  it("should hash the user's password", async () => {
    const inMemoryUsersRepository = new InMemoryUsersRepository();
    const registerUseCase = new RegisterUserUseCase(inMemoryUsersRepository);

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
    const inMemoryUsersRepository = new InMemoryUsersRepository();
    const registerUseCase = new RegisterUserUseCase(inMemoryUsersRepository);

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
    const inMemoryUsersRepository = new InMemoryUsersRepository();
    const registerUseCase = new RegisterUserUseCase(inMemoryUsersRepository);

    const { user } = await registerUseCase.execute({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "password123",
      phone: "123-456-7890",
    });

    console.log(user);

    expect(user).toHaveProperty("id");
    expect(user.name).toBe("John Doe");
    expect(user.email).toBe("johndoe@example.com");
    expect(user.phone).toBe("123-456-7890");
  });
});