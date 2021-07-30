import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  renderXucXac = () => {
    let { arrXucXac } = this.props;
    return arrXucXac.map((xucxac, index) => {
      return (
        <img key={index} width={50} height={50} src={xucxac.hinhAnh} alt="" />
      );
    });
  };
  render() {
    return <div>{this.renderXucXac()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    arrXucXac: state.xucXacReducer.arrXucXac,
  };
};
export default connect(mapStateToProps, null)(XucXac);
