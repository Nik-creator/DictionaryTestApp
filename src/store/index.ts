import { AnyAction, combineReducers, configureStore, Middleware, Dispatch } from '@reduxjs/toolkit';
import type { Dependencies, Middlewares, Reducers, RootState, ThunkMiddlewareOptions } from './types';
import { wordsReducer } from './words/slice';
import { wordsServices } from '@/services/words';
import { localStorageMiddleware } from './middlewares/setFavoritesToLocalstorage';

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
  }).concat([localStorageMiddleware] as Middleware<
    ThunkMiddlewareOptions,
    RootState,
    Dispatch<AnyAction>
  >[])
});

export { store };
