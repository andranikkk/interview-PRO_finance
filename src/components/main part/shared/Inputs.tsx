import type React from "react"
import { Input, Select, SelectItem } from "@nextui-org/react"
import { categories } from "../data"

type Props = {}

export const Inputs: React.FC<Props> = () => {
  return (
    <div className="flex flex-col mt-[25px]">
      <div className="flex flex-row gap-2">
        <div className="bg-white rounded-2xl px-3 py-2 w-[250px]">
          <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              type="email"
              label="Баркод"
              labelPlacement="outside-left"
              placeholder="5643231897532156"
            />
          </div>
        </div>
        <div className="bg-white rounded-2xl px-3 py-2 w-[250px]">
          <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              type="email"
              label="Артикул"
              labelPlacement="outside-left"
              placeholder="ДжЖСинМом0823"
            />
          </div>
        </div>
        <div className="bg-white rounded-2xl px-3 py-2 w-[120px]">
          <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              type="email"
              label="Размер"
              labelPlacement="outside-left"
              placeholder="44"
            />
          </div>
        </div>
        <div>
          <Select
            label="Категрия"
            placeholder="Выберите категорию"
            defaultSelectedKeys={["Куртки"]}
            className="w-[120px]"
          >
            {categories.map(category => (
              <SelectItem key={category.key}>{category.label}</SelectItem>
            ))}
          </Select>
        </div>
      </div>
    </div>
  )
}
