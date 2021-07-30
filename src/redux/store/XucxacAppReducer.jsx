const initialState = {
  taiXiu: true,
  arrXucXac: [
    { ma: 1, hinhAnh: "./img/gameXucXac/1.png" },
    { ma: 1, hinhAnh: "./img/gameXucXac/1.png" },
    { ma: 1, hinhAnh: "./img/gameXucXac/1.png" },
  ],
  soBanChoi: 0,
  soBanThang: 0,
};
export const xucXacReducer = (state = initialState, action) => {
  let { type } = action;
  switch (type) {
    case "DAT_CUOC": {
      state.taiXiu = action.taiXiu;
      return { ...state };
    }
    case "PLAY_GAME": {
      //xử lí randon xúc xắc
      let arrXucXacRandom = [];
      for (let i = 0; i < 3; i++) {
        let soRandom = Math.floor(Math.random() * 6) + 1;
        let xucXacRandom = {
          ma: soRandom,
          hinhAnh: `./img/gameXucXac/${soRandom}.png`,
        };
        arrXucXacRandom.push(xucXacRandom);
      }
      //gán state bằng arr mới
      state.arrXucXac = arrXucXacRandom;
      //xử lí tăng số bàn chơi
      state.soBanChoi += 1;
      //xử lí số bàn thắng
      let tongSoDiem = arrXucXacRandom.reduce((tongDiem, xucXac, index) => {
        return (tongDiem += xucXac.ma);
      }, 0);
      //xét điều kiện để ng dùng thắng game
      if (
        (tongSoDiem > 11 && state.taiXiu) ||
        (tongSoDiem <= 11 && !state.taiXiu)
      ) {
        state.soBanThang += 1;
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};
