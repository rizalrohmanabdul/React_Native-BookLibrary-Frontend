import axios from "axios";
let URL = 'https://perpusfinal.herokuapp.com';

let token = ''
let id = ''
let auth ={
  'authorization' : 'w3lc0meto4pp',
  'x-access-token' : token,
  'x-control-user': id
}


export const getPeminjam = () => {
  return {
    type: "GET_PEMINJAM",
    payload: axios.get(URL+'/borrower', {
      headers: auth
    })
  };
};

export const postPeminjam = (data) => {
  console.warn('coba bro', data)
  return {
    type: "POST_PEMINJAM",
    payload: axios.post(URL+'/borrower', data, {
      headers: auth
    })
  };
};

export const registrasiPeminjam = (data) => {
  console.warn('coba bro', data)
  return {
    type: "REGISTRASI_PEMINJAM",
    payload: axios.post(URL+'/authuser/register', data)
  };
};

export const deletePinjam = (id_ktp) =>{
  console.log('action id', id_ktp)
	return{
		type: 'DELETE_PINJAM',
		payload: axios.delete(URL +`/borrower/${id_ktp}`, {
      headers: auth
    })
	}
}

