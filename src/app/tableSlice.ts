import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import data from "./../../table-data.json"

export const loadData = createAsyncThunk(
  "table/loadData",
  async (_, { rejectWithValue }) => {
    try {
      console.log(data, "data from thunk")
      return data
    } catch (error) {
      console.log(error, "Error from thunk")
      return rejectWithValue(error)
    }
  },
)

export interface IData {
  id: string
  barcode: string
  subject: string
  supplierCode: string
  size: string
  available: string
  totalQuantity: string
  inTransit: string
}

interface TableState {
  data: IData[]
  totals: number
  filter: string
  sortColumn: string
  sortOrder: "asc" | "desc"
  isLoading: boolean
}

const initialState: TableState = {
  data: [],
  totals: 0,
  filter: "",
  sortColumn: "",
  sortOrder: "asc",
  isLoading: false,
}

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sortColumn = action.payload
      state.sortOrder = state.sortOrder === "asc" ? "desc" : "asc"
    },
    updateCell: (
      state,
      action: PayloadAction<{
        id: string
        columnKey: keyof IData
        value: string
      }>,
    ) => {
      const { id, columnKey, value } = action.payload
      const item = state.data.find(row => row.id === id)
      if (item) {
        item[columnKey] = value

        state.totals = state.data.reduce(
          (sum, row) => sum + Number(row.totalQuantity),
          0,
        )
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(loadData.pending, state => {
      state.isLoading = true
    })
    builder.addCase(
      loadData.fulfilled,
      (state, action: PayloadAction<IData[]>) => {
        state.data = action.payload
        state.totals = state.data.reduce(
          (sum, row) => sum + Number(row.totalQuantity),
          0,
        )
        state.isLoading = false
      },
    )
    builder.addCase(loadData.rejected, state => {
      state.isLoading = false
    })
  },
})

export const { setFilter, setSort, updateCell } = tableSlice.actions

export default tableSlice.reducer
