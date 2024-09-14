import type React from "react"

import { Header } from "./shared/Header"
import { Actions } from "./shared/Actions"
import { Tables } from "./shared/Table"

type Props = {}

export const MainPart: React.FC<Props> = () => {
  return (
    <div className="flex flex-col gap-11">
      <Header />

      <div>
        <Actions />
      </div>
    </div>
  )
}
