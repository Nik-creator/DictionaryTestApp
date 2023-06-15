import { Middleware, Store, createListenerMiddleware, isAnyOf, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { addFavorite, deleteFavorite } from "../words/slice";
import { SlicesName } from "../types";
import { localStorageService } from "@/services/LocalStorage";
import { PayloadFavorite } from "../words/types";

const localStorageMiddleware =
  () => (next: Dispatch) => (action: PayloadAction) => {

    const { type } = action

    if (type === `${SlicesName.WORDS}/addFavorite`) {
      const { payload } = action as unknown as PayloadFavorite

      localStorageService.setFavoriteId(payload)
    }

    if (type === `${SlicesName.WORDS}/deleteFavorite`) {
      const { payload } = action as unknown as PayloadFavorite

      localStorageService.deleteFavoriteId(payload)
    }

    return next(action)
  }

export { localStorageMiddleware }