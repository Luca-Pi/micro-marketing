import React, { useRef, useEffect } from "react"
import Dashboard from "dashboard/App"

export default () => {
  const ref = useRef()

  useEffect(() => {
    Dashboard.mount(ref.current)
  }, [])

  return <div ref={ref} />
}


