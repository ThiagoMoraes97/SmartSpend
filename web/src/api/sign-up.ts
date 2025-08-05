import { api } from "@/lib/axios";

interface SignUpBody {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export async function signUp(data: SignUpBody) {
  await api.post("/users", data);
}