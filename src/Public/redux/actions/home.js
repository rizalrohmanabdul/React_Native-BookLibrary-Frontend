import axios from "axios";
let URL = 'https://perpusfinal.herokuapp.com';

const getHome = () => {
  return {
    type: "GET_HOME",
    payload: axios.get(URL+'/book')
  };
};

export default getHome