import { IncomingMessage } from 'http'

export const isAlreadyIn = (req: IncomingMessage) => {
  const cookie = req.headers.cookie?.split('=')
  if (cookie && cookie.includes('vanillajwt')) return true
  return false
}
