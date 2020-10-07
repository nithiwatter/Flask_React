import React from 'react';
import { useSpring, animated } from 'react-spring';
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
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateX(-100%)' },
    to: { opacity: 1, transform: 'translateX(0%)' }
  });

  return (
    <React.Fragment>
      {data.map((entry, i) => (
        <TableRow key={entry.anime_id}>
          <TableCell>
            <animated.div style={animationProps}>
              <Typography variant="h4" className={classes.rank}>
                {page * size + i + 1}
              </Typography>
            </animated.div>
          </TableCell>
          <TableCell align="left">
            <animated.div className={classes.titleContainer} style={animationProps}>
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
            </animated.div>
          </TableCell>
          <TableCell align="right">
            <animated.div className={classes.rankContainer} style={animationProps}>
              <StarRateIcon></StarRateIcon>
              <div>{entry.rating}</div>
            </animated.div>
          </TableCell>
          <TableCell align="right">
            <animated.div style={animationProps}>N/A</animated.div>
          </TableCell>
          <TableCell align="right">
            <animated.div style={animationProps}><SmallMenu></SmallMenu></animated.div>
          </TableCell>
        </TableRow>
      ))}
    </React.Fragment>
  );
};

export default RankTableData;
