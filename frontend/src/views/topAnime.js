import React from "react";
import { connect } from "react-redux";
import RankTable from "../common/table/RankTable";
import { fetchTop50Anime, switchPage } from "../actions/top50AnimeActions";

const TopAnime = (props) => {
  const { top50AnimeLoading, top50Anime, dispatch } = props;

  // need dispatch in the dependency array to suppress warning/prevent looping API calls
  React.useEffect(() => {
    dispatch(fetchTop50Anime());

    // cleaning up after leaving this page
    return () => {
      dispatch(switchPage());
    };
  }, [dispatch]);

  return (
    <div>
      <RankTable data={top50Anime} loading={top50AnimeLoading}></RankTable>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    top50AnimeLoading: state.top50Anime.loading,
    top50Anime: state.top50Anime.top50Anime,
  };
};

export default connect(mapStateToProps)(TopAnime);
