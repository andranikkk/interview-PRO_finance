import type React from "react"
import {
  FaUserCircle,
  FaCalendarAlt,
  FaLongArrowAltRight,
} from "react-icons/fa"
import { Button } from "@nextui-org/react"

type Props = {}

export const Header: React.FC<Props> = () => {
  return (
    <div className="w-[80%] h-16 p-4 bg-white rounded-2xl flex items-center justify-between">
      <div className="flex gap-6 h-14">
        <div className="max-w-max flex items-center">
          <FaUserCircle size={20} className="mr-2" />
          <p>Иванов И.И</p>
        </div>

        <div className="bg-blue-100 h-full max-w-max rounded-2xl flex flex-row items-center px-3">
          <FaCalendarAlt size={20} color="blue" className="mr-2" />
          <p className="text-blue-600">Тариф до 15.04.2024</p>
        </div>
      </div>

      <div className="gap-1 flex">
        <Button variant="faded" className="rounded-full bg-transparent">
          Выйти
        </Button>
        <Button className="bg-orange-500 text-white rounded-full">
          О нас
          <FaLongArrowAltRight fill="white" size={10} />
        </Button>
      </div>
    </div>
  )
}
