// POST /sessions/social
import { FastifyRequest, FastifyReply } from "fastify";
import { admin } from "@/lib/firebase";
import { prisma } from "@/lib/prisma";

export async function socialLogin(request: FastifyRequest, reply: FastifyReply) {
  const { idToken } = request.body as { idToken: string };

  // Verifica o token do Firebase
  const decoded = await admin.auth().verifyIdToken(idToken);

  const email = decoded.email!;
  const name = decoded.name ?? "Usuário";

  // Procura ou cria o usuário no seu banco
  let user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    user = await prisma.user.create({
      data: { email, name },
    });
  }

  // Gera seu JWT e envia via cookie
  const token = await reply.jwtSign({}, {
    sign: {
      sub: user.id,
      expiresIn: "7d",
    },
  });

  reply.setCookie("token", token, {
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  return reply.send({ user });
}
