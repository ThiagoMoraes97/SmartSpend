import { FilteredTable } from "@/components/table/filtered-table";

// Dados de exemplo para as transações
const transactionsData = [
  { id: 1, header: "Compra no Supermercado", type: "Alimentação", status: "Done", target: "R$ 150", limit: "R$ 200", reviewer: "João Silva" },
  { id: 2, header: "Pagamento de Conta de Luz", type: "Utilidades", status: "Done", target: "R$ 120", limit: "R$ 150", reviewer: "Maria Santos" },
  { id: 3, header: "Combustível", type: "Transporte", status: "In Progress", target: "R$ 200", limit: "R$ 250", reviewer: "Assign reviewer" },
  { id: 4, header: "Internet", type: "Utilidades", status: "Done", target: "R$ 90", limit: "R$ 100", reviewer: "Carlos Lima" },
  { id: 5, header: "Farmácia", type: "Saúde", status: "Not Started", target: "R$ 50", limit: "R$ 80", reviewer: "Ana Costa" },
  { id: 6, header: "Plano de Celular", type: "Utilidades", status: "Done", target: "R$ 60", limit: "R$ 70", reviewer: "João Silva" },
  { id: 7, header: "Assinatura Netflix", type: "Entretenimento", status: "Done", target: "R$ 55", limit: "R$ 60", reviewer: "Maria Santos" },
  { id: 8, header: "Manutenção do Carro", type: "Transporte", status: "In Progress", target: "R$ 500", limit: "R$ 600", reviewer: "Carlos Lima" },
  { id: 9, header: "Compra de Livros", type: "Educação", status: "Not Started", target: "R$ 120", limit: "R$ 150", reviewer: "Ana Costa" },
  { id: 10, header: "Cinema", type: "Entretenimento", status: "Done", target: "R$ 40", limit: "R$ 50", reviewer: "Assign reviewer" },
  { id: 11, header: "Academia", type: "Saúde", status: "Done", target: "R$ 100", limit: "R$ 120", reviewer: "João Silva" },
  { id: 12, header: "Roupas", type: "Pessoal", status: "In Progress", target: "R$ 200", limit: "R$ 300", reviewer: "Maria Santos" },
  { id: 13, header: "Presente de Aniversário", type: "Pessoal", status: "Done", target: "R$ 150", limit: "R$ 200", reviewer: "Carlos Lima" },
  { id: 14, header: "Almoço com Amigos", type: "Alimentação", status: "Done", target: "R$ 80", limit: "R$ 100", reviewer: "Ana Costa" },
  { id: 15, header: "Pagamento de IPTU", type: "Contas", status: "Not Started", target: "R$ 300", limit: "R$ 350", reviewer: "Assign reviewer" },
  { id: 16, header: "Curso Online", type: "Educação", status: "In Progress", target: "R$ 250", limit: "R$ 300", reviewer: "João Silva" },
  { id: 17, header: "Assinatura Spotify", type: "Entretenimento", status: "Done", target: "R$ 34,90", limit: "R$ 40", reviewer: "Maria Santos" },
  { id: 18, header: "Compra de Café", type: "Alimentação", status: "Done", target: "R$ 20", limit: "R$ 30", reviewer: "Carlos Lima" },
  { id: 19, header: "Serviço de Streaming", type: "Entretenimento", status: "Not Started", target: "R$ 45", limit: "R$ 60", reviewer: "Ana Costa" },
  { id: 20, header: "Taxi", type: "Transporte", status: "In Progress", target: "R$ 70", limit: "R$ 90", reviewer: "Assign reviewer" },
];


export function Transactions() {
  return (
   <div className="p-6 w-full flex flex-col gap-10">
      <div>
        <h1 className="text-2xl font-bold tracking-tighter">Transações</h1>
        <p className="text-muted-foreground">Aqui você pode gerenciar suas transações.</p>
      </div>

      <div>
          <FilteredTable />
        </div>
   </div>
  )
}