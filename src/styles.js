import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
      margin: "10px 5px",
      padding: "0 15px",
      backgroundColor: "#f2f2f2",
  },
  heading: {
    textTransform: "uppercase",    
    padding: "10px 0",
  },
  divider: {
    backgroundColor: "#797979",
  },
  content:{
    textAlign: "justify",
    margin: "10px 0",
  },
  subheading: {
    fontStyle: "italic",
    lineHeight: "0.2em",
  },
  root: {
    flexGrow: 1,
  },
}));
