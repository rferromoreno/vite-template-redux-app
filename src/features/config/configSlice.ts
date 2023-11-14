import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"
import { fetchAppConfig } from "./configAPI"

export interface ConfigState {
  value: object
  loading: "idle" | "pending" | "succeeded" | "failed"
}

const initialState: ConfigState = {
  value: {},
  loading: "idle",
}

export const fetchConfig = createAsyncThunk("config/fetchConfig", async () => {
  const response = await fetchAppConfig()
  return response.data
})

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setConfig: (
      state,
      action: PayloadAction<{ path: string; value: object }>,
    ) => {
      state.value[action.payload.path] = action.payload.value
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchConfig.fulfilled, (state, action) => {
      state.value = action.payload
    })
  },
})

export const { setConfig } = configSlice.actions

export const selectConfig = (state: RootState) => state.config.value

export default configSlice.reducer
