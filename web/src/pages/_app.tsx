import { AppContext, AppInitialProps, AppProps } from 'next/app'
import '../styles/globals.css'

interface IPassingProps {
  currentUser: string | null
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// MyApp.getInitialProps = async ({
//   Component,
//   ctx
// }: AppContext): Promise<(AppInitialProps & IPassingProps) | {}> => {
//   let pageProps = {}
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx)
//   }

//   // @ts-ignore
//   pageProps.query = ctx.query

//   return { pageProps }
// }

export default MyApp
