/*
 ** Description :
 */

import '../styles/globals.css'

import { AppProps } from 'next/app'

import { AuthCtxProvider } from '@components'

// ---

interface IPassingProps {
  currentUser: string | null
}

// ---

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthCtxProvider>
      <Component {...pageProps} />
    </AuthCtxProvider>
  )
}

export default MyApp
