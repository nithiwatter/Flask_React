import React from "react";
import { Link as NavLink } from "react-router-dom";
import { Grid, Typography, Divider, makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
  },
  textContainer: {
    marginLeft: theme.spacing(2),
  },
  userName: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    textDecoration: "none",
    "&:active": {
      color: theme.palette.primary.main,
    },
    "&:visited": {
      color: theme.palette.primary.main,
    },
    "&:hover": {
      textDecoration: "underline",
    },
  },
  userReview: {
    marginLeft: theme.spacing(1),
    color: theme.palette.primary.main,
    fontWeight: 700,
    textDecoration: "none",
    "&:active": {
      color: theme.palette.primary.main,
    },
    "&:visited": {
      color: theme.palette.primary.main,
    },
    "&:hover": {
      textDecoration: "underline",
    },
  },
  details: {
    marginLeft: "auto",
    textAlign: "right",
  },
  greyText: {
    color: "#888",
  },
  review: {
    fontSize: 12,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
  readMore: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    textDecoration: "none",
    "&:active": {
      color: theme.palette.primary.main,
    },
    "&:visited": {
      color: theme.palette.primary.main,
    },
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const ReviewSmallDetail = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid item container alignContent="center">
        <Skeleton variant="rect" width={50} height={65}></Skeleton>
        <div className={classes.textContainer}>
          <Typography
            variant="body2"
            component={NavLink}
            to="#"
            className={classes.userName}
          >
            User 1
            </Typography>
          <Typography
            variant="body2"
            component={NavLink}
            to="#"
            className={classes.userReview}
            style={{ fontSize: 12 }}
          >
            (All reviews)
            </Typography>
          <Typography variant="body2" className={classes.greyText}>
            <span style={{ fontWeight: 700 }}>3,434</span> people found this
              review helpful
            </Typography>
        </div>
        <div className={classes.details}>
          <Typography variant="body2">Jan, 25 2010</Typography>
          <Typography variant="body2" className={classes.greyText}>
            64 of 64 episodes seen
            </Typography>
          <Typography variant="body2">Overall rating: 10</Typography>
        </div>
      </Grid>
      <Divider></Divider>
      <div className={classes.review}>
        First of all, I have seen the original FMA and although it was very
        popular and original, the pacing and conclusion did not sit too well
        with me. Brotherhood is meant to be a remake of the original, this time
        sticking to the manga all the way through, but there were people who
        thought it would spoil the franchise. That myth should be dispelled, as
        there's only one word to describe this series - EPIC. I admit that as
        I've seen the original and read the manga, the pacing of Brotherhood
        seems to start off being VERY fast (I finally got used to the pacing
        after{" "}
        <NavLink to="#" className={classes.readMore}>
          read more
        </NavLink>
      </div>
      <Divider></Divider>
    </div>
  );
};

export default ReviewSmallDetail;
