import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { Formik } from 'formik';
import SimpleSearchBar from './SimpleSearchBar';
import SimpleDropDown from './SimpleDropDown';
import AdvanceSearchOptions from './AdvanceSearchOptions';

const styles = (theme) => ({
  mainContainer: {
    display: 'flex',
  },
  searchOptionsContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

const formObj = {
  animeGenre: ['All', 'Action', 'Comedy', 'Romance'],
  animeType: ['All', 'TV', 'OVA', 'Movie', 'Special'],
  animeStatus: ['All', 'Finished Airing', 'Currently Airing', 'Not Yet Aired'],
  animeProducer: [
    'All',
    'Production I.G.',
    'Sunrise',
    'Shaft',
    'Kyoto Animation',
    'A1 Pictures',
  ],
};

class SearchFilterContainer extends Component {
  render() {
    const { classes, history } = this.props;

    return (
      <Formik
        validateOnChange={false}
        initialValues={{
          animeTitle: '',
          animeGenre: 'All',
          animeType: 'All',
          animeStatus: 'All',
          animeProducer: 'All',
        }}
        onSubmit={(values) => {
          console.log(values);
          history.push(`/anime?${values.animeGenre}=${values.animeTitle}`);
        }}
      >
        {({ values, setFieldValue, submitForm }) => {
          return (
            <div>
              <div className={classes.mainContainer}>
                <SimpleDropDown
                  value={values.animeGenre}
                  valueType="animeGenre"
                  valueOptions={formObj.animeGenre}
                  handleDropDownChange={setFieldValue}
                ></SimpleDropDown>
                <SimpleSearchBar
                  valueType="animeTitle"
                  handleSearch={setFieldValue}
                  formikSubmit={submitForm}
                ></SimpleSearchBar>
              </div>
              <AdvanceSearchOptions
                formObj={formObj}
                values={values}
                handleChange={setFieldValue}
              ></AdvanceSearchOptions>
            </div>
          );
        }}
      </Formik>
    );
  }
}

export default withStyles(styles)(SearchFilterContainer);
