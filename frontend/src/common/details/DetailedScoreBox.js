import React from 'react';
import {
  Box,
  Paper,
  Grid,
  Typography,
  Divider,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
}));

const DetailedScoreBox = (props) => {
  const classes = useStyles();
  const { data } = props;
  return (
    <Paper>
      <Grid container className={classes.scoreContainer}>
        <Grid item xs={2}>
          <Grid item container xs={12} justify="center">
            <Typography component="div" className={classes.scoreBox}>
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
            <Typography component="div" className={classes.scoreDetails}>
              Ranked
              <Box fontWeight="fontWeightBold" display="inline" m={1}>
                #{data.rank}
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={4} container>
            <Typography component="div" className={classes.scoreDetails}>
              Popularity
              <Box fontWeight="fontWeightBold" display="inline" m={1}>
                #{data.popularity}
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={4} container>
            <Typography component="div" className={classes.scoreDetails}>
              Members
              <Box fontWeight="fontWeightBold" display="inline" m={1}>
                {data.members.toLocaleString()}
              </Box>
            </Typography>
          </Grid>

          <Grid item container xs={12} alignItems="center">
            <Typography component="div">{data.airing_str}</Typography>

            <Divider
              orientation="vertical"
              flexItem
              light
              className={classes.scoreSubDivider}
            ></Divider>

            <Typography component="div">{data.anime_type}</Typography>
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
  );
};

export default DetailedScoreBox;
