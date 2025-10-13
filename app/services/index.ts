import { AuthService } from './core/AuthService'
import { UserService } from './modules/UserService'

export const service = {
  auth: new AuthService('/api/auth'),
  user: new UserService(),
}
export type ServiceType = typeof service