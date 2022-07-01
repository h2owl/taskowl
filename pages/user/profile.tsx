import type { NextPage } from 'next'
import React, { Suspense } from 'react'
import Layout from '../../components/layout'
import { useAllUsersSWR } from '../../components/hooks/useUserSWR'
import ReactDOMServer from 'react-dom/server';

const UserProfiler = () => {
    const user = useAllUsersSWR()
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <div>{ (user && user.data) ? JSON.stringify(user.data) : "hoge"}</div>
        </Suspense>
    )
}
const UserProfile: NextPage = () => {
    // console.log(ReactDOMServer.renderToStaticMarkup(<footer></footer>))
    return (
        <Layout>
            <UserProfiler />
        </Layout>
    )
}
export default UserProfile