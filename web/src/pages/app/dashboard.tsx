import { AppCards } from "@/components/app-cards";
import { ChartBar } from "@/components/chart-bar";
import { ChartPie } from "@/components/chart-pie";
import { FilteredTable } from "@/components/table/filtered-table";
import { Banknote, CreditCard, DollarSign, Wallet } from "lucide-react";

export function Dashboard() {
  return (
    <div className="p-6 w-full flex flex-col gap-10">
      <div>
        <h1 className="text-2xl font-bold tracking-tighter">Dashboard</h1>
        <p className="text-muted-foreground">Bem-vindo ao seu controle financeiro.</p>
      </div>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        <AppCards title="Total de Gastos" content="R$ 150,00" icon={DollarSign} />
        <AppCards title="No Crédito" content="R$ 120,00" icon={CreditCard} />
        <AppCards title="No Débito" content="R$ 200,00" icon={Wallet} />
        <AppCards title="Em Dinheiro/Pix" content="R$ 90,00" icon={Banknote} />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-9 gap-4 lg:gap-6">
        <div className="lg:col-span-6 h-[450px]">
          <ChartBar />
        </div>
        <div className="lg:col-span-3 h-[450px]">
          <ChartPie />
        </div>
     </section>

      <section>
        <h2 className="text-xl font-bold tracking-tighter mb-6">Transações Recentes</h2>
        <FilteredTable />
      </section>
    </div>
  );
};

