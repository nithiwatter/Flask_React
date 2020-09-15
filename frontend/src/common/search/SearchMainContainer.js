import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SearchFilterContainer from './SearchFilterContainer';
import SearchDisplayContainer from './SearchDisplayContainer';

class SearchMainContainer extends Component {
  componentDidMount() {
    console.log(this.props.history.location);
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps.location);
    console.log(this.props.location);
    // check if the search/query string changes
    // if the back button goes from some query to no query, then no search is done
    if (
      this.props.location.search &&
      this.props.location.search !== prevProps.location.search
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
