import React from "react"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { LinearProgress } from "@material-ui/core"

const useStyles = makeStyles((theme) => {
  return createStyles({
    bar: {
      width: '100%',
      "& > * + *": {
        marginTop: theme.spacing(2)
      }
    }
  })
})

export const ProgressBar = () => {
  const classes = useStyles()

  return (
    <div className={classes.bar}>
      <LinearProgress />
    </div>
  )
}
