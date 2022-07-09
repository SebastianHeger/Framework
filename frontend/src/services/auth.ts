import axios from 'axios';

import User from '../data/user'

const API_URL = 'http://localhost:8080/api/auth/';

export default class AuthService {
  login(user: User) {
    return axios
      .post(API_URL + 'signin', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }
  
  register(user: User) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      password: user.password
    });
  }
}

