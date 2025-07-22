import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <div className="bg-background h-screen flex items-center justify-center">
      <Outlet />
    </div>
  )
}
