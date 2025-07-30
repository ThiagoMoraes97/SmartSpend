import { UserRepository } from "@/repositories/user-repository";
import { hash } from "bcryptjs";
import { UserAlreadyExistError } from "./errors/user-already-exist-error";

interface RegisterUserUseCaseRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
}

interface RegisterUserUseCaseResponse {
  user: {
    name: string;
    id: string;
    email: string;
    password_hash: string | null;
    phone: string | null;
    created_at: Date;
  };
}

export class RegisterUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({name, email, password, phone}: RegisterUserUseCaseRequest): Promise<RegisterUserUseCaseResponse> {

    const userWithSameEmail = await this.userRepository.findByEmail(email);

    if (userWithSameEmail) {
      throw new UserAlreadyExistError();
    }

    const password_hash = await hash(password, 6);

    const user = await this.userRepository.create({
      name,
      email,
      password_hash,
      phone,
    });

    return {
      user
    };
  }
}