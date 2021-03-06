import React, { useRef, useEffect } from "react"
import Marketing from "marketing/App"
import { useHistory } from "react-router-dom"

export default () => {
  const ref = useRef()
  const history = useHistory()

  useEffect(() => {
    const { onParentNavigate } = Marketing.mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathName }) => {
        if(nextPathName !== history.location.pathname) {
          history.push(nextPathName)
        }
      }
    })

    history.listen(onParentNavigate)
  }, [])

  return <div ref={ref} />
}


