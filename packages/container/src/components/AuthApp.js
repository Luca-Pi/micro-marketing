import React, { useRef, useEffect } from "react"
import Auth from "auth/App"
import { useHistory } from "react-router-dom"

export default ({ onSignIn }) => {
  const ref = useRef()
  const history = useHistory()

  useEffect(() => {
    const { onParentNavigate } = Auth.mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathName }) => {
        if(nextPathName !== history.location.pathname) {
          history.push(nextPathName)
        }
      },
      onSignIn
    })

    history.listen(onParentNavigate)
  }, [])

  return <div ref={ref} />
}


