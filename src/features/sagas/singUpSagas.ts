import { put, call, takeEvery } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import {
  signUpFailure,
  SignUpPayload,
  signUpSuccess,SignUpSuccessPayload
} from '../auth/authSlice'
import { act } from '@testing-library/react'
import { json } from 'stream/consumers'
 

export function* signUp(action: PayloadAction<SignUpPayload>) {
  try {
    const response:Response= yield fetch ('https://studapi.teachmeskills.by/auth/users/', {
      method: 'POST',
      body: JSON.stringify(action.payload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=uft-8'

      }
    } )
    const data: SignUpSuccessPayload = yield response.json()
    console.log (action.payload);

   
    yield put(signUpSuccess(data))
  } catch (error: any) {
    console.log(error);
    const err ={
      "username":[
        "A user with that username already exists."
      ],
      "email":[
        "user with that Email already exists."
      ]
    }
    yield put(signUpFailure(error.message))
  }
}

export function* signUpSaga() {
  yield takeEvery('auth/signUp', signUp)
}