import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SearchFilterContainer from './SearchFilterContainer';
import SearchDisplayContainer from './SearchDisplayContainer';

class SearchMainContainer extends Component {
  componentDidMount() {
    console.log(this.props.history.location);
  }

  componentDidUpdate() {
    console.log(this.props.history.location);
    // check if the search/query string changes
    if (
      this.props.history.location.state &&
      this.props.history.location.search !==
        this.props.history.location.state.fromSearch
    ) {
      console.log('Searching!');
    }
  }

  render() {
    const { history } = this.props;

    return (
      <div>
        <SearchFilterContainer history={history}></SearchFilterContainer>
        <SearchDisplayContainer history={history}></SearchDisplayContainer>
      </div>
    );
  }
}

export default withRouter(SearchMainContainer);
