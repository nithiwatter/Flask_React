import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
  makeStyles,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  headerCell: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
  },
  imageContainer: {
    flexShrink: 0,
  },
  textContainer: {
    marginLeft: theme.spacing(2),
  },
  title: {
    fontWeight: 700,
  },
  readMore: {
    color: theme.palette.primary.main,
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
  loading: {
    marginTop: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
  },
  total: {
    marginBottom: theme.spacing(2),
  },
  image: {
    width: 54,
    height: "auto",
  },
}));

const SearchDisplayResult = (props) => {
  const classes = useStyles();
  const { searchPending, searchResults, total } = props;

  if (searchPending) {
    return (
      <div className={classes.loading}>
        <CircularProgress></CircularProgress>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Typography
        className={classes.total}
        variant="h6"
      >{`${total} search results`}</Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="center" classes={{ head: classes.headerCell }}>
                Title
              </TableCell>
              <TableCell align="right" classes={{ head: classes.headerCell }}>
                Type
              </TableCell>
              <TableCell align="right" classes={{ head: classes.headerCell }}>
                Eps.
              </TableCell>
              <TableCell align="right" classes={{ head: classes.headerCell }}>
                Score
              </TableCell>
              <TableCell align="right" classes={{ head: classes.headerCell }}>
                Members
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchResults.map((anime) => (
              <TableRow key={anime.anime_id}>
                <TableCell align="left">
                  <div className={classes.titleContainer}>
                    <div className={classes.imageContainer}>
                      {!anime.mal_anime_image_path && (
                        <Skeleton variant="rect" width={54} height={74} />
                      )}
                      {anime.mal_anime_image_path && (
                        <img
                          src={anime.mal_anime_image_path}
                          alt=""
                          className={classes.image}
                        />
                      )}
                    </div>

                    <div className={classes.textContainer}>
                      <Typography variant="body2" className={classes.title}>
                        {anime.name}
                      </Typography>

                      <Typography variant="body2">
                        {anime.synopsis.substring(0, 300)}...
                      </Typography>
                      <Link
                        to={`/anime/${anime.anime_id}`}
                        className={classes.readMore}
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </TableCell>
                <TableCell align="right">{anime.anime_type}</TableCell>
                <TableCell align="right">
                  {anime.num_episodes ? anime.num_episodes : "N/A"}
                </TableCell>
                <TableCell align="right">{anime.rating}</TableCell>
                <TableCell align="right">
                  {anime.members.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
            {/* <TableRow>
              <TableCell align="left">
                <div className={classes.titleContainer}>
                  <div className={classes.imageContainer}>
                    <Skeleton variant="rect" width={54} height={74} />
                  </div>

                  <div className={classes.textContainer}>
                    <Typography variant="body2" className={classes.title}>
                      Shingeki no Kyojin Season 3 Part 2
                    </Typography>

                    <Typography variant="body2">
                      Seeking to restore humanity’s diminishing hope, the Survey
                      Corps embark on a mission to retake Wall Maria, where the
                      battle against the merciless "Titans" takes the stage once
                      again. Returning to the...
                    </Typography>
                    <span className={classes.readMore}>Read More</span>
                  </div>
                </div>
              </TableCell>
              <TableCell align="right">TV</TableCell>
              <TableCell align="right">10</TableCell>
              <TableCell align="right">9.07</TableCell>
              <TableCell align="right">740,357</TableCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    searchPending: state.search.searchPending,
    searchResults: state.search.searchResults,
    total: state.search.total,
  };
};

export default connect(mapStateToProps)(SearchDisplayResult);
