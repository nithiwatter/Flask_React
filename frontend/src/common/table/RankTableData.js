import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typography, TableRow, TableCell, makeStyles } from '@material-ui/core';
import StarRateIcon from '@material-ui/icons/StarRate';
import SmallMenu from './SmallMenu';

const useStyles = makeStyles((theme) => ({
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
}));

const RankTableData = (props) => {
  const classes = useStyles();
  const { data, page, size } = props;

  return (
    <React.Fragment>
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
                <Typography variant="body2">{entry.anime_type}</Typography>
                <Typography variant="body2">{entry.airing_str}</Typography>
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
    </React.Fragment>
  );
};

export default RankTableData;
