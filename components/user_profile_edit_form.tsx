import { users } from '@prisma/client';
import React from 'react'
import {useUserProfileEdit} from './hooks/userProfileEditFormHook'

type UserProfileEditFormProps = {
    user: users
};

const UserProfileEditForm = (props: UserProfileEditFormProps) => {
    /*const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = {
          name: event.currentTarget.name.value,
          email: event.currentTarget.email.value,
        }
    
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
        alert(JSONdata)
    }*/
    const { setName, setEmail, submitUserProfileForm } = useUserProfileEdit();

    return (
        <form onSubmit={submitUserProfileForm}>
            <fieldset disabled={false}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" defaultValue={props.user.name.toString()} onChange={(e)=>{setName(e.target.value)}} required />

                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" defaultValue={props.user.email.toString()} onChange={(e)=>{setEmail(e.target.value)}} required />

                <button type="submit">Submit</button>
            </fieldset>
        </form>
    )
}

export {type UserProfileEditFormProps, UserProfileEditForm}