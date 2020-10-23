import React from "react";
import {
  Button,
  ButtonGroup,
  Grid,
  Typography,
  Divider,
  makeStyles,
} from "@material-ui/core";
import { redirectToAuthentication } from "../../actions/userActions";

const useStyles = makeStyles((theme) => ({
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
  image: {
    width: 255,
    height: "auto",
  },
}));

// need to clean up and check null entries
const DetailedSidebar = (props) => {
  const classes = useStyles();
  const { data, history, dispatch, user } = props;

  const handleProtectedActions = () => {
    if (!user) {
      // beware of concurrency when using history
      // history object may get modified first
      const oldPath = history.location.pathname + history.location.search;
      // set the current location as previous path
      dispatch(redirectToAuthentication(oldPath));
      history.push("/login");
    }
  };

  return (
    <div>
      <Grid container justify="center">
        <img
          src={data.mal_anime_image_path}
          alt=""
          className={classes.image}
        ></img>
      </Grid>

      <Grid container justify="center" className={classes.buttonGroup}>
        <div>
          <ButtonGroup
            orientation="vertical"
            color="primary"
            variant="contained"
          >
            <Button onClick={handleProtectedActions}>Add to My List</Button>
            <Button onClick={handleProtectedActions}>Add to Favorites</Button>
          </ButtonGroup>
        </div>
      </Grid>

      <div className={classes.topicContainer}>
        <Typography variant="body2" className={classes.topics}>
          Alternative Titles
        </Typography>
        <Divider className={classes.divider}></Divider>
        <div>
          <span style={{ fontWeight: 700 }}>English:</span> {data.name_eng}
        </div>
        <div>
          <span style={{ fontWeight: 700 }}>Japanese:</span> {data.name_jpn}
        </div>
      </div>

      <div className={classes.topicContainer}>
        <Typography variant="body2" className={classes.topics}>
          Information
        </Typography>
        <Divider className={classes.divider}></Divider>
        <div>
          <span style={{ fontWeight: 700 }}>Type:</span> {data.anime_type}
        </div>
        <div>
          <span style={{ fontWeight: 700 }}>Episodes:</span> {data.num_episodes}
        </div>
        <div>
          <span style={{ fontWeight: 700 }}>Status:</span> {data.status}
        </div>
        <div>
          <span style={{ fontWeight: 700 }}>Aired:</span> {data.airing_str}
        </div>
        <div>
          <span style={{ fontWeight: 700 }}>Source:</span> {data.source}
        </div>
        <div>
          <span style={{ fontWeight: 700 }}>Duration:</span> {data.duration}
        </div>
      </div>

      <div className={classes.topicContainer}>
        <Typography variant="body2" className={classes.topics}>
          Statistics
        </Typography>
        <Divider className={classes.divider}></Divider>
        <div>
          <span style={{ fontWeight: 700 }}>Score:</span>{" "}
          {data.rating ? data.rating : "N/A"}
        </div>
        <div>
          <span style={{ fontWeight: 700 }}>Rank:</span> #{data.rank}
        </div>
        <div>
          <span style={{ fontWeight: 700 }}>Popularity:</span> #
          {data.popularity}
        </div>
        <div>
          <span style={{ fontWeight: 700 }}>Members:</span>{" "}
          {data.members.toLocaleString()}
        </div>
        <div>
          <span style={{ fontWeight: 700 }}>Favorites:</span>{" "}
          {data.favorites.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default DetailedSidebar;
