import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type InitialState = {
  value: AuthState
}

type AuthState = {
  isAuth: boolean
  username: string
  uid: string
  isModerator: boolean
}

const initialState: InitialState = {
  value: {
    isAuth: false,
    username: "",
    uid: "",
    isModerator: false,
  },
}

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState
    },
    logIn: (_state, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: true,
          username: action.payload,
          uid: "aaaa-bbbb-cccc-dddd",
          isModerator: false,
        },
      }
    },
    toggleModerator: (state) => {
      state.value.isModerator = !state.value.isModerator
    },
  },
})

export const { logIn, logOut, toggleModerator } = auth.actions

export default auth.reducer
