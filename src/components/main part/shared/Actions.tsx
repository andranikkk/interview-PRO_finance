import type React from "react"
import { MdIntegrationInstructions } from "react-icons/md"
import { Inputs } from "./Inputs"
import { Tables } from "./Table"

type Props = {}

export const Actions: React.FC<Props> = () => {
  return (
    <div className="flex flex-col gap-2 w-[80%]">
      <div className="w-[80%] flex flex-row justify-between items-center">
        <p className="text-[31px]">Остатки сформированы на 01.04.2023 г.</p>
        <button className="rounded-full flex flex-row items-center gap-1 bg-blue-950 text-white py-1.5 px-4">
          <MdIntegrationInstructions size={20} fill="white" />
          Инстукции
        </button>
      </div>

      <Inputs />

      <Tables />
    </div>
  )
}
