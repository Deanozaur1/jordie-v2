import React from "react"
import { appReducer, initialState } from "./app.reducer"

export const GlobalState = React.createContext(initialState)
export const GlobalDispatch = React.createContext(null)

const GlobalStoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(appReducer, initialState)
  return (
    <GlobalState.Provider value={state}>
      <GlobalDispatch.Provider value={dispatch}>
        {children}
      </GlobalDispatch.Provider>
    </GlobalState.Provider>
  )
}

export default GlobalStoreProvider
