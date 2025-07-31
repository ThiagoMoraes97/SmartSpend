import { expect, describe, it, beforeEach } from "vitest";
import { hash } from "bcryptjs";
import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository";
import { AuthenticateUseCase } from "./authenticate";
import { randomUUID } from "node:crypto";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";

describe("Authenticate Use Case", () => {
  let inMemoryUsersRepository: InMemoryUsersRepository;
  let authenticateUseCase: AuthenticateUseCase;

  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    authenticateUseCase = new AuthenticateUseCase(inMemoryUsersRepository);
  });

  it("should be able to authenticate a user", async () => {
    await inMemoryUsersRepository.create({
      id: randomUUID(),
      name: "John Doe",
      email: "johndoe@example.com",
      password_hash: await hash("password123", 6),
      phone: "123-456-7890",
      created_at: new Date(),
    })

    const { user } = await authenticateUseCase.execute({
      email: "johndoe@example.com",
      password: "password123",
    });
    

    expect(user).toHaveProperty("id");
    expect(user.name).toBe("John Doe");
    expect(user.email).toBe("johndoe@example.com");
    expect(user.phone).toBe("123-456-7890");
  });

  it("should not be able to authenticate a user that does not exist", async () => {
    expect(async () => {

      await authenticateUseCase.execute({
        email: "johndoe@example.com",
        password: "password123",
      });

    }).rejects.toBeInstanceOf(InvalidCredentialsError);
  });


  it("should not be able to authenticate a user with wrong password", async () => {
    await inMemoryUsersRepository.create({
      id: randomUUID(),
      name: "John Doe",
      email: "johndoe@example.com",
      password_hash: await hash("password123", 6),
      phone: "123-456-7890",
      created_at: new Date(),
    });

    expect(async () => {

      await authenticateUseCase.execute({
        email: "johndoe@example.com",
        password: "password124",
      });

    }).rejects.toBeInstanceOf(InvalidCredentialsError);
  });

  it("should not be able to authenticate a user with a null password", async () => {
    // User is created by social login or similar, without a password
    // This is a common scenario in applications that allow social login.

    await inMemoryUsersRepository.create({
      id: randomUUID(),
      name: "John Doe",
      email: "johndoe@example.com",
      password_hash: null,
      phone: "123-456-7890",
      created_at: new Date(),
    });

    expect(async () => {

      await authenticateUseCase.execute({
        email: "johndoe@example.com",
        password: "password123",
      });

    }).rejects.toBeInstanceOf(InvalidCredentialsError);
  });
});