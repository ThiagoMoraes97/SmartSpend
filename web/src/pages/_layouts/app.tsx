import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Outlet } from "react-router"

function SidebarTrigger() {
  const { toggleSidebar } = useSidebar()
  
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="h-8 w-8 cursor-pointer"
      onClick={toggleSidebar}
    >
      <Menu className="h-4 w-4" />
    </Button>
  )
}


export function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <main className="flex flex-1 flex-col p-2">
          <div className="flex items-center">
            <SidebarTrigger />
          </div>
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}