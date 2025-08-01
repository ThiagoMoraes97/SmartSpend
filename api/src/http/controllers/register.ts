import z from "zod";
import { FastifyReply, FastifyRequest } from "fastify";
import { UserAlreadyExistError } from "@/use-cases/errors/user-already-exist-error";
import { makeRegisterUseCase } from "@/use-cases/factories/make-register-use-case";


export async function register(request: FastifyRequest, reply: FastifyReply){
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    phone: z.string().min(10).max(15),
  });

  const { name, email, password, phone } = registerBodySchema.parse(request.body);

  const registerUserUseCase = makeRegisterUseCase();

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