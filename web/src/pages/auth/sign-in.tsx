import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BadgeDollarSign } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import z from "zod";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/sign-in";

const SignInSchema = z.object({
  email: z.email("E-mail inválido!"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type SignInFormData = z.infer<typeof SignInSchema>;


export function SignIn() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<SignInFormData>({
    resolver: zodResolver(SignInSchema)
  });

  const { mutateAsync: authenticate } =  useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      navigate("/dashboard");
      console.log("Login realizado com sucesso!");
    },
    onError: (error) => {
      // Lógica para tratar erros de login
      console.error("Erro ao realizar login:", error);
    }
  })
  
  async function handleSignIn(data: SignInFormData) {
    authenticate(data);
  }

  return(
    <div className="flex flex-col items-center justify-center gap-2 p-6 w-md">
      <BadgeDollarSign className="w-16 h-16 text-primary" />
      <h1 className="text-2xl font-bold tracking-tighter">Bem-vindo ao SmartSpend</h1>
      <p className="text-sm text-foreground">Não possui uma conta? <Link to="/sign-up" className="text-muted-foreground underline">Crie agora!</Link></p>

      <form className="flex flex-col gap-6 p-6 w-full" onSubmit={handleSubmit(handleSignIn)}>
        <div className="flex flex-col gap-3">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" placeholder="Digite seu e-mail" {...register("email")} />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" placeholder="Digite sua senha" {...register("password")} />
        </div>

        <Button variant="default" type="submit" className="w-full cursor-pointer">Entrar</Button>

        <div 
          className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center    after:border-t"
        >
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            OU
          </span>
        </div>

        <Button variant="outline" type="button" className="w-full cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
              fill="currentColor"
            />
            </svg>
            Entrar com o Google
        </Button>

        <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
          Ao continuar, você concorda com nossos <a href="#">Termos de Serviço</a>{" "}
          e <a href="#">Política de Privacidade</a>.
        </div>

      </form>
    </div>
  )
}