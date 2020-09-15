import React from 'react';
import clsx from 'clsx';
import { IconButton, Input, Paper, makeStyles } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.spacing(6),
    width: '100%',
    display: 'flex',
    position: 'relative',
  },
  iconButton: {
    position: 'absolute',
    right: 0,
    color: theme.palette.action.active,
    transform: 'scale(1, 1)',
    transition: theme.transitions.create(['transform', 'color'], {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  iconButtonHidden: {
    transform: 'scale(0, 0)',
  },
  input: {
    width: '100%',
  },
  searchContainer: {
    margin: 'auto 16px',
    width: `calc(100% - ${theme.spacing(6 + 4)}px)`, // 6 button + 4 margin
  },
  mainTitleContainer: {
    display: 'flex',
    marginBottom: theme.spacing(2),
  },
  mainTitle: {
    fontWeight: 700,
  },
}));

const SimpleSearchBar = (props) => {
  const classes = useStyles();
  const { value, handleInputChange, handleSearch } = props;

  const handleSubmit = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <div className={classes.searchContainer}>
          <Input
            fullWidth
            disableUnderline
            onChange={handleInputChange}
            onKeyDown={handleSubmit}
          />
        </div>
        <IconButton
          className={clsx(classes.iconButton, classes.searchIconButton, {
            [classes.iconButtonHidden]: value !== '',
          })}
        >
          <SearchIcon></SearchIcon>
        </IconButton>
        <IconButton
          className={clsx(classes.iconButton, {
            [classes.iconButtonHidden]: value === '',
          })}
        >
          <ClearIcon></ClearIcon>
        </IconButton>
      </Paper>
    </React.Fragment>
  );
};

export default SimpleSearchBar;
