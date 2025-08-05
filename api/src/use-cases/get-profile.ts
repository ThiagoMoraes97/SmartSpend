import { UserRepository } from "@/repositories/user-repository";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";
import { User } from "@/generated/prisma";

interface GetProfileUseCaseRequest {
  user_id: string;
}

interface GetProfileUseCaseResponse {
  user: User
}

export class GetProfileUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ user_id }: GetProfileUseCaseRequest): Promise<GetProfileUseCaseResponse> {

    const user = await this.userRepository.findById(user_id);

    if (!user) {
      throw new ResourceNotFoundError();
    }

    return {
      user
    };
  }
}