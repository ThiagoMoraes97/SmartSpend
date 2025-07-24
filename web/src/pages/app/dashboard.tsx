import { AppCards } from "@/components/app-cards";
import { ChartBar } from "@/components/chart-bar";
import { ChartPie } from "@/components/chart-pie";
import { InfoTable } from "@/components/info-table";

// Dados de exemplo para as transações
const transactionsData = [
  {
    id: 1,
    header: "Compra no Supermercado",
    type: "Alimentação",
    status: "Done",
    target: "R$ 150",
    limit: "R$ 200",
    reviewer: "João Silva",
  },
  {
    id: 2,
    header: "Pagamento de Conta de Luz",
    type: "Utilidades",
    status: "Done",
    target: "R$ 120",
    limit: "R$ 150",
    reviewer: "Maria Santos",
  },
  {
    id: 3,
    header: "Combustível",
    type: "Transporte",
    status: "In Progress",
    target: "R$ 200",
    limit: "R$ 250",
    reviewer: "Assign reviewer",
  },
  {
    id: 4,
    header: "Internet",
    type: "Utilidades",
    status: "Done",
    target: "R$ 90",
    limit: "R$ 100",
    reviewer: "Carlos Lima",
  },
  {
    id: 5,
    header: "Farmácia",
    type: "Saúde",
    status: "Not Started",
    target: "R$ 50",
    limit: "R$ 80",
    reviewer: "Ana Costa",
  },
];

export function Dashboard() {
  return (
    <div className="p-6 w-full flex flex-col gap-10">
      <div>
        <h1 className="text-2xl font-bold tracking-tighter">Dashboard</h1>
        <p className="text-muted-foreground">Bem-vindo ao seu controle financeiro.</p>
      </div>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        <AppCards />
        <AppCards />
        <AppCards />
        <AppCards />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-9 gap-4 lg:gap-6 h-96">
        <div className="lg:col-span-6 h-96">
          <ChartBar />
        </div>
        <div className="lg:col-span-3 h-96">
          <ChartPie />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold tracking-tighter mb-6">Transações Recentes</h2>

        <InfoTable data={transactionsData} />
      </section>
    </div>
  );
};

