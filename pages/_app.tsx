import { SessionProvider } from "next-auth/react"
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import { useRouter } from "next/router"

import Layout from '../components/layout'
import LoadingComponent from "../components/pageLoading";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

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
  return <>
      {pageLoading && LoadingComponent()}
      <SessionProvider session={session}>
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
}

export default MyApp
