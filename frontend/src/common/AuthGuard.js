import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { CircularProgress, withStyles } from "@material-ui/core";
import { loginSuccess, loginFailure } from "../actions/userActions";
import { openSnackbarExternal } from "../common/snackbar/Notifier";

const styles = (theme) => ({
  root: {
    display: "flex",
    paddingTop: theme.spacing(8),
    justifyContent: "center",
  },
});

class AuthGuard extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: false, loading: true };
  }

  async componentDidMount() {
    try {
      // try to retrieve jwt from localStorage
      const jwt = localStorage.getItem("jwt");
      // do not send request if there is no jwt in localStorage
      if (!jwt)
        return setTimeout(() => this.setState({ loading: false }), 1000);
      // send request to get the user's identity for this token
      const { data } = await axios.get("/api/user/identity", {
        headers: {
          Authorization: "Bearer " + jwt,
        },
      });
      const userData = {};
      userData.data = data.data;
      userData["access_token"] = jwt;
      this.props.dispatch(loginSuccess(userData));
      openSnackbarExternal({
        severity: "success",
        message: "Logged in successfully",
      });
      setTimeout(() => this.setState({ loading: false }), 1000);
    } catch (err) {
      this.props.dispatch(loginFailure());
      openSnackbarExternal({
        severity: "info",
        message: "Cannot automatically log in: " + err.response.data.message,
      });
      setTimeout(() => this.setState({ loading: false }), 1000);
    }
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

export default connect()(withStyles(styles)(AuthGuard));
