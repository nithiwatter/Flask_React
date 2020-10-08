import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import { Formik } from "formik";
import SearchBarContainer from "./SearchBarContainer";
import AdvanceSearchOptions from "./AdvanceSearchOptions";
import { createSearchFilterQS } from '../../utils/qsHelpers';
import { openSnackbarExternal } from '../snackbar/Notifier';

const styles = () => ({
  mainContainer: {
    display: "flex",
  },
  searchOptionsContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

const formObj = {
  animeType: ["All", "TV", "OVA", "Movie", "Special"],
  animeStatus: ["All", "Finished Airing", "Currently Airing", "Not Yet Aired"],
  animeScore: [
    { name: "(10) Masterpiece", value: 10 },
    { name: "(9) Great", value: 9 },
    { name: "(8) Very Good", value: 8 },
    { name: "(7) Good", value: 7 },
    { name: "(6) Fine", value: 6 },
    { name: "(5) Average", value: 5 },
    { name: "(4) Bad", value: 4 },
    { name: "(3) Very Bad", value: 3 },
    { name: "(2) Horrible", value: 2 },
    { name: "(1) Appalling", value: 1 },
  ]
};

class SearchFilterContainer extends Component {
  render() {
    const { genreList, studioList, genreObj, classes, history } = this.props;

    return (
      <Formik
        validateOnChange={false}
        initialValues={{
          animeTitle: "",
          animeType: "All",
          animeScore: "",
          animeStatus: "All",
          // here, null will represent All; { studio_id: 'All', studio_name: 'All } also represents All
          animeProducer: null,
          animeGenre: {
            ...genreObj,
          },
          animeStartDate: null,
          animeEndDate: null,
        }}
        onSubmit={(values) => {
          try {
            console.log(values);
            const qs = createSearchFilterQS(values);
            history.push(`/anime${qs}`);
          } catch (err) {
            openSnackbarExternal({ severity: 'error', message: err.message });
          }

        }}
      >
        {({ values, setFieldValue, submitForm }) => {
          return (
            <div>
              <div className={classes.mainContainer}>
                <SearchBarContainer
                  valueType="animeTitle"
                  handleSearch={setFieldValue}
                  formikSubmit={submitForm}
                  history={history}
                ></SearchBarContainer>
              </div>
              <AdvanceSearchOptions
                formObj={formObj}
                values={values}
                studioList={studioList}
                genreList={genreList}
                handleChange={setFieldValue}
              ></AdvanceSearchOptions>
            </div>
          );
        }}
      </Formik>
    );
  }
}

const mapStateToProps = (state) => ({
  genreList: state.search.genreList,
  studioList: state.search.studioList,
  genreObj: state.search.genreObj,
});

export default connect(mapStateToProps)(
  withStyles(styles)(SearchFilterContainer)
);
