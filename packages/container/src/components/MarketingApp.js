import React, { useRef, useEffect } from "react"
import Marketing from "marketing/App"

export const MarketingApp = () => {
  const ref = useRef()

  useEffect(() => {
    Marketing.mount(ref.current)
  }, [])

  return <div ref={ref} />
}


