/*
 ** Description :
 */

import '../styles/globals.css'

import { AppProps } from 'next/app'
import { CookiesProvider } from 'react-cookie'

import { AuthCtxProvider } from '@components'
import { useEffect } from 'react'

// ---

interface IPassingProps {
  currentUser: string | null
}

// ---

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {}, [])
  return (
    <CookiesProvider>
      <AuthCtxProvider>
        <Component {...pageProps} />
      </AuthCtxProvider>
    </CookiesProvider>
  )
}

export default MyApp
