import { Reducer } from "react"
import { AppStateModel, AppTypes } from "./index"

export const initialState: AppStateModel = {
  menuOpen: false,
}

export const appReducer: Reducer<AppStateModel, any> = (state, action) => {
  switch (action.type) {
    case AppTypes.TOGGLE_MENU: {
      return {
        ...state,
        menuOpen: action.payload ?? !state.menuOpen,
      }
    }

    default:
      return state
  }
}
