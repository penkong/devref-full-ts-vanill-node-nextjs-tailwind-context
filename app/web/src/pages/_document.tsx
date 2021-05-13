/*
 ** Description :
      Document is only rendered in the server, event handlers like onClick won't work.
 */

import { PageProvider } from '@components'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps
} from 'next/document'

// ---

export default class MyDocument extends Document<DocumentProps> {
  renderDocument() {}
  render() {
    return (
      <Html lang="en">
        {/*can use DOMAttributes*/}
        <Head>
          <head>
            <meta charSet="utf-8" />
            <meta name="text" content="" />
            <meta name="author" content="" />
            <meta name="description" content="" />
            <meta name="keywords" content="" />
            <title>From Document</title>
            <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </head>
        </Head>
        <body>
          <PageProvider>
            <Main />
          </PageProvider>
          <NextScript />
        </body>
      </Html>
    )
  }
}
