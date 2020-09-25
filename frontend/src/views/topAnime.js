import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import queryString from "query-string";
import RankTableContainer from "../common/table/RankTableContainer";
import { fetchTop50Anime, switchPage } from "../actions/top50AnimeActions";

class TopAnime extends Component {
  componentDidMount() {
    const { location, dispatch } = this.props;
    const parsed = queryString.parse(location.search);

    // frontend input checks for query strings
    const page = !parsed["page"] ? 0 : parseInt(parsed["page"]);
    const size = !parsed["size"] ? 50 : parseInt(parsed["size"]);

    dispatch(fetchTop50Anime(page, size));
  }

  componentDidUpdate(prevProps) {
    const { location, dispatch } = this.props;

    // prevent infinite loop when query strings are updated
    if (prevProps.location.search === location.search) return;

    const parsed = queryString.parse(location.search);

    // frontend input checks for query strings
    const page = !parsed["page"] ? 0 : parseInt(parsed["page"]);
    const size = !parsed["size"] ? 50 : parseInt(parsed["size"]);

    dispatch(fetchTop50Anime(page, size));
  }

  componentWillUnmount() {
    this.props.dispatch(switchPage());
  }

  render() {
    const {
      top50AnimeDidMount,
      top50AnimeLoading,
      top50Anime,
      location,
    } = this.props;
    const parsed = queryString.parse(location.search);

    if (!top50AnimeDidMount) return null;

    // for pagination buttons
    const page = !parsed["page"] ? 0 : parseInt(parsed["page"]);
    const size = !parsed["size"] ? 50 : parseInt(parsed["size"]);

    return (
      <div>
        <RankTableContainer
          data={top50Anime}
          loading={top50AnimeLoading}
          page={page}
          size={size}
        ></RankTableContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    top50AnimeLoading: state.top50Anime.loading,
    top50Anime: state.top50Anime.top50Anime,
    top50AnimeDidMount: state.top50Anime.didMount,
  };
};

export default connect(mapStateToProps)(withRouter(TopAnime));
