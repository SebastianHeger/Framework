import api from '../plugins/axios-api'

export interface User {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    last_login: string;
}

export default class UserService {
    getUsers() {
        return api.get(`users/`);
    }

    getUser(username: string) {
        return api.get(`users/${username}/`)
    }

    getInitialPassword(username: string) {
        return api.get(`users/initial-password/${username}/`);
    }

    deleteUser(user_id: string) {
        return api.delete(`users/${user_id}/`);
    }

    changePassword(
        userId: number,
        passwordOld: string,
        passwordNew: string,
        passwordNew2: string
    ) {
        return api.put(`users/password-reset/${userId}/`, {
            old_password: passwordOld,
            new_password: passwordNew,
            new_password_again: passwordNew2,
        });
    }
}