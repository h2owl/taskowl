import type { NextPage } from 'next'
import { users } from '@prisma/client';
import React,{ lazy, Suspense } from 'react'


type Props = {
    user: users
};

export async function getServerSideProps() {
    // Fetch data from external API
    let apiURL = ((typeof window !== 'undefined') ? location.origin : process.env.API_HOST_AT_SERVER) + "/api/hello"
    const res = await fetch(apiURL)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { user: data } }
}

const UserProfileEditForm = (props: Props) => {
    return (
        <>
            <p>{props.user.id.toString()}</p>
            <p>{props.user.name.toString()}</p>
            <p>{props.user.email.toString()}</p>
        </>
    )
}

const UserProfileEdit: NextPage<Props> = (props:Props) => {
    // console.log(ReactDOMServer.renderToStaticMarkup(<footer></footer>))
    console.log("data:")
    console.log(props)
    return (
        <>
            <UserProfileEditForm user={props.user} />
        </>
    )
}
export default UserProfileEdit