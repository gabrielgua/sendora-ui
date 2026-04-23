export type Project = {
  id: string
  name: string
  destinationEmail: string
  allowedOrigins?: string[]
  active: boolean
  apiKey: string
  createdAt: string
}
