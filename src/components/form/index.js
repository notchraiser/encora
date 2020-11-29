import React from "react";
import {  Container, Typography, Divider, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import FormRow from "../formrow/";
import {useStyles, BootstrapButton} from "./styles";

function Form() {
  const classes = useStyles();
 

  return (
    <Container maxWidth="xs">      
        <Container>
          <Grid className={classes.mainContainer}>
            <Grid item>              
                <Typography className={classes.heading}>Your Shared Details</Typography>
                <Divider className={classes.divider}/>
                <Grid className={classes.content} >
                  <Typography className={classes.subheading}>For optimal speed of settlement, the following details about you will be shared with parties in the transaction.</Typography>
                </Grid>
                <form className={classes.root} noValidate autoComplete="off">
                  <Grid container spacing={0}>
                    <Grid container item xs={12} spacing={0} className={classes.incl}>
                      <Typography><span className={classes.text}>Incl.</span></Typography>
                    </Grid>
                    <Grid container item xs={12} spacing={0}>
                      <FormRow id="Name" uiType="input" contentType="text/string" value="Three Amigos" editable={false}  />
                    </Grid>
                    <Grid container item xs={12} spacing={0}>
                      <FormRow id="Entity type" uiType="select" options={[{ name: "Individual", value: "individual" }, { name: "Business", value: "business" }]} contentType="text/string" value="business" editable={true} />
                    </Grid>
                    <Grid container item xs={12} spacing={0}>
                      <FormRow id="Country" uiType="select" options={[{name: "Australia", value: "AU" }, { name: "United States", value: "US" }]} contentType="text/string" value="US" editable={false} />
                    </Grid>
                    <Grid container item xs={12} spacing={0}>
                      <FormRow />
                    </Grid>
                    <Grid container item xs={12} spacing={0}>
                      <FormRow />
                    </Grid>
                    <Grid container item xs={12} spacing={0}>
                      <FormRow />
                    </Grid>        
                  </Grid>
                </form>                
            </Grid>
          </Grid>
          </Container>
          <Container>
          <Grid item className={classes.submit}>   
          <BootstrapButton variant="contained" color="primary" disableRipple>
              Submit
          </BootstrapButton>        
            </Grid>
        </Container>
    </Container>


   
  );
}

export default Form;
