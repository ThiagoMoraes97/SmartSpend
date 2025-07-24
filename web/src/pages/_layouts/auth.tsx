import { Outlet } from "react-router";
import { ThemeToggle } from "@/components/theme-toggle";

export function AuthLayout() {
  return (
    <div className="bg-background h-screen flex items-center justify-center relative">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <Outlet />
    </div>
  )
}
