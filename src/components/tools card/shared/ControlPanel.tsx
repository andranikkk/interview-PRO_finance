import type React from "react"
import { IoSettingsSharp } from "react-icons/io5"
import { IoMdArrowDropdownCircle } from "react-icons/io"
import { MdEditNote } from "react-icons/md"
import { TbReportSearch, TbNotebook } from "react-icons/tb"
import { Chip } from "@nextui-org/react"

type Props = {}

export const ControlPanel: React.FC<Props> = () => {
  return (
    <div className="flex flex-col w-96 h-max bg-blue-950 rounded-2xl text-white text-xl p-3 gap-1">
      <div className="flex justify-between w-full h-min py-3 items-center">
        <p>
          <span className="bg-sky-500 rounded-md px-1">ФИН</span> Контроль
        </p>
        <Chip
          className="text-gray-400 bg-[rgb(54,59,88)] border-none"
          onClose={() => console.log("close")}
          variant="faded"
        >
          Меню
        </Chip>
      </div>
      <div className="flex justify-between w-full h-min py-4 px-2 items-center rounded-xl bg-[rgb(54,59,88)]">
        <div className="flex items-center max-w-max justify-between">
          <IoSettingsSharp fill="white" size={20} className="mr-2" />
          Настройки
        </div>
        <IoMdArrowDropdownCircle size={20} />
      </div>
      <div className="flex justify-between w-full h-min py-4 px-2 items-center rounded-xl bg-[rgb(54,59,88)]">
        <div className="flex items-center max-w-max justify-between">
          <MdEditNote fill="white" size={20} className="mr-2" />
          Внесение данных
        </div>
        <IoMdArrowDropdownCircle size={20} />
      </div>
      <div className="flex justify-between w-full h-min py-4 px-2 items-center rounded-xl bg-[rgb(54,59,88)]">
        <div className="flex items-center max-w-max justify-between">
          <TbReportSearch size={20} className="mr-2" />
          Отчёты
        </div>
        <IoMdArrowDropdownCircle size={20} />
      </div>
      <div className="flex justify-between w-full h-min py-4 px-2 items-center rounded-xl bg-[rgb(54,59,88)]">
        <div className="flex items-center max-w-max justify-between">
          <TbNotebook size={20} className="mr-2" />
          База знаний
        </div>
        <IoMdArrowDropdownCircle size={20} />
      </div>
    </div>
  )
}
