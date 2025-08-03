import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/theme/themeSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';


export const store = configureStore({
  reducer: {
    themeState: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type ReduxStore = {
  getState: () => RootState;
  dispatch: AppDispatch;
};

