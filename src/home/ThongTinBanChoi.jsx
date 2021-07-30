import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinBanChoi extends Component {
  render() {
    return (
      <div>
        <div>
          bạn chọn :{" "}
          <span className="text-danger">
            {this.props.taiXiu ? "TÀI" : "XỈU"}
          </span>
        </div>
        <div>
          số bàn thắng :{" "}
          <span className="text-success">{this.props.soBanThang}</span>
        </div>
        <div>
          tổng số bàn chơi :{" "}
          <span className="text-warning">{this.props.soBanChoi}</span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    taiXiu: state.xucXacReducer.taiXiu,
    soBanChoi: state.xucXacReducer.soBanChoi,
    soBanThang: state.xucXacReducer.soBanThang,
  };
};

export default connect(mapStateToProps)(ThongTinBanChoi);
