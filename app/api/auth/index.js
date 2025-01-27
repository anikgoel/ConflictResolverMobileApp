import {baseUrl} from '../baseUrl';
import axios from 'axios';

export const registerUser = (email, username, firstname, lastname, password) => {
  const user = {
    email,
    username,
    firstname,
    lastname,
    password
  };
  
  let apiUrl = baseUrl + 'Register/RegisterExpert.php';

  return axios.get(apiUrl, 
    {params: user}
  );
}

export const login = (username, password) => {
  let formdata = new FormData();
  const user = {
    username,
    password
  };
  const keys = Object.keys(user);
  keys.map(key => formdata.append(key, user[key]));

  let apiUrl = baseUrl + 'Login/LoginExpert.php';
  return axios.post(apiUrl, formdata);
};