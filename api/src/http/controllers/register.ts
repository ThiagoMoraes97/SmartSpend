import z from "zod";
import { FastifyReply, FastifyRequest } from "fastify";
import { RegisterUserUseCase } from "@/use-cases/register";
import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { UserAlreadyExistError } from "@/use-cases/errors/user-already-exist-error";


export async function register(request: FastifyRequest, reply: FastifyReply){
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    phone: z.string().min(10).max(15),
  });

  const { name, email, password, phone } = registerBodySchema.parse(request.body);

  const prismaUsersRepository = new PrismaUsersRepository();
  const registerUserUseCase = new RegisterUserUseCase(prismaUsersRepository);

  try {
    await registerUserUseCase.execute({
      name,
      email,
      password,
      phone,
    })
  } catch (error) {
   if( error instanceof UserAlreadyExistError){
      return reply.status(409).send({ message: error.message });
    }
    throw error;
  }
  
  return reply.status(201).send();
}