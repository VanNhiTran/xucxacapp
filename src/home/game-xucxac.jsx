import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.scss";
import ThongTinBanChoi from "./ThongTinBanChoi";
import XucXac from "./xucxac";
class GameXucXac extends Component {
  render() {
    return (
      <div
        className="gameXucXac"
        style={{
          backgroundImage: 'url("./img/gameXucXac/bgGame.png")',
          width: "100%",
          height: "100%",
          position: "fixed",
          left: 0,
          top: 0,
          padding: 50,
        }}
      >
        <div className="container">
          <h3 className="display-4 text-center">BÀI TẬP GAME XÚC XẮC</h3>
          <div className="row text-center">
            <div className="col-5">
              <button
                className="bg-danger display-4 p-5 text-light"
                onClick={() => this.props.datCuoc(true)}
              >
                TÀI{" "}
              </button>
            </div>
            <div className="col-2">
              <div className="d-flex justify-content-center">
                <XucXac />
              </div>
            </div>
            <div className="col-5">
              <button
                className="bg-dark display-4 p-5 text-light"
                onClick={() => this.props.datCuoc(false)}
              >
                XỈU{" "}
              </button>
            </div>
          </div>
          <div className="container text-center display-4">
            <ThongTinBanChoi />
            <button
              className="btn btn-success"
              style={{ fontSize: 30 }}
              onClick={this.props.playGame}
            >
              PLAY GAME
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapDipatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      let action = {
        type: "DAT__CUOC",
        taiXiu,
      };
      dispatch(action);
      console.log(action);
    },
    playGame: () => {
      //cách viết rút gọn
      dispatch({
        type: "PLAY_GAME",
      });
    },
  };
};
export default connect(null, mapDipatchToProps)(GameXucXac);
