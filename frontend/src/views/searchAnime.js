import React, { Component } from "react";
import { connect } from "react-redux";
import { CircularProgress, withStyles } from "@material-ui/core";
import SearchMainContainer from "../common/search/SearchMainContainer";
import { startLoadingList } from "../actions/searchActions";

const styles = (theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
});

class SearchAnime extends Component {
  componentDidMount() {
    const { searchDidMount, dispatch } = this.props;
    // want to load data only once for all genreList and studioList (even if we switch tabs)
    if (!searchDidMount) {
      dispatch(startLoadingList());
    }
  }

  render() {
    const {
      searchDidMount,
      searchListPending,
      classes,
    } = this.props;

    if (!searchDidMount) return null;

    if (searchListPending)
      return (
        <div className={classes.root}>
          <CircularProgress></CircularProgress>
        </div>
      );

    return (
      <React.Fragment>
        <SearchMainContainer
        ></SearchMainContainer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchDidMount: state.search.didMount,
    searchListPending: state.search.listPending,
  };
};

export default connect(mapStateToProps)(withStyles(styles)(SearchAnime));
