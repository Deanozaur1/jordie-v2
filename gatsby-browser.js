import React from "react"
import { Layout } from "./src/components"
import { GlobalStoreProvider } from "./src/store"

export const wrapPageElement = ({ element, props }) => {
  const layoutProps = element.type.layoutProps ?? {}
  return (
    <Layout {...props} {...layoutProps}>
      {element}
    </Layout>
  )
}

export const wrapRootElement = ({ element }) => {
  return <GlobalStoreProvider>{element}</GlobalStoreProvider>
}

export const onInitialClientRender = () => {
  window.___APP_INITIAL_RENDER_COMPLETE = true
}
