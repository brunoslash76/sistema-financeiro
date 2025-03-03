import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  showSignupModal: false,
  showLoginModal: false,
}

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    toggleSignupModal: (state) => {
      state.showSignupModal = !state.showSignupModal
    },
    toggleLoginModal: (state) => {
      state.showLoginModal = !state.showLoginModal
    }
  }
})

export const {
  toggleLoginModal,
  toggleSignupModal,
} = modalSlice.actions

export default modalSlice.reducer