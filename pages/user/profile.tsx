import type { NextPage } from 'next'
import Link from "next/link";
import React, { Suspense } from 'react'
import { useAllUsersSWR } from '../../components/hooks/useUserSWR'
// import ReactDOMServer from 'react-dom/server';

const UserProfiler = () => {
    const user = useAllUsersSWR()
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <div>{ (user && user.data) ? JSON.stringify(user.data) : "hoge"}</div>
            <Link href="/user/profile/edit">Edit</Link>
        </Suspense>
    )
}
const UserProfile: NextPage = () => {
    // console.log(ReactDOMServer.renderToStaticMarkup(<footer></footer>))
    return (
        <UserProfiler />
    )
}
export default UserProfile