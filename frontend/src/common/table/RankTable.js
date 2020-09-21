import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  Typography,
  Button,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import StarRateIcon from '@material-ui/icons/StarRate';
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
  textContainer: {
    marginLeft: theme.spacing(2),
  },
  title: {
    fontWeight: 700,
  },
}));

const RankTable = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.mainTitleContainer}>
        <Typography variant="h5" className={classes.mainTitle}>
          Top Anime Series
        </Typography>
        <Button variant="outlined" color="primary" className={classes.button}>
          My Favorites
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
          Watch Later
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
          Waifu Tier List
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell classes={{ head: classes.headerCell }}>Rank</TableCell>
              <TableCell align="center" classes={{ head: classes.headerCell }}>
                Title
              </TableCell>
              <TableCell align="right" classes={{ head: classes.headerCell }}>
                Score
              </TableCell>
              <TableCell align="right" classes={{ head: classes.headerCell }}>
                Your Score
              </TableCell>
              <TableCell align="right" classes={{ head: classes.headerCell }}>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography variant="h4" className={classes.rank}>
                  1
                </Typography>
              </TableCell>
              <TableCell align="left">
                <div className={classes.titleContainer}>
                  <div className={classes.imageContainer}>
                    <Skeleton variant="rect" width={75} height={105} />
                  </div>

                  <div className={classes.textContainer}>
                    <Typography variant="h6" className={classes.title}>
                      Fullmetal Alchemist: Brotherhood
                    </Typography>
                    <Typography variant="body2">TV (64 eps)</Typography>
                    <Typography variant="body2">Apr 2009 - Jul 2010</Typography>
                    <Typography variant="body2">1,942,914 members</Typography>
                  </div>
                </div>
              </TableCell>
              <TableCell align="right">
                <div className={classes.rankContainer}>
                  <StarRateIcon></StarRateIcon>
                  <div>9.22</div>
                </div>
              </TableCell>
              <TableCell align="right">N/A</TableCell>
              <TableCell align="right">
                <SmallMenu></SmallMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="h4" className={classes.rank}>
                  1
                </Typography>
              </TableCell>
              <TableCell align="left">
                <div className={classes.titleContainer}>
                  <div className={classes.imageContainer}>
                    <Skeleton variant="rect" width={75} height={105} />
                  </div>
                  <div className={classes.textContainer}>
                    <Typography variant="h6" className={classes.title}>
                      Fullmetal Alchemist: Brotherhood
                    </Typography>
                    <Typography variant="body2">TV (64 eps)</Typography>
                    <Typography variant="body2">Apr 2009 - Jul 2010</Typography>
                    <Typography variant="body2">1,942,914 members</Typography>
                  </div>
                </div>
              </TableCell>
              <TableCell align="right">
                <div className={classes.rankContainer}>
                  <StarRateIcon></StarRateIcon>
                  <div>9.22</div>
                </div>
              </TableCell>
              <TableCell align="right">N/A</TableCell>
              <TableCell align="right">
                <SmallMenu></SmallMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="h4" className={classes.rank}>
                  1
                </Typography>
              </TableCell>
              <TableCell align="left">
                <div className={classes.titleContainer}>
                  <div className={classes.imageContainer}>
                    <Skeleton variant="rect" width={75} height={105} />
                  </div>
                  <div className={classes.textContainer}>
                    <Typography variant="h6" className={classes.title}>
                      Fullmetal Alchemist: Brotherhood
                    </Typography>
                    <Typography variant="body2">TV (64 eps)</Typography>
                    <Typography variant="body2">Apr 2009 - Jul 2010</Typography>
                    <Typography variant="body2">1,942,914 members</Typography>
                  </div>
                </div>
              </TableCell>
              <TableCell align="right">
                <div className={classes.rankContainer}>
                  <StarRateIcon></StarRateIcon>
                  <div>9.22</div>
                </div>
              </TableCell>
              <TableCell align="right">N/A</TableCell>
              <TableCell align="right">
                <SmallMenu></SmallMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default RankTable;
