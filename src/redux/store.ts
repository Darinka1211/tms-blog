import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { themeReducer } from '../features/theme'
import { postsReducer } from '../features/posts'
import { authReducer } from '../features/auth'
import { signUpSaga } from '../features/sagas/singUpSagas'
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    posts: postsReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(sagaMiddleware)
  },
})

sagaMiddleware.run(signUpSaga)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch