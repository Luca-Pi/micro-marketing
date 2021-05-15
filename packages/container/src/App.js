import React, { lazy, Suspense, useState } from "react"
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./components/Header"
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles"
import { ProgressBar } from "./components/ProgressBar"

const MarketingLazyApp = lazy(() => import("./components/MarketingApp"))
const AuthLazyApp = lazy(() => import("./components/AuthApp"))

const generateClassName = createGenerateClassName({
  productionPrefix: "co"
})

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
        <Suspense fallback={<ProgressBar/>}>
          <Switch>
            <Route path="/auth">
              <AuthLazyApp  onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/" component={MarketingLazyApp}/>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </StylesProvider>
  )
}
