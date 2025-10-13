import { AuthService } from "../core/AuthService"


export class UserService extends AuthService {
  constructor() {
    super('/api/users')
  }

  getMe() {
    return this.get('/me')
  }

  getAll() {
    return this.get('/')
  }

  updateProfile(data: any) {
    return this.put('/me', data)
  }
}
