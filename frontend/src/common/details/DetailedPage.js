import React from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player/lazy';
import {
  Grid,
  Typography,
  Divider,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  Link,
  makeStyles,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import HistoryIcon from '@material-ui/icons/History';
import DetailedSideBar from './DetailedSideBar';
import DetailedScoreBox from './DetailedScoreBox';
import ReviewContainer from '../reviews/ReviewContainer';

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
  videoContainer: {
    padding: theme.spacing(2),
  },
  backButton: {
    marginLeft: theme.spacing(1),
  },
  reviewTitleContainer: {
    display: 'flex',
  },
  formTitle: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const DetailedPage = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { data, user, history, dispatch } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Grid container className={classes.titleContainer}>
        <Grid item xs={12}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" className={classes.title}>
              {data.name}
            </Typography>
            <IconButton
              size="small"
              className={classes.backButton}
              onClick={() => history.goBack()}
            >
              <HistoryIcon></HistoryIcon>
            </IconButton>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.subTitle}>
            {data.name_eng}
          </Typography>
        </Grid>
      </Grid>

      <Divider></Divider>

      <Grid container>
        <Grid item xs={3} className={classes.gridLayout}>
          <DetailedSideBar
            data={data}
            history={history}
            user={user}
            dispatch={dispatch}
          ></DetailedSideBar>
        </Grid>

        <Divider orientation="vertical" flexItem></Divider>

        <Grid item xs className={classes.gridLayout}>
          <div>
            <Grid container>
              <Grid item xs={12}>
                <DetailedScoreBox data={data}></DetailedScoreBox>
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
                <div className={classes.reviewTitleContainer}>
                  <Typography variant="body2" className={classes.topics}>
                    Reviews
                  </Typography>
                  <Typography
                    variant="body2"
                    className={classes.topics}
                    style={{ marginLeft: 'auto' }}
                  >
                    <Link onClick={handleClickOpen}>Write a review</Link>
                  </Typography>
                </div>

                <Divider className={classes.divider}></Divider>
                <Skeleton variant="rect" width="100%" height={118} />
                <Skeleton />
                <Skeleton width="60%" />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle classes={{ root: classes.formTitle }}>
          <Typography variant="h6" style={{ fontWeight: 700, color: 'white' }}>
            Write Your Review
          </Typography>
        </DialogTitle>
        <Divider></Divider>
        <DialogContent>
          <ReviewContainer></ReviewContainer>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userData.user,
  };
};

export default connect(mapStateToProps)(DetailedPage);
