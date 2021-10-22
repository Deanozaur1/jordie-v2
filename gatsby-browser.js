import React from "react"
import { GlobalStoreProvider } from "./src/store"

export const wrapRootElement = ({ element }) => {
  return <GlobalStoreProvider>{element}</GlobalStoreProvider>
}

export const onInitialClientRender = () => {
  window.___APP_INITIAL_RENDER_COMPLETE = true
}
