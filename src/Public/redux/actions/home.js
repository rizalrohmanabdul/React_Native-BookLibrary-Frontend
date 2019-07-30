import axios from "axios";
let URL = 'http://192.168.100.42:3342'

const getHome = () => {
  return {
    type: "GET_HOME",
    payload: axios.get(URL+'/book')
  };
};

export default getHome