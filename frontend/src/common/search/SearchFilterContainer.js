import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import SimpleSearchBar from './SimpleSearchBar';
import SimpleDropDown from './SimpleDropDown';

const styles = (theme) => ({
  mainContainer: {
    display: 'flex',
  },
});

class SearchFilterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', filter: { category: 'All' } };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDropDownChange = this.handleDropDownChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleInputChange(e) {
    this.setState({ value: e.target.value });
  }

  handleDropDownChange(category) {
    this.setState({ filter: { ...this.state.filter, category } });
  }

  handleSearch() {
    this.props.history.push(
      `/anime?${this.state.filter.category}=${this.state.value}`
    );
  }

  render() {
    const { classes } = this.props;
    const { value, filter } = this.state;
    return (
      <div>
        <div className={classes.mainContainer}>
          <SimpleDropDown
            value={filter.category}
            handleDropDownChange={this.handleDropDownChange}
          ></SimpleDropDown>
          <SimpleSearchBar
            value={value}
            handleInputChange={this.handleInputChange}
            handleSearch={this.handleSearch}
          ></SimpleSearchBar>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SearchFilterContainer);
