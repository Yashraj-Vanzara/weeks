import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import movieReducer from './movieSlice'
import gptReducer from './gptSlice'

export const store = configureStore({
  reducer: {
    user:userReducer,
    movie:movieReducer,
    gpt:gptReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch