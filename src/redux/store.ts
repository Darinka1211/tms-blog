import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {}, /* глобальный объект , котррый хранит инфу  ниже уже указаны типы которые дружат с TS */
});
 export type RootState = ReturnType<typeof store.getState>
 export type AppDispatch= typeof store.dispatch