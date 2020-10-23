import React, { Component } from "react";
import queryString from "query-string";
import SimpleSearchBar from "./SimpleSearchBar";

class SearchBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { readFromQS: false, value: "" };
  }

  componentDidMount() {
    const { history } = this.props;
    const location = history.location;
    const parsed = queryString.parse(location.search);
    let value = "";
    if (parsed.title && parsed.title !== "All") {
      value = parsed.title;
    }
    this.setState({ readFromQS: true, value });
  }

  render() {
    const { valueType, handleSearch, formikSubmit } = this.props;
    const { readFromQS, value } = this.state;

    if (!readFromQS) return null;

    return (
      <SimpleSearchBar
        initialValue={value}
        valueType={valueType}
        handleSearch={handleSearch}
        formikSubmit={formikSubmit}
      ></SimpleSearchBar>
    );
  }
}

export default SearchBarContainer;
