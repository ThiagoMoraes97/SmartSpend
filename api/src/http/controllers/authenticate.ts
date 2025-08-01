import z from "zod";
import { FastifyReply, FastifyRequest } from "fastify";
import { InvalidCredentialsError } from "@/use-cases/errors/invalid-credentials-error";
import { makeAuthenticateUseCase } from "@/use-cases/factories/make-authenticate-use-case";


export async function authenticate(request: FastifyRequest, reply: FastifyReply){
  const authenticateBodySchema = z.object({
    email: z.email(),
    password: z.string().min(6),
  });

  const { email, password } = authenticateBodySchema.parse(request.body);

  const authenticateUseCase = makeAuthenticateUseCase();

  try {
    const {user} = await authenticateUseCase.execute({
      email,
      password,
    })

    const token = await reply.jwtSign({}, {
      sign: {
        sub: user.id,
        expiresIn: "7d", // Token valid for 7 days
      },
    });

    reply.setCookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    });
    
  } catch (error) {
   if( error instanceof InvalidCredentialsError){
      return reply.status(401).send({ message: error.message });
    }
    throw error;
  }
  return reply.status(200).send();
}