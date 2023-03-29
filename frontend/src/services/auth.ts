import api from '../plugins/axios-api'

export default class AuthService {
  login(username: string, password: string) {
    let data = {"username": username, "password": password}
    return api.post(`token/`, data)
  }

  refresh(refreshToken: string) {
    let data = {"refresh": refreshToken}
    return api.post(`token/refresh/`, data)
  }

  register(username: string, password: string, email: string) {
    let data = {"username": username, "password": password, "email": email}
    return api.post(`register/`, data)
  }
}
