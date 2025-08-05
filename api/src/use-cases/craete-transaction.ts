import { UserRepository } from "@/repositories/user-repository";
import { Prisma } from "@/generated/prisma";

interface CreateTransactionUseCaseRequest {
  transaction: Prisma.TransactionCreateInput;
}


export class CreateTransactionUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ transaction }: CreateTransactionUseCaseRequest) {

  }
}