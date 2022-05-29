import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import { postsReducer } from "../features/posts";
import { authReducer } from "../features/auth";
import { singUpSaga } from "../features/sages/singUpSages";
import createSagaMiddleware from "@redux-saga/core";
import { getDefaultLibFileName } from "typescript";
import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    posts: postsReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(sagaMiddleware);
  },
});
sagaMiddleware.run(singUpSaga);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
