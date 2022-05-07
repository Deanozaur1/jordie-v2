import React from "react"
import { Layout } from "./src/components"
import { GlobalStoreProvider } from "./src/store"
import { AnimatePresence, MotionConfig } from "framer-motion"

export const wrapPageElement = ({ element, props }) => {
  const layoutProps = element.type.layoutProps ?? {}
  return (
    <Layout {...props} {...layoutProps}>
      <MotionConfig
        transition={{
          type: "spring",
          duration: 0.2,
          mass: 0.5,
          damping: 60,
          stiffness: 500,
          bounce: 0.1,
        }}
      >
        <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
      </MotionConfig>
    </Layout>
  )
}

export const wrapRootElement = ({ element }) => {
  return <GlobalStoreProvider>{element}</GlobalStoreProvider>
}

export const onInitialClientRender = () => {
  window.___APP_INITIAL_RENDER_COMPLETE = true
}
