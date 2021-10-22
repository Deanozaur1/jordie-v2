import { AppTypes } from "./index"

const toggleMenu = (payload?: boolean) => ({
  type: AppTypes.TOGGLE_MENU,
  payload,
})

export default {
  toggleMenu,
}
