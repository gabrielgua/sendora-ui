export type Project = {
  id: string
  name: string
  destinationEmail: string
  active: boolean
  apiKey?: string
  createdAt: string
  allowedOrigins?: string[]
}
