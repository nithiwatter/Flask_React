import React, { Component } from 'react';
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
  animeProducer: [
    'All',
    'Production I.G.',
    'Sunrise',
    'Shaft',
    'Kyoto Animation',
    'A1 Pictures',
  ],
  animeGenre: [
    { label: 'All', value: 'all' },
    { label: 'Romance', value: 'romance' },
    { label: 'Comedy', value: 'comedy' },
    { label: 'Action', value: 'action' },
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
          animeType: 'All',
          animeStatus: 'All',
          animeProducer: 'All',
          animeGenre: {
            all: true,
            romance: false,
            comedy: false,
            action: false,
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
