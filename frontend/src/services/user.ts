import api from '../plugins/axios-api'

export default class UserService {
    getUser(username:string) {
        return api.get(`users/${username}/`)
    }
}