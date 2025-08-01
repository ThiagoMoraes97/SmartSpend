"use client"

import * as React from "react"
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { IconCirclePlusFilled } from "@tabler/icons-react"

const organizations = [
  {
    value: "Gastos Pessoais",
    label: "Gastos Pessoais",
  },
  {
    value: "Gastos Profissionais",
    label: "Gastos Profissionais",
  },
]

export function SelectOrganization() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")


  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between"
        >
          {value
            ? organizations.find((organization) => organization.value === value)?.label
            : "Gastos Pessoais"}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>Nenhuma Organização Criada</CommandEmpty>
            <CommandGroup>
              {organizations.map((organization) => (
                <CommandItem
                  key={organization.value}
                  value={organization.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <CheckIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === organization.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {organization.label}
                </CommandItem>
              ))}
              <CommandItem>
                <Button variant={"ghost"} className="w-full justify-start">
                  <IconCirclePlusFilled className="w-4 h-4"/>
                  <span className="text-sm">Adicionar organização</span>
                </Button>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}