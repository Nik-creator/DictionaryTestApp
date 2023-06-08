import type {
  AnyAction,
  Dispatch,
  PayloadAction as ReduxPayloadAction,
  Reducer,
  SliceCaseReducers,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import type { ThunkMiddlewareFor } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

// import type { exampleServices } from '@app/services/example';

import type { WordsState } from '@/store/words/types';

type PayloadAction<T> = ReduxPayloadAction<T>;

type SliceReducer<T> = SliceCaseReducers<T>;

type Dependencies = {
  exampleServices: typeof exampleServices;
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

type RequestSendFeedback = {
  phone: string;
  email: string;
  notifyByEmail: boolean;
  msg: string;
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
  Dependencies,
  Middlewares,
  RequestSendFeedback,
  Reducers,
  ThunkMiddlewareOptions,
};
