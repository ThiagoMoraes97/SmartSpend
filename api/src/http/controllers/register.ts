import z from "zod";
import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";

export async function register(request: FastifyRequest, reply: FastifyReply){
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    phone: z.string().min(10).max(15),
  });

  const { name, email, password, phone } = registerBodySchema.parse(request.body);

  const userWithSameEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (userWithSameEmail) {
    return reply.status(409).send({
      message: "User already exists",
    });
  }

  const hashedPassword = await hash(password, 6);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      phone,
    },
  });

  return reply.status(201).send({
    message: "User registered successfully",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    },
  });
}