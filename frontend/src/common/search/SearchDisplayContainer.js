import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';
import SearchDisplayTable from './SearchDisplayTable';

const styles = (theme) => ({
  titleContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  title: {
    fontWeight: 700,
  },
});

class SearchDisplayContainer extends Component {
  state = {};
  render() {
    const { history, classes } = this.props;

    if (history.location.search !== '') {
      return (
        <React.Fragment>
          <div className={classes.titleContainer}>
            <Typography variant="body1" className={classes.title}>
              Search Results
            </Typography>
          </div>

          <SearchDisplayTable></SearchDisplayTable>
        </React.Fragment>
      );
    }
    return null;
  }
}

export default withStyles(styles)(SearchDisplayContainer);
