import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import useStyles from "./styles";

function FormRow({id, uiType, options, contentType, value, editable, onchange}) {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [currentvalue, setCurrentValue] = useState("");
  
  const handleChange = (e) => {    
    const val = e.target.value;
    setCurrentValue(val);
    onchange(val)
  }

  const handleCheckboxClick = (event) => {    
    event.target.parentElement.checked = !event.target.parentElement.checked;
    setChecked(event.target.parentElement.checked);
  };

  return (
    <Grid container>
      <Grid item xs={4} className={classes.position}>
        <Typography className={classes.label}><span className={classes.text}>{id}:</span></Typography>  
      </Grid>
      
      { 
        uiType === "input" &&  <Grid item xs={7} className={classes.position}> { editable===true ? <input type="text" className={classes.text} color="primary" value={currentvalue} onChange={(e) => handleChange(e)} /> : <Typography><span className={classes.span}>{value}</span></Typography>}</Grid>
                            
      }
      {
        uiType === "select" && <Grid item xs={7} className={classes.position}> { editable===true ? <select className={classes.text} variant="standard" value={currentvalue} onChange={(e) => handleChange(e)}>{options.map(op => <option key={op.name} value={op.value}>{op.name}</option>)}</select> : <Typography><span className={classes.span}>{value}</span></Typography>}</Grid>
                              
      }
      {
        uiType === "textarea" && <Grid item xs={7} className={classes.position}> { editable===true ? <textarea className={classes.text} rows="4" value={currentvalue} onChange={(e) => handleChange(e)}></textarea>
                                        : <Typography><span className={classes.span}>{value}</span></Typography> } </Grid>
      } 
      
      <Grid item xs={1} className={classes.checkbox}>
        <Typography><span className={classes.span} checked={checked} onClick={handleCheckboxClick}>          
         { checked ? (<CheckBoxOutlinedIcon style={{ fontSize: "small" }}  /> ): 
                            (<CheckBoxOutlineBlankOutlinedIcon style={{ fontSize: "small" }} />)}
                  
          </span></Typography>
      </Grid>
    </Grid>
  );
}

export default FormRow;
