import axios from 'axios';

import User from '../data/user'

const API_URL = 'http://localhost:8000/api/';

export default class AuthService {
  login(username:string, password:string) {
    return axios
      .post(API_URL + 'token', {
        username: username,
        password: password
      })
      .then(response => {
        console.log(response)
        // if (response.data.accessToken) {
        //   localStorage.setItem('user', JSON.stringify(response.data));
        // }
        // return response.data;
      });
  }

  // logout() {
  //   localStorage.removeItem('user');
  // }
  
  register(user: User) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      password: user.password
    });
  }
}

