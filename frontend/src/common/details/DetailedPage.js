import React from 'react';
import ReactPlayer from 'react-player/lazy';
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
  image: {
    width: 255,
    height: 'auto',
  },
}));

const DetailedPage = (props) => {
  const classes = useStyles();
  const { data } = props;

  return (
    <div>
      <Grid container className={classes.titleContainer}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.title}>
            {data.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.subTitle}>
            {data.name_eng}
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
          <div>
            <img
              src={data.mal_anime_image_path}
              alt=""
              className={classes.image}
            ></img>

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
              <div>
                <span style={{ fontWeight: 700 }}>English:</span>{' '}
                {data.name_eng}
              </div>
              <div>
                <span style={{ fontWeight: 700 }}>Japanese:</span>{' '}
                {data.name_jpn}
              </div>
            </Grid>

            <Grid item xs={12} className={classes.topicContainer}>
              <Typography variant="body2" className={classes.topics}>
                Information
              </Typography>
              <Divider className={classes.divider}></Divider>
              <div>
                <span style={{ fontWeight: 700 }}>Type:</span> {data.anime_type}
              </div>
              <div>
                <span style={{ fontWeight: 700 }}>Episodes:</span>{' '}
                {data.num_episodes}
              </div>
              <div>
                <span style={{ fontWeight: 700 }}>Status:</span> {data.status}
              </div>
              <div>
                <span style={{ fontWeight: 700 }}>Aired:</span>{' '}
                {data.airing_str}
              </div>
              <div>
                <span style={{ fontWeight: 700 }}>Source:</span> {data.source}
              </div>
              <div>
                <span style={{ fontWeight: 700 }}>Duration:</span>{' '}
                {data.duration}
              </div>
            </Grid>

            <Grid item xs={12} className={classes.topicContainer}>
              <Typography variant="body2" className={classes.topics}>
                Statistics
              </Typography>
              <Divider className={classes.divider}></Divider>
              <div>
                <span style={{ fontWeight: 700 }}>Score:</span> {data.rating}
              </div>
              <div>
                <span style={{ fontWeight: 700 }}>Rank:</span> #{data.rank}
              </div>
              <div>
                <span style={{ fontWeight: 700 }}>Popularity:</span> #
                {data.popularity}
              </div>
              <div>
                <span style={{ fontWeight: 700 }}>Members:</span>{' '}
                {data.members.toLocaleString()}
              </div>
              <div>
                <span style={{ fontWeight: 700 }}>Favorites:</span>{' '}
                {data.favorites.toLocaleString()}
              </div>
            </Grid>
          </div>
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
                        <Typography variant="h5" style={{ fontWeight: 700 }}>
                          {data.rating}
                        </Typography>
                      </Grid>
                      <Grid item container xs={12} justify="center">
                        <Typography variant="body2">
                          {data.scored_by.toLocaleString()} users
                        </Typography>
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
                            #{data.rank}
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
                            #{data.popularity}
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
                            {data.members.toLocaleString()}
                          </Box>
                        </Typography>
                      </Grid>

                      <Grid item container xs={12} alignItems="center">
                        <Typography component="div">
                          {data.airing_str}
                        </Typography>

                        <Divider
                          orientation="vertical"
                          flexItem
                          light
                          className={classes.scoreSubDivider}
                        ></Divider>

                        <Typography component="div">
                          {data.anime_type}
                        </Typography>
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
                justify="center"
                className={classes.videoContainer}
              >
                {data.trailer_url ? (
                  <ReactPlayer url={data.trailer_url} controls></ReactPlayer>
                ) : null}
              </Grid>

              <Grid item xs={12} className={classes.topicContainer}>
                <Typography variant="body2" className={classes.topics}>
                  Summary
                </Typography>
                <Divider className={classes.divider}></Divider>
                <div>{data.synopsis}</div>
              </Grid>

              <Grid item xs={12} className={classes.topicContainer}>
                <Typography variant="body2" className={classes.topics}>
                  Background
                </Typography>
                <Divider className={classes.divider}></Divider>
                <div>
                  {data.background
                    ? data.background
                    : 'No background information has been added to this title. Help improve our database by adding background information here.'}
                </div>
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

export default DetailedPage;
