import React from 'react';
import { NavLink } from 'react-router-dom';
// some dates from the API have trouble with being parsed
// import { format } from 'date-fns';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  LinearProgress,
  Grow,
  makeStyles,
} from '@material-ui/core';
import StarRateIcon from '@material-ui/icons/StarRate';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SmallMenu from './SmallMenu';

const useStyles = makeStyles((theme) => ({
  mainTitleContainer: {
    display: 'flex',
    marginBottom: theme.spacing(2),
  },
  mainTitle: {
    fontWeight: 700,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
  headerCell: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  rankContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rank: {
    fontWeight: 700,
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  imageContainer: {
    flexShrink: 0,
  },
  image: {
    maxWidth: 75,
    height: 'auto',
  },
  textContainer: {
    marginLeft: theme.spacing(2),
  },
  title: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    textDecoration: 'none',
    '&:active': {
      color: theme.palette.primary.main,
    },
    '&:visited': {
      color: theme.palette.primary.main,
    },
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  paginationContainer: {
    marginLeft: 'auto',
  },
  bottomPaginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
}));

const RankTable = (props) => {
  const classes = useStyles();
  const { data, loading, page, size } = props;

  return (
    <React.Fragment>
      {loading ? <LinearProgress></LinearProgress> : null}

      {!loading ? (
        <React.Fragment>
          <Grow in={true} style={{ transformOrigin: '0 0 0' }}>
            <div>
              <div className={classes.mainTitleContainer}>
                <Typography variant="h5" className={classes.mainTitle}>
                  Top Anime Series
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                >
                  My Favorites
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                >
                  Watch Later
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                >
                  Waifu Tier List
                </Button>
                <div className={classes.paginationContainer}>
                  {page > 0 ? (
                    <Button
                      startIcon={<ChevronLeftIcon></ChevronLeftIcon>}
                      component={NavLink}
                      to={`/topAnime?page=${page - 1}`}
                    >
                      Prev 50
                    </Button>
                  ) : null}

                  <Button
                    endIcon={<ChevronRightIcon></ChevronRightIcon>}
                    component={NavLink}
                    to={`/topAnime?page=${page + 1}`}
                  >
                    Next 50
                  </Button>
                </div>
              </div>

              <TableContainer component={Paper}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell classes={{ head: classes.headerCell }}>
                        Rank
                      </TableCell>
                      <TableCell
                        align="center"
                        classes={{ head: classes.headerCell }}
                      >
                        Title
                      </TableCell>
                      <TableCell
                        align="right"
                        classes={{ head: classes.headerCell }}
                      >
                        Score
                      </TableCell>
                      <TableCell
                        align="right"
                        classes={{ head: classes.headerCell }}
                      >
                        Your Score
                      </TableCell>
                      <TableCell
                        align="right"
                        classes={{ head: classes.headerCell }}
                      >
                        Status
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((entry, i) => (
                      <TableRow key={entry.anime_id}>
                        <TableCell>
                          <Typography variant="h4" className={classes.rank}>
                            {page * size + i + 1}
                          </Typography>
                        </TableCell>
                        <TableCell align="left">
                          <div className={classes.titleContainer}>
                            <div className={classes.imageContainer}>
                              <img
                                src={entry.mal_anime_image_path}
                                className={classes.image}
                                alt=""
                              ></img>
                            </div>

                            <div className={classes.textContainer}>
                              <Typography
                                variant="h6"
                                className={classes.title}
                                component={NavLink}
                                to={`/anime/${entry.anime_id}`}
                              >
                                {entry.name}
                              </Typography>
                              <Typography variant="body2">
                                {entry.anime_type}
                              </Typography>
                              <Typography variant="body2">
                                {entry.airing_str}
                              </Typography>
                              <Typography variant="body2">
                                {entry.members.toLocaleString()} members
                              </Typography>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell align="right">
                          <div className={classes.rankContainer}>
                            <StarRateIcon></StarRateIcon>
                            <div>{entry.rating}</div>
                          </div>
                        </TableCell>
                        <TableCell align="right">N/A</TableCell>
                        <TableCell align="right">
                          <SmallMenu></SmallMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <div className={classes.bottomPaginationContainer}>
                {page > 0 ? (
                  <Button
                    startIcon={<ChevronLeftIcon></ChevronLeftIcon>}
                    component={NavLink}
                    to={`/topAnime?page=${page - 1}`}
                  >
                    Prev 50
                  </Button>
                ) : null}

                <Button
                  endIcon={<ChevronRightIcon></ChevronRightIcon>}
                  component={NavLink}
                  to={`/topAnime?page=${page + 1}`}
                >
                  Next 50
                </Button>
              </div>
            </div>
          </Grow>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default RankTable;
