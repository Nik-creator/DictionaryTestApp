import type {
  AnyAction,
  Dispatch,
  PayloadAction as ReduxPayloadAction,
  Reducer,
  SliceCaseReducers,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import type { ThunkMiddlewareFor } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import type { WordsState } from '@/store/words/types';
import { wordsServices } from '@/services/words';

type PayloadAction<T> = ReduxPayloadAction<T>;

type SliceReducer<T> = SliceCaseReducers<T>;

type Dependencies = {
  wordsServices: typeof wordsServices;
};

type RootState = {
  words: WordsState;
};

type AppDispatch = Dispatch & ThunkDispatch<RootState, Dependencies, AnyAction>;

type ThunkAsyncConfig = {
  extra: Dependencies;
  state: RootState;
  dispatch: AppDispatch;
};

type ThunkMiddlewareOptions = {
  thunk: {
    extraArgument: Dependencies;
  };
};

type Middlewares = ThunkMiddlewareFor<RootState, ThunkMiddlewareOptions>[];

type Reducers = { [K in keyof RootState]: Reducer<RootState[K], AnyAction> };

enum SlicesName {
  WORDS = 'WORDS',
}

export { SlicesName };
export type {
  ThunkAsyncConfig,
  SliceReducer,
  PayloadAction,
  RootState,
  AppDispatch,
  Dependencies,
  Middlewares,
  Reducers,
  ThunkMiddlewareOptions,
};
