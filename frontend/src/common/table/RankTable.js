import React from "react";
import { NavLink } from "react-router-dom";
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
  Grow,
  CircularProgress,
  makeStyles,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import RankTableData from "./RankTableData";

const useStyles = makeStyles((theme) => ({
  mainTitleContainer: {
    display: "flex",
    marginBottom: theme.spacing(2),
    alignItems: "center",
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
  paginationContainer: {
    marginLeft: "auto",
  },
  bottomPaginationContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
  visible: {
    display: "auto",
    marginLeft: theme.spacing(2),
  },
  hidden: {
    visibility: "hidden",
  },
}));

const RankTable = (props) => {
  const classes = useStyles();
  const { data, loading, page, size } = props;

  return (
    <React.Fragment>
      <div>
        <div className={classes.mainTitleContainer}>
          <Typography variant="h5" className={classes.mainTitle}>
            Top Anime Series
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            disabled={loading}
          >
            My Favorites
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            disabled={loading}
          >
            Watch Later
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            disabled={loading}
          >
            Waifu Tier List
          </Button>
          <CircularProgress
            className={loading ? classes.visible : classes.hidden}
            color="secondary"
            size={30}
            disableShrink
          />
          <div className={classes.paginationContainer}>
            {page > 0 ? (
              <Button
                startIcon={<ChevronLeftIcon></ChevronLeftIcon>}
                component={NavLink}
                to={`/topAnime?page=${page - 1}`}
                disabled={loading}
              >
                Prev 50
              </Button>
            ) : null}

            <Button
              endIcon={<ChevronRightIcon></ChevronRightIcon>}
              component={NavLink}
              to={`/topAnime?page=${page + 1}`}
              disabled={loading}
            >
              Next 50
            </Button>
          </div>
        </div>

        {!loading ? (
          <React.Fragment>
            <Grow in={true} style={{ transformOrigin: "top center" }}>
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
                    <RankTableData
                      data={data}
                      page={page}
                      size={size}
                    ></RankTableData>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grow>

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
          </React.Fragment>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default RankTable;
