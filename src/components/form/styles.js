import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    margin: "10px 5px",
    padding: "0 15px",
    backgroundColor: "#f2f2f2",
    borderRadius: "4px",
  },
  heading: {
    textTransform: "uppercase",
    padding: "10px 0",
    fontSize: "small",
  },
  divider: {
    backgroundColor: "#797979",
  },
  content: {
    textAlign: "justify",
    marginTop: "10px",
  },
  subheading: {
    fontStyle: "italic",
    fontSize: "xx-small",
    lineHeight: "1.2em",
  },

  root: {
    flexGrow: 1,
    padding: "0",
    margin: "0",
    boxSizing: "border-box",
    paddingBottom: "10px",    
  },
  incl: {
    justifyContent: "flex-end",
    margin: "0",
    padding: "0",
  },
  text: {
    fontSize: "x-small",
    display: "inherit",
  },
  submit: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "5px",
  },
}));

const BootstrapButton = withStyles({  
  root: {
    boxShadow: 'none',
    textTransform: 'uppercase',
    fontSize: 10,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1,
    backgroundColor: '#009cd2',
    borderColor: '#009cd2',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#006d93',
      borderColor: '#006d93',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#006d93',
      borderColor: '#006d93',
    },
    '&:focus': {
      boxShadow: 'none',
    },
  },
})(Button);

export {useStyles, BootstrapButton}