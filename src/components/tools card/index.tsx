import type React from "react"
import { Button } from "@nextui-org/react"
import { AiFillMessage } from "react-icons/ai"
import { ControlPanel } from "./shared/ControlPanel"
import { SupportPanel } from "./shared/SupportPanel"

interface Props {}

export const ToolsCard: React.FC<Props> = () => {
  return (
    <div className="flex flex-col gap-1 w-[385px]">
      <ControlPanel />

      <SupportPanel />

      <Button className="bg-blue-500 text-white font-semibold text-lg py-10 rounded-3xl">
        <AiFillMessage fill="white" size={20} /> Связаться с нами
      </Button>
    </div>
  )
}
