import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import type { Dependencies, Middlewares, Reducers, RootState } from './types';
import { wordsReducer } from './words/slice';
import { wordsServices } from '@/services/words';

const reducers: Reducers = {
  words: wordsReducer,
};

const dependencies: Dependencies = {
  wordsServices
}

const rootReducer = combineReducers(reducers);

const store = configureStore<RootState, AnyAction, Middlewares>({
  reducer: rootReducer,
  devTools: true,
  middleware: (defaultMiddleware) => defaultMiddleware({
    serializableCheck: false,
    thunk: {
      extraArgument: dependencies,
    },
  })
});

export { store };
