import { Container, Typography, Divider, Grow, Grid} from "@material-ui/core";
import FormRow from './components/FormRow';

import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer}>
            <Grid item>              
                <Typography className={classes.heading} variant="body1" >Your Shared Details</Typography>
                <Divider className={classes.divider}/>
                <Grid className={classes.content} >
                  <Typography className={classes.subheading} variant="caption" >For optimal speed of settlement, the following details about you will be shared with parties in the transaction.</Typography>
                </Grid>
                  <Grid container spacing={1} >
                    <Grid container item xs={12} spacing={3}>
                      <FormRow />
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                      <FormRow />
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                      <FormRow />
                    </Grid>
                </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
