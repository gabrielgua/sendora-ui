import type { User } from './user'

export type Authentication = {
  token: string
  user?: User
}
