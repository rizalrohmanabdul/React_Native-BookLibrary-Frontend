import axios from "axios";
let URL = "http://192.168.100.42:3342";


export const currentLogin = (data) => {
    console.log('ini dari aksi',data);
  return {
    type: "LOGIN_USER",
    payload: axios.post(URL + "/authuser/login", data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  };
};

export const logout = () => {
return {
  type: "LOGIN_USER",
  payload: axios.post(URL + "/authuser/login"),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
};
};