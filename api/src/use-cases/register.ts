import { UserRepository } from "@/repositories/user-repository";
import { hash } from "bcryptjs";
import th from "zod/v4/locales/th.cjs";

interface RegisterUserUseCaseRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export class RegisterUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({name, email, password, phone}: RegisterUserUseCaseRequest) {

    const userWithSameEmail = await this.userRepository.findByEmail(email);

    if (userWithSameEmail) {
      throw new Error("User already exists");
    }

    const password_hash = await hash(password, 6);

    await this.userRepository.create({
      name,
      email,
      password_hash,
      phone,
    });
  }
}