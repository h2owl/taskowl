import type { NextPage } from 'next'
import React,{ lazy, Suspense } from 'react'
import {UserProfileEditForm, UserProfileEditFormProps} from '../../../components/user_profile_edit_form'

export async function getServerSideProps() {
    // Fetch data from external API
    let apiURL = ((typeof window !== 'undefined') ? location.origin : process.env.API_HOST_AT_SERVER) + "/api/hello"
    const res = await fetch(apiURL)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { user: data } }
}

const UserProfileEdit: NextPage<UserProfileEditFormProps> = (props:UserProfileEditFormProps) => {
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