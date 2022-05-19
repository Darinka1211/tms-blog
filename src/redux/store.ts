import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import {postsReducer} from "../features/posts"

export const store = configureStore({
  reducer: { 
      theme: themeReducer,
      posts: postsReducer,
  }, 
});
 export type RootState = ReturnType<typeof store.getState>
 export type AppDispatch= typeof store.dispatch