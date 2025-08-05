// api/google-login.ts
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { api } from "@/lib/axios";

export async function signInWithGoogle() {
  const result = await signInWithPopup(auth, googleProvider);
  const idToken = await result.user.getIdToken();

  // Envia o ID token para o backend
  /*await api.post(
    "/sessions/social",
    { idToken },
    { withCredentials: true } // necessário para setar o cookie
  );*/

  console.log("Usuário autenticado com Google:", result.user);
  console.log("ID Token:", idToken);
}
