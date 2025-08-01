import fastify from "fastify";
import { appRoutes } from "./http/routes";
import { ZodError } from "zod";
import { env } from "./env";
import fastifyJwt from "@fastify/jwt";
import fastifyCookie from "fastify-cookie";
import cors from '@fastify/cors'

export const app = fastify();


app.register(cors, {
  origin: true,
  credentials: true,
})

app.register(fastifyCookie)

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: "token",
    signed: false,
  },
  sign: {
    expiresIn: "7d",
  },
})

app.register(appRoutes);

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    console.error(error);
    return reply.status(400).send({ message: "Validation Error", issues: error.format() });
  }

  if (env.NODE_ENV !== "production") {
    console.error(error);
  }
  
  reply.status(500).send({ message: "Internal Server Error" });
});