import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import CssBaseline from "@material-ui/core/CssBaseline";
import AuthGuard from "./common/AuthGuard";
import Routes from "./Routes";
import Notifier from "./common/snackbar/Notifier";
import SearchOverlay from "./common/searchOverlay/SearchOverlay";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <CssBaseline></CssBaseline>

          <Router>
            <SearchOverlay></SearchOverlay>
            <AuthGuard>
              <Routes></Routes>
            </AuthGuard>
          </Router>

          <Notifier></Notifier>
        </MuiPickersUtilsProvider>
      </React.Fragment>
    );
  }
}

export default App;
