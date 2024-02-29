import * as constants from "./constants";
import axios from "axios";
// import { fromJS } from "immutable";

const changeLogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true,
});

export const logout = () => ({
  type: constants.LOGOUT,
  value: false,
});

export const login = (acc, password) => {
  return (dispatch) => {
    axios
      .get(`/api/login.json?account=${acc}&password=${password}`)
      .then((res) => {
        const result = res.data.data;
        // dispatch(changeList(data.data));
        if (result) {
          dispatch(changeLogin());
        } else {
          alert("登入成功");
        }
        // console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  };
};
