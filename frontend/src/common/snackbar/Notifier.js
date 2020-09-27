import React, { Component } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

export let openSnackbarExternal;

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class Notifier extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, message: "", severity: "success" };
    this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
    openSnackbarExternal = this.handleSnackbarOpen.bind(this);
  }

  handleSnackbarClose() {
    this.setState({ open: false, message: "" });
  }

  handleSnackbarOpen({ message, severity }) {
    this.setState({ open: true, message, severity });
  }

  render() {
    const { open, message, severity } = this.state;
    return (
      <React.Fragment>
        <Snackbar
          autoHideDuration={5000}
          onClose={this.handleSnackbarClose}
          open={open}
        >
          <Alert onClose={this.handleSnackbarClose} severity={severity}>
            {message}
          </Alert>
        </Snackbar>
      </React.Fragment>
    );
  }
}

export default Notifier;
