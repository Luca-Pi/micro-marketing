import React, { lazy, Suspense, useState, useEffect } from "react"
import { Router, Route, Switch, Redirect } from "react-router-dom"
import Header from "./components/Header"
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles"
import { createBrowserHistory } from "history"

import { ProgressBar } from "./components/ProgressBar"

const MarketingLazyApp = lazy(() => import("./components/MarketingApp"))
const AuthLazyApp = lazy(() => import("./components/AuthApp"))
const DashboardLazyApp = lazy(() => import("./components/DashboardApp"))

const generateClassName = createGenerateClassName({
  productionPrefix: "co"
})

const history = createBrowserHistory()

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard")
    }
  }, [isSignedIn])

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
        <Suspense fallback={<ProgressBar/>}>
          <Switch>
            <Route path="/auth">
              <AuthLazyApp  onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/dashboard">
              {!isSignedIn && <Redirect to="/" />}
              <DashboardLazyApp />
            </Route>
            <Route path="/" component={MarketingLazyApp}/>
          </Switch>
        </Suspense>
      </Router>
    </StylesProvider>
  )
}
