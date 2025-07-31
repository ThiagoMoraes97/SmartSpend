import { UserRepository } from "@/repositories/user-repository";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";
import { compare } from "bcryptjs";
import { User } from "@/generated/prisma";

interface AuthenticateUseCaseRequest {
  email: string; 
  password: string;
}

interface AuthenticateUseCaseResponse {
  user: User
}

export class AuthenticateUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ email, password }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {

    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new InvalidCredentialsError();
    }

    if (!user.password_hash) {
      throw new InvalidCredentialsError();
    }

    const isPasswordValid = await compare(password, user.password_hash);

    if (!isPasswordValid) {
      throw new InvalidCredentialsError();
    }
    
    return {
      user
    };
  }
}