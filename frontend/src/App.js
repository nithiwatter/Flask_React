import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import CssBaseline from '@material-ui/core/CssBaseline';
import AuthGuard from './common/AuthGuard';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <CssBaseline></CssBaseline>
          <Router>
            <AuthGuard>
              <Routes></Routes>
            </AuthGuard>
          </Router>
        </MuiPickersUtilsProvider>
      </React.Fragment>
    );
  }
}

export default App;
