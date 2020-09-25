import React, { Component } from "react";
import { connect } from "react-redux";
import DetailedPage from "../common/details/DetailedPage";
import DetailedGridLayout from "../common/details/DetailedGridLayout";
import { fetchDetailedAnime } from "../actions/detailedAnimeActions";

export class DetailedAnime extends Component {
  componentDidMount() {
    const {
      dispatch,
      match: { params },
    } = this.props;
    window.scrollTo(0, 0);
    dispatch(fetchDetailedAnime(params.id));
  }

  render() {
    const {
      detailedAnimeDidMount,
      detailedAnimeLoading,
      detailedAnime,
    } = this.props;

    if (!detailedAnimeDidMount) return null;

    if (detailedAnimeLoading) {
      return (
        <React.Fragment>
          <DetailedGridLayout></DetailedGridLayout>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <DetailedPage data={detailedAnime}></DetailedPage>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    detailedAnimeDidMount: state.detailedAnime.didMount,
    detailedAnimeLoading: state.detailedAnime.loading,
    detailedAnime: state.detailedAnime.detailedAnime,
  };
};

export default connect(mapStateToProps)(DetailedAnime);
