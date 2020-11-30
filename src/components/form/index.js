import React, {useState} from "react";
import {  Container, Typography, Divider, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import FormRow from "../formrow/";
import {useStyles, BootstrapButton} from "./styles";

function Form() {
  const classes = useStyles();
  const [postData, setPostData] = useState({ name: '', entitytype: '', country: '', address: '', postcode: '', email: ''});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postData);
}; 

  return (
    <Container maxWidth="xs">  
     <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >    
        <Container>
          <Grid className={classes.mainContainer}>
            <Grid item>              
                <Typography className={classes.heading}>Your Shared Details</Typography>
                <Divider className={classes.divider}/>
                <Grid className={classes.content} >
                  <Typography className={classes.subheading}>For optimal speed of settlement, the following details about you will be shared with parties in the transaction.</Typography>
                </Grid>               
                  <Grid container spacing={0}>
                    <Grid container item xs={12} spacing={0} className={classes.incl}>
                      <Typography><span className={classes.text}>Incl.</span></Typography>
                    </Grid>
                    <Grid container item xs={12} spacing={0}>
                      <FormRow id="Name" uiType="input" contentType="text/string" value={postData.name?postData.name:'Three Amigos'} editable={false} onchange={(val) => setPostData({...postData, name: val})}  />
                    </Grid>
                    <Grid container item xs={12} spacing={0}>
                      <FormRow id="Entity type" uiType="select" options={[{ name: "Individual", value: "individual" }, { name: "Business", value: "business" }]} contentType="text/string" value={postData.entitytype} editable={true} onchange={(val) => setPostData({...postData, entitytype:val})} />
                    </Grid>
                    <Grid container item xs={12} spacing={0}>
                      <FormRow id="Country" uiType="select" options={[{name: "Australia", value: "AU" }, { name: "United States", value: "US" }]} contentType="text/string" value={postData.country? postData.country:'US'} editable={false} onchange={(val) => setPostData({...postData, country:val})} />
                    </Grid>
                    <Grid container item xs={12} spacing={0}>
                      <FormRow id="Address" uiType="textarea" value={postData.address} contentType="text/string" editable={true} onchange={(val) => setPostData({...postData, address:val})} />
                    </Grid>
                    <Grid container item xs={12} spacing={0}>
                      <FormRow id="Postcode" uiType="input" value={postData.postcode} contentType="" editable={true} onchange={(val) => setPostData({...postData, postcode:val})} />
                    </Grid>
                    <Grid container item xs={12} spacing={0}>
                      <FormRow id="Email" uiType="input" value={postData.email} contentType="" editable={true} onchange={(val) => setPostData({...postData, email:val})} />
                    </Grid>        
                  </Grid>             
            </Grid>
          </Grid>
          </Container>
          <Container>
          <Grid item className={classes.submit}>   
          <BootstrapButton variant="contained" color="primary" type="submit">
              Submit
          </BootstrapButton>        
            </Grid>
        </Container>
       </form>
    </Container>


   
  );
}

export default Form;
