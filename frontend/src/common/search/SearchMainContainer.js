import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchFilterContainer from './SearchFilterContainer';
import SearchDisplayContainer from './SearchDisplayContainer';
import { startSearching } from '../../actions/searchActions';

class SearchMainContainer extends Component {
  componentDidMount() {
    console.log(this.props.history.location);
    // will need to handle search here also
  }

  componentDidUpdate(prevProps) {
    // check if the search/query string changes
    // if the back button goes from some query to no query, then no search is done
    if (
      this.props.location.search &&
      this.props.location.search !== prevProps.location.search
    ) {
      console.log('Searching!');
      this.props.dispatch(startSearching());
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

export default connect()(withRouter(SearchMainContainer));
