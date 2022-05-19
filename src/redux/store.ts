import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
export const store = configureStore({
  reducer: { 
      theme: themeReducer,
  }, /* глобальный объект , котррый хранит инфу  ниже уже указаны типы которые дружат с TS */
});
 export type RootState = ReturnType<typeof store.getState>
 export type AppDispatch= typeof store.dispatch