/*
 ** Description :
 */

import { AppProps } from 'next/app'
import '../styles/globals.css'

interface IPassingProps {
  currentUser: string | null
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
