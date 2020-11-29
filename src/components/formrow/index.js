import React, { useState } from "react";
import { Grid, Input, Select, Typography } from "@material-ui/core";
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import useStyles from "./styles";

function FormRow({id, uiType, options, contentType, value, editable}) {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  
  const handleChange = (event) => {    
    event.target.parentElement.checked = !event.target.parentElement.checked;
    setChecked(event.target.parentElement.checked);
    console.log(event.target.parentElement.checked);
  };

  return (
    <Grid container justifyContent="space-between">
      <Grid item xs={4} className={classes.position}>
        <Typography className={classes.label}><span className={classes.text}>{id}:</span></Typography>
      </Grid>
      
      { 
        uiType === "input" &&  <Grid item xs={7} className={classes.position}> { editable===true ? <Input type="text" className={classes.text} color="primary" value={value} fullWidth /> : <Typography><span className={classes.span}>{value}</span></Typography>}</Grid>
                            
      }
      {
        uiType === "select" && <Grid item xs={7} className={classes.position}> { editable===true ? <Select className={classes.text} variant="standard" autoWidth defaultValue={value}>{options.map(op => <option key={op.name} value={op.value}>{op.name}</option>)}</Select> : <Typography><span className={classes.span}>{value}</span></Typography>}</Grid>
                              
      }
      {/* {
        uiType === "textarea" && editable ? 
                                        : <Typography><span className={classes.span}>{value}</span></Typography>
      } */}
      
      <Grid item xs={1} className={classes.checkbox}>
        <Typography><span className={classes.span} checked={checked} onClick={handleChange}>          
         { checked ? (<CheckBoxOutlinedIcon style={{ fontSize: "small" }}  /> ): 
                            (<CheckBoxOutlineBlankOutlinedIcon style={{ fontSize: "small" }} />)}
                  
          </span></Typography>
      </Grid>
    </Grid>
  );
}

export default FormRow;
