/*
 ** Description :
 */

import { useContext } from 'react'

import { AuthContext, Banner, CardItem, RedirectButton } from '@components'
import cookie from 'cookie'
import { NextPageContext } from 'next'
import { IncomingMessage } from 'http'
// ---

export default function Home() {
  const ctxAuth = useContext(AuthContext)
  console.log(ctxAuth)
  return (
    <main>
      <Banner dayq="Younited States Of Ready BoilerPlates!" />
      <CardItem>
        <div>
          <RedirectButton text="Login / Signup" href="/login" />
        </div>
      </CardItem>
    </main>
  )
}

export function parseCookies(req: IncomingMessage) {
  return cookie.parse(req ? req.headers.cookie || '' : document.cookie)
}

Home.getInitialProps = async ({ req }: NextPageContext) => {
  const data = parseCookies(req!)

  console.log(data, 'hrerere')
  return {
    data: data && data
  }
}
