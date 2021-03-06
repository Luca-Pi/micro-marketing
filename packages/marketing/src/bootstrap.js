import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { createMemoryHistory, createBrowserHistory } from "history"

const mount = (element, { onNavigate, defaultHistory, initialPath }) => {
  const history = defaultHistory || createMemoryHistory({ initialEntries: [initialPath] })

  if (onNavigate) {
    history.listen(onNavigate)
  }

  ReactDOM.render(
    <App  history={history} />,
    element
  )

  return {
    onParentNavigate({ pathname: nextPathname }) {
      if(history.location.pathname !== nextPathname) {
        history.push(nextPathname)
      }
    }
  }
}

if (process.env.NODE_ENV === "development") {
  const devRootElement = document.querySelector("#marketing-dev-root")

  if(devRootElement) {
    mount(devRootElement, { defaultHistory: createBrowserHistory() })
  }
}

export default {
  mount
}
