import React, { Component } from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import CssBaseline from "@material-ui/core/CssBaseline";
import AuthGuard from "./common/AuthGuard";
import Routes from "./Routes";
import Notifier from "./common/snackbar/Notifier";
import SearchOverlay from "./common/searchOverlay/SearchOverlay";

const styles = () => ({
  root: {
    height: "100vh",
    overflow: "hidden",
  },
});

class App extends Component {
  render() {
    const { showSearchOverlay, classes } = this.props;

    return (
      <React.Fragment>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <CssBaseline></CssBaseline>
          <SearchOverlay></SearchOverlay>
          <div className={clsx({ [classes.root]: showSearchOverlay })}>
            <Router>
              <AuthGuard>
                <Routes></Routes>
              </AuthGuard>
            </Router>
          </div>
          <Notifier></Notifier>
        </MuiPickersUtilsProvider>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showSearchOverlay: state.searchOverlay.show,
  };
};

export default connect(mapStateToProps)(withStyles(styles)(App));
