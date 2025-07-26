import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { TableContent, type TableContents } from "./table";

const data: TableContents = [
  {
    description: "Abastecimento de combustivél",
    value: "R$ 250,00",
    category: "Transporte",
    payment: "Cartão de Crédito",
    date: new Date(),
  },
  {
    description: "Compra no supermercado",
    value: "R$ 150,00",
    category: "Alimentação",
    payment: "Pix",
    date: new Date(),
  },
  {
    description: "Conta de luz",
    value: "R$ 120,00",
    category: "Casa",
    payment: "Dinheiro",
    date: new Date(),
  },
  {
    description: "Plano de internet",
    value: "R$ 99,90",
    category: "Casa",
    payment: "Cartão de Débito",
    date: new Date(),
  },
  {
    description: "Assinatura Netflix",
    value: "R$ 55,90",
    category: "Lazer",
    payment: "Cartão de Crédito",
    date: new Date(),
  },
  {
    description: "Compra de roupas",
    value: "R$ 320,00",
    category: "Outros",
    payment: "Dinheiro",
    date: new Date(),
  },
  {
    description: "Jantar fora",
    value: "R$ 180,00",
    category: "Alimentação",
    payment: "Pix",
    date: new Date(),
  },
  {
    description: "Medicamentos",
    value: "R$ 75,00",
    category: "Saúde",
    payment: "Cartão de Débito",
    date: new Date(),
  },
  {
    description: "Mensalidade da academia",
    value: "R$ 90,00",
    category: "Saúde",
    payment: "Cartão de Crédito",
    date: new Date(),
  },
  {
    description: "Livros didáticos",
    value: "R$ 210,00",
    category: "Outros",
    payment: "Pix",
    date: new Date(),
  },
  {
    description: "Compra na farmácia",
    value: "R$ 65,00",
    category: "Saúde",
    payment: "Cartão de Débito",
    date: new Date(),
  },
  {
    description: "Reparo no carro",
    value: "R$ 480,00",
    category: "Transporte",
    payment: "Dinheiro",
    date: new Date(),
  },
  {
    description: "Seguro do carro",
    value: "R$ 1.200,00",
    category: "Transporte",
    payment: "Pix",
    date: new Date(),
  },
  {
    description: "Café com amigos",
    value: "R$ 35,00",
    category: "Lazer",
    payment: "Cartão de Débito",
    date: new Date(),
  },
  {
    description: "Compra online",
    value: "R$ 290,00",
    category: "Outros",
    payment: "Cartão de Crédito",
    date: new Date(),
  },
];

export function InfoTable() {
  return(
    <Tabs defaultValue="all" className="w-full p-2">
      <TabsList>
        <TabsTrigger value="all">Todos</TabsTrigger>
        <TabsTrigger value="credit">Crédito</TabsTrigger>
        <TabsTrigger value="debit">Débito</TabsTrigger>
        <TabsTrigger value="cash">Dinheiro</TabsTrigger>
        <TabsTrigger value="pix">Pix</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <TableContent data={data} />
      </TabsContent>
      <TabsContent value="credit">
        <TableContent data={data.filter(item => item.payment === "Cartão de Crédito")} />
      </TabsContent>
      <TabsContent value="debit">
        <TableContent data={data.filter(item => item.payment === "Débito")} />
      </TabsContent>
      <TabsContent value="cash">
        <TableContent data={data.filter(item => item.payment === "Dinheiro")} />
      </TabsContent>
      <TabsContent value="pix">
        <TableContent data={data.filter(item => item.payment === "Pix")} />
      </TabsContent>
    </Tabs>
  )
}