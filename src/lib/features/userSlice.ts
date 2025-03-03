import { UserData } from "@/types/userData"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: UserData = {
  email: null,
  name: null,
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      const { email, name } = action.payload

      state.name = name
      state.email = email
    }
  }
})

export const {
  setUserData,
} = userSlice.actions

export default userSlice.reducer
