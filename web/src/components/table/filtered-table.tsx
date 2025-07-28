import { Search, X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { TableContent, type TableContents } from "./table-content";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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

export function FilteredTable() {
  return(
    <div>
      <form className="mb-4 flex items-center gap-2 w-full">
        <Input placeholder="Filtrar por descrição" className="w-[400px]" />
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Forma de Pagamento" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="credit">Crédito</SelectItem>
            <SelectItem value="debit">Débito</SelectItem>
            <SelectItem value="cash">Dinheiro</SelectItem>
            <SelectItem value="pix">Pix</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="home">Casa</SelectItem>
            <SelectItem value="food">Alimentação</SelectItem>
            <SelectItem value="transport">Transporte</SelectItem>
            <SelectItem value="health">Saúde</SelectItem>
            <SelectItem value="other">Outros</SelectItem>
          </SelectContent>
        </Select>
        <Button variant={"secondary"} type="submit" className="cursor-pointer">
          <Search className="h-4 w-4 mr-2" />
          Filtrar Resultados
        </Button>
        <Button variant={"outline"} type="button" className="cursor-pointer">
          <X className="h-4 w-4 mr-2" />
          Remover Filtros
        </Button>
      </form>
      <TableContent data={data} />
    </div>
  )
}