import {createReducer, on} from "@ngrx/store";
import {getBanners} from "./banners.actions";

const initialState = {
  banners: [],
  page: null,
  totalPages: null
}

export const bannersReducer = createReducer(
  initialState,
  on(getBanners, (state) => {
    return state
  } )

)
