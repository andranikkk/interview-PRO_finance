/* eslint-disable @typescript-eslint/no-restricted-imports */
import type { ChangeEvent } from "react"
import { useEffect, useState } from "react"
import {
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react"

import { saveAs } from "file-saver"
import { Parser } from "json2csv"
import { FaFolderPlus } from "react-icons/fa6"
import { IoClose } from "react-icons/io5"
import tableData from "./../../../../table-data.json"
import { FaFileExport } from "react-icons/fa"
import type { IData } from "../../../app/tableSlice"

export function Tables() {
  const [page, setPage] = useState<number>(1)
  const [data, setData] = useState<IData[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const parser = new Parser()

  const itemsPerPage = 5

  useEffect(() => {
    loadMore()
  }, [])

  const loadMore = () => {
    setIsLoading(true)

    const startIndex = (page - 1) * itemsPerPage
    const newItems = tableData.slice(startIndex, startIndex + itemsPerPage)

    setData(prevData => [...prevData, ...newItems])
    setPage(prevPage => prevPage + 1)
    setIsLoading(false)
  }

  const handleExport = (format: "json" | "csv") => {
    if (format === "json") {
      const jsonData = new Blob([JSON.stringify(data)], {
        type: "application/json",
      })
      saveAs(jsonData, "table-data.json")
    } else {
      const csvData = parser.parse(data)
      const csvBlob = new Blob([csvData], { type: "text/csv" })
      saveAs(csvBlob, "table-data.csv")
    }
  }

  const hasMore: boolean = page * itemsPerPage < tableData.length

  const totalMass = data.reduce((acc, item) => {
    const massValue = parseFloat(item.totalQuantity)
    return acc + (isNaN(massValue) ? 0 : massValue)
  }, 0)

  const totalInTransit = data.reduce((acc, item) => {
    const massValue = parseFloat(item.inTransit)
    return acc + (isNaN(massValue) ? 0 : massValue)
  }, 0)

  const parseCSV = (text: string) => {
    const lines = text.split("\n")
    const headers = lines[0].split(",")
    const rows = lines.slice(1).map(line => {
      const values = line.split(",")
      const entry: { [key: string]: string } = {}
      headers.forEach((header, i) => {
        entry[header] = values[i]
      })
      return entry as unknown as IData
    })
    return rows
  }

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = async e => {
        const text = e.target?.result
        if (typeof text === "string") {
          const csvData = parseCSV(text)
          setData(prevData => [...prevData, ...csvData])
        }
      }
      reader.readAsText(file)
    }
  }

  return (
    <div>
      <div className="flex flex-row gap-2">
        <Button className="bg-blue-500 text-white rounded-full">
          Сформировать
        </Button>
        <Dropdown>
          <DropdownTrigger>
            <Button
              startContent={<FaFileExport fill="white" size={16} />}
              className="bg-blue-950 text-white rounded-full"
            >
              Экспорт
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Dynamic Actions"
            items={[
              { key: "json", label: "JSON" },
              { key: "csv", label: "CSV" },
            ]}
          >
            {item => (
              <DropdownItem
                key={item.key}
                onClick={() => handleExport(item.key as "json" | "csv")}
              >
                {item.label}
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
      </div>

      <hr className="border-0.5 my-2 border-gray-300" />

      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-10">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-10">
              <input
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
                className="hidden"
                id="upload-csv"
              />
              <label htmlFor="upload-csv" className="cursor-pointer">
                <p className="flex flex-row items-center gap-2">
                  <FaFolderPlus size={16} />
                  Загрузить данные из csv
                </p>
              </label>
            </div>
          </div>
        </div>

        <div className="flex w-32 justify-between">
          <Divider orientation="vertical" />
          <button>
            <p className="flex flex-row items-center gap-1">
              Очистить <IoClose size={18} className="pt-[3px]" />
            </p>
          </button>
        </div>
      </div>

      <hr className="border-0.5 my-2 border-gray-300" />

      <Table
        isHeaderSticky
        aria-label="Example table with client side sorting"
        className="overflow-auto max-w-[1060px]"
        bottomContent={
          hasMore && !isLoading ? (
            <div className="flex w-full justify-center">
              <Button isDisabled={isLoading} variant="flat" onPress={loadMore}>
                {isLoading && <Spinner color="white" size="sm" />}
                Load More
              </Button>
            </div>
          ) : null
        }
        classNames={{
          base: "max-h-[520px] overflow-auto",
          table: "min-h-[420px]",
        }}
      >
        <TableHeader>
          <TableColumn key="barcode">Баркод</TableColumn>
          <TableColumn key="subject">Предмет</TableColumn>
          <TableColumn key="supplierCode">Артикул поставщика</TableColumn>
          <TableColumn key="size">Размер</TableColumn>
          <TableColumn key="available">Доступно к заказу</TableColumn>
          <TableColumn key="totalQuantity">Итого кол-во товара</TableColumn>
          <TableColumn key="inTransit">Товары в пути</TableColumn>
        </TableHeader>
        <TableBody
          isLoading={isLoading}
          items={data}
          loadingContent={<Spinner label="Loading..." />}
        >
          {(item: IData) => (
            <TableRow key={item.id} className="hover:bg-gray-100 h-[75px]">
              {columnKey => (
                <TableCell className="px-6 py-5">
                  {item[columnKey as keyof IData]}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="w-full max-w-[1060px] mt-4 p-4 border-t border-gray-300">
        <div className="flex justify-between">
          <span className="font-bold">Итого:</span>
          <span className="font-bold">Количество товаров: {totalMass}</span>
          <span className="font-bold">Товары в пути: {totalInTransit}</span>
        </div>
      </div>
    </div>
  )
}
