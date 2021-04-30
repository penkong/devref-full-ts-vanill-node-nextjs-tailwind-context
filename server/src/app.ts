import http, { IncomingMessage, ServerResponse } from 'http'

import { cors, validRoutes } from './util'
import { Router } from './routes'
import { UrlRefiner } from './service/'
import { CookieSessionRequest } from './@types'
import { isAlreadyIn } from './middleware'
// import { validRoutes } from './util/validRoutes.const';

// ---
declare global {
  namespace http {
    interface IncomingMessage {
      session?: CookieSessionRequest | {}
      currentUser?: { [key: string]: any }
    }
  }
}

export const app = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    cors(res)

    if (req.url == undefined) return res.end()

    const url = UrlRefiner.maker(req.url)

    const isOk = UrlRefiner.checker(url, req)

    if (!isOk) return res.end()

    const r = req.method + url.pathname

    if (r === validRoutes[0] || r === validRoutes[1])
      if (isAlreadyIn(req))
        return res.end(JSON.stringify([{ message: 'Already In' }]))

    Router.dispatch(url, req, res)
  }
)
