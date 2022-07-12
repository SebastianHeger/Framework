import api from '../plugins/axios-api'

export default class AuthService {
  login(username: string, password: string) {
    let data = {"username": username, "password": password}
    return api.post(`token/`, data)
  }
}

