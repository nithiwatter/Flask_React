import React, { Component } from 'react';
import { CircularProgress, withStyles } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    display: 'flex',
    paddingTop: theme.spacing(8),
    justifyContent: 'center',
  },
});

class AuthGuard extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: false, loading: true };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1000);
  }

  render() {
    const { children, classes } = this.props;
    const { loading } = this.state;
    if (loading) {
      return (
        <div className={classes.root}>
          <CircularProgress></CircularProgress>
        </div>
      );
    }
    return children;
  }
}

export default withStyles(styles)(AuthGuard);
