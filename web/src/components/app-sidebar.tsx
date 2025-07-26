import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { BadgeDollarSign, Banknote, LayoutDashboard } from "lucide-react";
import { UserInfo } from "./user-info/user-info";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { ThemeToggle } from "./theme-toggle";
import { useNavigate } from "react-router";
import { IconCirclePlusFilled } from "@tabler/icons-react";
import { FaWhatsapp } from "react-icons/fa";
 
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const navigate = useNavigate();

  function navigateTo(path: string) {
    navigate(path);
  }

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <BadgeDollarSign className="w-6 h-6 text-primary"/>
          <Separator orientation="vertical" className="h-6" />
          <h1 className="text-xl font-bold tracking-tighter">SmartSpend</h1>
        </div>
        <p className="text-sm text-muted-foreground mt-2 mb-4">Gerencie suas finanças de forma inteligente.</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="flex flex-col gap-2">
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Button variant="default" className="w-full justify-start flex items-center gap-2 cursor-pointer bg-primary hover:bg-primary/80 text-primary-foreground">
                  <IconCirclePlusFilled className="w-4 h-4"/>
                  Adicionar Nova Transação
                </Button>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Button variant="ghost" className="w-full justify-start flex items-center gap-2 cursor-pointer" onClick={() => navigateTo("/dashboard")}>
                  <LayoutDashboard className="w-4 h-4"/>
                  Dashboard
                </Button>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Button variant="ghost" className="w-full justify-start flex items-center gap-2 cursor-pointer" onClick={() => navigateTo("/transactions")}>
                  <Banknote className="w-6 h-6"/>
                  Transações
                </Button>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Button variant="secondary" className="w-full justify-start flex items-center gap-2 cursor-pointer">
                  <FaWhatsapp className="w-4 h-4"/>
                  Conectar ao WhatsApp
                </Button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center justify-between gap-2">
          <UserInfo user={{ name: "Thiago Moraes", email: "thiagomottamoraes@gmail.com", avatar: "https://github.com/ThiagoMoraes97.png" }} />
          <ThemeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
