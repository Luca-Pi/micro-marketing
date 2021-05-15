import { createApp } from "vue"
import Dashboard from "./components/Dashboard"

const mount = (element) => {
  const app = createApp(Dashboard)
  app.mount(element)
}

if (process.env.NODE_ENV === "development") {
  const devRootElement = document.querySelector("#dashboard-dev-root")

  if (devRootElement) {
    mount(devRootElement)
  }
}

export default {
  mount
}
