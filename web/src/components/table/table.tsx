import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Pagination } from "./pagination";
import { useSearchParams } from "react-router";
import { z } from "zod";
import { Button } from "../ui/button";
import { X } from "lucide-react";

interface TableContentProps {
  description: string;
  value: string;
  category: string;
  payment: string;
  date: Date;
}

export type TableContents = TableContentProps[];

export function TableContent({ data }: { data: TableContents }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageIndex = z.coerce.number().transform((page) => page - 1).parse(
    searchParams.get("page") ?? "1");

  return(
    <div>
      <div className="border rounded-md overflow-hidden my-3">
        <Table className="w-full">
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead className="pl-4">Descrição</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Pagamento</TableHead>
              <TableHead>Data</TableHead>
              <TableHead></TableHead>
            </TableRow> 
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="text-sm font-medium py-3 pl-4">{item.description}</TableCell>
                <TableCell className="text-sm py-3 w-[150px]">{item.value}</TableCell>
                <TableCell className="text-sm py-3 w-[170px]">{item.category}</TableCell>
                <TableCell className="text-sm py-3 w-[180px]">{item.payment}</TableCell>
                <TableCell className="text-sm py-3 w-[150px]">{item.date.toLocaleDateString()}</TableCell>
                <TableCell className="text-sm py-3 w-[80px]">
                  <Button variant={"ghost"} className="cursor-pointer"><X  className="text-red-400"/>
                  <span className="sr-only">Excluir transação.</span>
                </Button></TableCell>
              </TableRow> 
            ))}
          </TableBody>
        </Table>
      </div>
      <Pagination pageIndex={0} totalCount={data.length} perPage={10} />
    </div>
  )
}