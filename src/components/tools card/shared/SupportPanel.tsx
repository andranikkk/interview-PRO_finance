import type React from "react"

type Props = {}

export const SupportPanel: React.FC<Props> = () => {
  return (
    <div className="flex flex-col w-96 h-max bg-blue-950 rounded-2xl text-white p-5 gap-1">
      <div className="text-start gap-7 flex flex-col">
        <p>Техническая поддержка</p>

        <div className="flex gap-9">
          <div>
            <p className="text-gray-400 text-[12px]">Номер поддержки:</p>
            <p>8 (999) 999 99 99</p>
          </div>
          <div>
            <p className="text-gray-400 text-[12px]">Почта поддержки:</p>
            <p>test@testmail.ru</p>
          </div>
        </div>

        <div className="text-start">
          <p className="text-gray-400 text-[12px]">Часы работы:</p>
          <p>Пн - Пт с 9:00 до 19:00 мск</p>
        </div>

        <div>
          <p className="text-gray-400 text-[12px]">
            Пользовательское соглашение
          </p>
          <hr className="border-0.5 my-2 border-gray-600" />
          <p className="text-gray-400 text-[12px]">
            Политика конфиденциальности
          </p>
          <hr className="border-0.5 my-2 border-gray-600" />
          <p className="text-gray-400 text-[12px]">Юридическая информация</p>
          <hr className="border-0.5 my-2 border-gray-600" />
          <p className="text-gray-400 text-[12px]">Публичная оферта</p>
        </div>
      </div>
    </div>
  )
}
