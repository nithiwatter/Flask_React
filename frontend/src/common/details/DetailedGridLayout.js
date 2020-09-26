import React from "react";
import {
  Grid,
  ButtonGroup,
  Button,
  Typography,
  Divider,
  Box,
  Paper,
  makeStyles,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {},
  gridLayout: {
    padding: theme.spacing(1),
  },
  titleContainer: {
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  title: {
    fontWeight: 700,
  },
  subTitle: {
    fontWeight: 700,
    color: "#9e9e9e",
  },
  buttonGroup: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  topicContainer: {
    marginBottom: theme.spacing(2),
  },
  scoreContainer: {
    padding: theme.spacing(1),
  },
  scoreBox: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 2,
    padding: "2px",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    color: "white",
    fontSize: "14px",
  },
  topics: {
    fontWeight: 700,
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  scoreDivider: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  scoreSubDivider: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  scoreDetails: {
    fontSize: "18px",
  },
  videoContainer: {
    padding: theme.spacing(2),
  },
}));

const DetailedGridLayout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.titleContainer}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.title}>
            <Skeleton width="40%"></Skeleton>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.subTitle}>
            <Skeleton width="40%"></Skeleton>
          </Typography>
        </Grid>
      </Grid>

      <Divider></Divider>

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
            <div>
              <ButtonGroup
                orientation="vertical"
                color="primary"
                variant="contained"
              >
                <Button>Add to My List</Button>
                <Button>Add to Favorites</Button>
              </ButtonGroup>
            </div>
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

        <Divider orientation="vertical" flexItem></Divider>

        <Grid item xs className={classes.gridLayout}>
          <div>
            <Grid container>
              <Grid item xs={12}>
                <Paper>
                  <Grid container className={classes.scoreContainer}>
                    <Skeleton width="100%"></Skeleton>
                    <Skeleton width="100%"></Skeleton>
                    <Skeleton width="100%"></Skeleton>
                  </Grid>
                </Paper>
              </Grid>

              <Grid
                item
                container
                xs={12}
                justify="space-between"
                className={classes.videoContainer}
              ></Grid>

              <Grid item xs={12} className={classes.topicContainer}>
                <Typography variant="body2" className={classes.topics}>
                  Summary
                </Typography>
                <Divider className={classes.divider}></Divider>
                <Skeleton variant="rect" width="100%" height={118} />
                <Skeleton />
                <Skeleton width="60%" />
              </Grid>

              <Grid item xs={12} className={classes.topicContainer}>
                <Typography variant="body2" className={classes.topics}>
                  Reviews
                </Typography>
                <Divider className={classes.divider}></Divider>
                <Skeleton variant="rect" width="100%" height={118} />
                <Skeleton />
                <Skeleton width="60%" />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default DetailedGridLayout;
