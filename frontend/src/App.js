import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline></CssBaseline>
        <Router>
          <Routes></Routes>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
