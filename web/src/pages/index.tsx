/*
 ** Description :
 */

import { useContext } from 'react'

import { AuthContext, Banner, CardItem, RedirectButton } from '@components'
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
