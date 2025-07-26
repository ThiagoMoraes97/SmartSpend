"use client"

import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { ChartConfig } from "@/components/ui/chart"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A pie chart with a label"

const chartData = [
  { payment: "credit", value: 275, fill: "var(--color-credit)" },
  { payment: "debit", value: 200, fill: "var(--color-debit)" },
  { payment: "money", value: 187, fill: "var(--color-money)" },
  { payment: "pix", value: 173, fill: "var(--color-pix)" },
]

const chartConfig = {
  value: {
    label: "Valor",
  },
  credit: {
    label: "Crédito",
    color: "var(--chart-1)",      
  },
  debit: {
    label: "Débito",
    color: "var(--chart-2)",  
  },
  money: {
    label: "Dinheiro",
    color: "var(--chart-3)",  
  },
  pix: {
    label: "Pix",
    color: "var(--chart-4)",   
  },
} satisfies ChartConfig

export function ChartPie() {
  return (
    <Card className="h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-xl">Gastos por Forma de Pagamento</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-[280px] pb-0 h-72"
        >
          <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="value" label nameKey="payment" />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
