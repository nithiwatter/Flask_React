import React from 'react';
import {
  Grid,
  ButtonGroup,
  Button,
  Typography,
  Divider,
  Box,
  Paper,
  makeStyles,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
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
    color: '#9e9e9e',
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
    padding: '2px',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    color: 'white',
    fontSize: '14px',
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
    fontSize: '18px',
  },
  videoContainer: {
    padding: theme.spacing(2),
  },
}));

const DetailedGridLayout = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.titleContainer}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.title}>
            Kaguya-sama wa Kokurasetai?: Tensai-tachi no Renai Zunousen
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.subTitle}>
            Kaguya-sama: Love is War Season 2
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

        <Divider orientation="vertical" flexItem></Divider>

        <Grid item xs className={classes.gridLayout}>
          <div>
            <Grid container>
              <Grid item xs={12}>
                <Paper>
                  <Grid container className={classes.scoreContainer}>
                    <Grid item xs={2}>
                      <Grid item container xs={12} justify="center">
                        <Typography
                          component="div"
                          className={classes.scoreBox}
                        >
                          SCORE
                        </Typography>
                      </Grid>
                      <Grid item container xs={12} justify="center">
                        <Typography variant="h5">8.82</Typography>
                      </Grid>
                      <Grid item container xs={12} justify="center">
                        <Typography variant="body2">234,467 users</Typography>
                      </Grid>
                    </Grid>
                    <Divider
                      orientation="vertical"
                      flexItem
                      className={classes.scoreDivider}
                    ></Divider>
                    <Grid item container xs>
                      <Grid item xs={4} container>
                        <Typography
                          component="div"
                          className={classes.scoreDetails}
                        >
                          Ranked
                          <Box
                            fontWeight="fontWeightBold"
                            display="inline"
                            m={1}
                          >
                            #22
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={4} container>
                        <Typography
                          component="div"
                          className={classes.scoreDetails}
                        >
                          Popularity
                          <Box
                            fontWeight="fontWeightBold"
                            display="inline"
                            m={1}
                          >
                            #227
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={4} container>
                        <Typography
                          component="div"
                          className={classes.scoreDetails}
                        >
                          Members
                          <Box
                            fontWeight="fontWeightBold"
                            display="inline"
                            m={1}
                          >
                            454,151
                          </Box>
                        </Typography>
                      </Grid>

                      <Grid item container xs={6} alignItems="center">
                        <Typography component="div">Spring 2020</Typography>

                        <Divider
                          orientation="vertical"
                          flexItem
                          light
                          className={classes.scoreSubDivider}
                        ></Divider>

                        <Typography component="div">TV</Typography>
                        <Divider
                          orientation="vertical"
                          flexItem
                          light
                          className={classes.scoreSubDivider}
                        ></Divider>
                        <Typography component="div">A-1 Pictures</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              <Grid
                item
                container
                xs={12}
                justify="space-between"
                className={classes.videoContainer}
              >
                <Skeleton variant="rect" width={200} height={150}></Skeleton>
                <Skeleton variant="rect" width={200} height={150}></Skeleton>
              </Grid>

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
