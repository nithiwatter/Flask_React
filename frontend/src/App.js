import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import AuthGuard from './common/AuthGuard';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline></CssBaseline>
        <Router>
          <AuthGuard>
            <Routes></Routes>
          </AuthGuard>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
