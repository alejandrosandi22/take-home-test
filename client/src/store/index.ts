import { configureStore } from '@reduxjs/toolkit';
import branchReducer from './reducers/branchReducer';

export const store = configureStore({
  reducer: {
    branch: branchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
