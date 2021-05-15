import React from "react"
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom"
import { MarketingApp } from "./components/MarketingApp"
import Header from "./components/Header"


export default () => (
  <BrowserRouter>
      <Header />
      <MarketingApp />
  </BrowserRouter>
)
