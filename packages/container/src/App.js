import React from "react"
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom"
import { MarketingApp } from "./components/MarketingApp"
import Header from "./components/Header"
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles"

const generateClassName = createGenerateClassName({
  productionPrefix: "co"
})

export default () => (
  <StylesProvider generateClassName={generateClassName}>
    <BrowserRouter>
      <Header />
      <MarketingApp />
    </BrowserRouter>
  </StylesProvider>
)
