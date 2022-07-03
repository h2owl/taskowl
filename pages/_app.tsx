import { SessionProvider } from "next-auth/react"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import { useRouter } from "next/router"

function MyApp({ Component, pageProps:{ session, ...pageProps } }: AppProps) {
  const router = useRouter()
  const [pageLoading, setPageLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url:string) => url !== router.asPath && setPageLoading(true)
    const handleComplete = () => setPageLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })
  const loadingComponent = (<h2>Loading...</h2>)
  return <>
      {pageLoading && loadingComponent}
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
}

export default MyApp
