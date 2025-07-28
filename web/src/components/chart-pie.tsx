"use client"

import { useState } from "react"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { ChartConfig } from "@/components/ui/chart"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const description = "A pie chart with a label"

const colors = [
  'hsl(262, 83%, 58%)', // roxo primário
  'hsl(221, 83%, 53%)', // azul
  'hsl(142, 71%, 45%)', // verde
  'hsl(48, 96%, 53%)',  // amarelo
  'hsl(25, 95%, 53%)',  // laranja
]

const paymentData = [
  { category: "credit", value: 275, fill: colors[0] },
  { category: "debit", value: 200, fill: colors[1] },
  { category: "money", value: 187, fill: colors[2] },
  { category: "pix", value: 173, fill: colors[3] },
]

const categoryData = [
  { category: "alimentacao", value: 320, fill: colors[0] },
  { category: "transporte", value: 250, fill: colors[1] },
  { category: "lazer", value: 180, fill: colors[2] },
  { category: "saude", value: 150, fill: colors[3] },
  { category: "educacao", value: 100, fill: colors[4] },
]

const paymentConfig = {
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

const categoryConfig = {
  value: {
    label: "Valor",
  },
  alimentacao: {
    label: "Alimentação",
    color: "var(--chart-1)",      
  },
  transporte: {
    label: "Transporte",
    color: "var(--chart-2)",  
  },
  lazer: {
    label: "Lazer",
    color: "var(--chart-3)",  
  },
  saude: {
    label: "Saúde",
    color: "var(--chart-4)",   
  },
  educacao: {
    label: "Educação",
    color: "var(--chart-5)",   
  },
} satisfies ChartConfig

export function ChartPie() {
  const [selectedType, setSelectedType] = useState("payment")
  const [isTransitioning, setIsTransitioning] = useState(false)

  const currentData = selectedType === "payment" ? paymentData : categoryData
  const currentConfig = selectedType === "payment" ? paymentConfig : categoryConfig

  const handleSelectChange = (value: string) => {
    if (value !== selectedType) {
      setIsTransitioning(true)
      setTimeout(() => {
        setSelectedType(value)
        setTimeout(() => setIsTransitioning(false), 80)
      }, 270)
    }
  }

  const getLegendItems = () => {
    return currentData.map((item, index) => {
      const config = currentConfig[item.category as keyof typeof currentConfig] as any
      return {
        label: config?.label || item.category,
        color: colors[index] || colors[0]
      }
    })
  }

  return (
    <Card className="h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-xl">
          <Select defaultValue="payment" value={selectedType} onValueChange={handleSelectChange}>
            <SelectTrigger className="w-[280px] cursor-pointer">
              <SelectValue placeholder="Selecione uma opção" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className="cursor-pointer" value="payment">Gastos por Forma de Pagamento</SelectItem>
              <SelectItem className="cursor-pointer" value="category">Gastos por Categoria</SelectItem>
            </SelectContent>
          </Select>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <ChartContainer
            config={currentConfig}
            className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-[280px] pb-0 h-72"
          >
            <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Pie 
                data={currentData} 
                dataKey="value" 
                label 
                nameKey="category"
                animationBegin={0}
                animationDuration={1200}
              />
            </PieChart>
          </ChartContainer>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          {getLegendItems().map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}
