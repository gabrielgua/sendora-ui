export type UserRole = 'ROLE_ADMIN' | 'ROLE_USER' | 'ROLE_ANONYMOUS'

export type User = {
  id: string
  name: string
  role: UserRole
  email: string
  createdAt: Date
  projectIds?: string[]
}
