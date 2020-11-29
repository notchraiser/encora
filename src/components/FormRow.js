import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";

function FormRow() {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={4}>
        <Typography className={classes.label} variant="body2" >Name</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography  variant="body2">Three Amigos</Typography>
      </Grid>
      <Grid item xs={2}>
        
      </Grid>
    </>
  );
}

export default FormRow;
