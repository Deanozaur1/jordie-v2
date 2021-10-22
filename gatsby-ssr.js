import React from 'react'
import { GlobalStoreProvider } from './src/store'

export const wrapRootElement = ({ element }) => {
  return <GlobalStoreProvider>{element}</GlobalStoreProvider>
}
