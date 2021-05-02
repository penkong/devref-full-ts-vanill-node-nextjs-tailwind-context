/*
 ** Description :
 */

import '../styles/globals.css'

import { AppProps } from 'next/app'
import { CookiesProvider } from 'react-cookie'

import { AuthProvider } from '@components'

// ---

interface IPassingProps {
  currentUser: string | null
}

// ---

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </CookiesProvider>
  )
}

export default MyApp
