import React, { Component } from "react";
import RankTable from "./RankTable";

export class RankTableContainer extends Component {
  shouldComponentUpdate(nextProps) {
    if (!nextProps.loading) {
      if (this.props.data === nextProps.data) {
        return false;
      }
    }
    return true;
  }

  render() {
    const { data, loading, page, size } = this.props;
    return (
      <div>
        <RankTable
          data={data}
          loading={loading}
          page={page}
          size={size}
        ></RankTable>
      </div>
    );
  }
}

export default RankTableContainer;
