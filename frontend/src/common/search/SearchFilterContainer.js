import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { Formik } from 'formik';
import SimpleSearchBar from './SimpleSearchBar';
import AdvanceSearchOptions from './AdvanceSearchOptions';

const styles = () => ({
  mainContainer: {
    display: 'flex',
  },
  searchOptionsContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

const formObj = {
  animeType: ['All', 'TV', 'OVA', 'Movie', 'Special'],
  animeStatus: ['All', 'Finished Airing', 'Currently Airing', 'Not Yet Aired'],
};

class SearchFilterContainer extends Component {
  render() {
    const { genreList, studioList, genreObj, classes, history } = this.props;

    return (
      <Formik
        validateOnChange={false}
        initialValues={{
          animeTitle: '',
          animeType: 'All',
          animeStatus: 'All',
          // here, null will represent All; { studio_id: 'All', studio_name: 'All } also represents All
          animeProducer: null,
          animeGenre: {
            ...genreObj
          },
          animeStartDate: null,
          animeEndDate: null,
        }}
        onSubmit={(values) => {
          console.log(values);
          history.push(`/anime?${values.animeType}=${values.animeTitle}`);
        }}
      >
        {({ values, setFieldValue, submitForm }) => {
          return (
            <div>
              <div className={classes.mainContainer}>
                <SimpleSearchBar
                  valueType="animeTitle"
                  handleSearch={setFieldValue}
                  formikSubmit={submitForm}
                ></SimpleSearchBar>
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
  genreObj: state.search.genreObj
});

export default connect(mapStateToProps)(withStyles(styles)(SearchFilterContainer));
