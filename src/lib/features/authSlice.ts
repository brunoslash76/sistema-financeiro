import { createSlice } from "@reduxjs/toolkit"

interface InitialState {
  token: string | null
}

const initialState: InitialState = {
  token: null
}

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload
    },
    invalidateToken: (state) => {
      state.token = null
    }
  }
})

export const {
  setToken,
  invalidateToken,
} = authSlice.actions

export default authSlice.reducer