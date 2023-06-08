import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import type { Middlewares, Reducers, RootState } from './types';

const reducers: Reducers = {
  words: {},
};

const rootReducer = combineReducers(reducers);

const store = configureStore<RootState, AnyAction, Middlewares>({
  reducer: rootReducer,
  devTools: true,
});

export { store };
