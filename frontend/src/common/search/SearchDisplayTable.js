import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  headerCell: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
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
  },
}));

const SearchDisplayResult = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
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
            <TableRow>
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
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default SearchDisplayResult;
