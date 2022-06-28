import { SessionProvider } from "next-auth/react"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps:{ session, ...pageProps } }: AppProps) {
  return <>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
}

export default MyApp
