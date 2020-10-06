import React from "react";
import { format } from "date-fns";
import { NavLink } from "react-router-dom";
import { Typography, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  image: {
    display: "block",
    height: "auto",
    width: "100%",
  },
  imageContainer: {
    position: "aobsolute",
    height: 40,
    width: 60,
    overflow: "hidden",
  },
  mainContainer: {
    padding: theme.spacing(1),
    borderRadius: 4,
    "&:hover": {
      backgroundColor: "#e8eaf6",
    },
  },
  textContainer: {
    marginLeft: theme.spacing(2),
  },
  largeImage: {
    display: "block",
    height: "auto",
    width: 60,
  },
  largeTextContainer: {
    marginLeft: theme.spacing(2),
  },
  title: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    textDecoration: "none",
  },
}));

function parseDate(dateObj) {
  try {
    return format(new Date(dateObj), "yyyy");
  } catch (err) {
    return "No information";
  }
}

const LiveSearchDetail = (props) => {
  const classes = useStyles();
  const { result } = props;
  const [expand, setExpand] = React.useState(false);

  const handleExpand = () => {
    if (!expand) {
      setExpand(true);
    }
  };

  const handleContract = () => {
    if (expand) {
      setExpand(false);
    }
  };

  return (
    <NavLink
      to={`/anime/${result.anime_id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        className={classes.mainContainer}
        onMouseEnter={handleExpand}
        onMouseLeave={handleContract}
      >
        {!expand && (
          <Grid container alignContent="center">
            <div className={classes.imageContainer}>
              <img
                src={result.mal_anime_image_path}
                alt=""
                className={classes.image}
              ></img>
            </div>

            <div className={classes.textContainer}>
              <Typography
                variant="body2"
                style={{ fontWeight: 700 }}
                className={classes.title}
              >
                {result.name}
              </Typography>
              <Typography variant="body2">
                {`(${result.anime_type}, ${parseDate(result.airing_start)})`}
              </Typography>
            </div>
          </Grid>
        )}
        {expand && (
          <Grid container alignContent="center">
            <div>
              <img
                src={result.mal_anime_image_path}
                alt=""
                className={classes.largeImage}
              ></img>
            </div>

            <div className={classes.largeTextContainer}>
              <Typography
                variant="body2"
                style={{ fontWeight: 700 }}
                className={classes.title}
              >
                {result.name}
              </Typography>
              <Typography variant="body2">Type: {result.anime_type}</Typography>
              <Typography variant="body2">
                Aired: {result.airing_str}
              </Typography>
              <Typography variant="body2">Score: {result.rating}</Typography>
              <Typography variant="body2">Status: {result.status}</Typography>
            </div>
          </Grid>
        )}
      </div>
    </NavLink>
  );
};

export default LiveSearchDetail;
