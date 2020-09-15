import React, { Component } from 'react';
import clsx from 'clsx';
import {
  IconButton,
  Input,
  Paper,
  withStyles,
  Typography,
} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import SimpleDropDown from './SimpleDropDown';

const styles = (theme) => ({
  mainContainer: {
    display: 'flex',
  },
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
    '& > $icon': {
      opacity: 0,
    },
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
});

class SimpleSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <React.Fragment>
        <div className={classes.mainTitleContainer}>
          <Typography variant="h5" className={classes.mainTitle}>
            Search Anime
          </Typography>
        </div>

        <div className={classes.mainContainer}>
          <SimpleDropDown></SimpleDropDown>
          <Paper className={classes.root}>
            <div className={classes.searchContainer}>
              <Input
                fullWidth
                disableUnderline
                onChange={this.handleInputChange}
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
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SimpleSearchBar);
