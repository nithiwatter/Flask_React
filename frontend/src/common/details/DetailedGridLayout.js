import React from "react";
import {
  Grid,
  ButtonGroup,
  Button,
  Typography,
  Divider,
  makeStyles,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  gridLayout: {
    padding: theme.spacing(1),
  },
  buttonGroup: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  topicContainer: {
    marginBottom: theme.spacing(2),
  },
  topics: {
    fontWeight: 700,
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const DetailedGridLayout = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid
          item
          container
          xs={3}
          justify="center"
          className={classes.gridLayout}
        >
          <Skeleton variant="rect" width={255} height={350}></Skeleton>

          <Grid
            item
            container
            xs={12}
            justify="center"
            className={classes.buttonGroup}
          >
            <ButtonGroup
              orientation="vertical"
              color="primary"
              variant="contained"
            >
              <Button>Add to My List</Button>
              <Button>Add to Favorites</Button>
            </ButtonGroup>
          </Grid>

          <Grid item xs={12} className={classes.topicContainer}>
            <Typography variant="body2" className={classes.topics}>
              Alternative Titles
            </Typography>
            <Divider className={classes.divider}></Divider>
            <Skeleton variant="rect" width="100%" height={118} />
            <Skeleton />
            <Skeleton width="60%" />
          </Grid>

          <Grid item xs={12} className={classes.topicContainer}>
            <Typography variant="body2" className={classes.topics}>
              Information
            </Typography>
            <Divider className={classes.divider}></Divider>
            <Skeleton variant="rect" width="100%" height={118} />
            <Skeleton />
            <Skeleton width="60%" />
          </Grid>

          <Grid item xs={12} className={classes.topicContainer}>
            <Typography variant="body2" className={classes.topics}>
              Statistics
            </Typography>
            <Divider className={classes.divider}></Divider>
            <Skeleton variant="rect" width="100%" height={118} />
            <Skeleton />
            <Skeleton width="60%" />
          </Grid>
        </Grid>

        <Divider orientation="vertical" flexItem />

        <Grid item xs={9} className={classes.gridLayout}></Grid>
      </Grid>
    </div>
  );
};

export default DetailedGridLayout;
