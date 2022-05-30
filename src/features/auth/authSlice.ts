import { createSlice, PayloadAction } from '@reduxjs/toolkit'

 type AuthState = {
  user: SignUpSuccessPayload| null
  isLoading: string
  error: SingUpError | null
}
export type SingUpError={
  username:Array<string>
  email:Array<string> 
}

export type SignUpPayload = {
  username: string
  email: string
  password: string
}
export type SignUpSuccessPayload = {
  username: string
  email: string
  id: number
}
const initialState: AuthState = {
  user: null,
  isLoading: 'idle',
  error: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUp: state => {
      if (state.isLoading === 'idle') {
        state.isLoading = 'pending'
      }
    },
    signUpSuccess: (state, action: PayloadAction<SignUpSuccessPayload>) => {
      if (state.isLoading === 'pending') {
        state.isLoading = 'idle'
        state.user = action.payload
      }
    },
    signUpFailure: (state, action: PayloadAction<SingUpError>) => {
      state.isLoading = 'idle'
      state.error = action.payload
    },
  },
})


export const { signUpSuccess, signUp, signUpFailure } = authSlice.actions

export default authSlice.reducer