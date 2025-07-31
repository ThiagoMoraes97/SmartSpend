import { api } from "@/lib/axios";

interface SignInBody {
  email: string;
  password: string;
}

export async function SignIn({ email, password }: SignInBody) {

  await api.post("/sign-in", {
    email,
    password
  })
}