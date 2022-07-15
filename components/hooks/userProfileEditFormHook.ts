import { useState } from 'react';
import { User } from "@prisma/client"

export const useUserProfileEdit = (editUser: User) => {
    const [networking, setNetworking] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const submitUserProfileForm = async (e:React.FormEvent) => {
        setNetworking(true)
        e.preventDefault()
        /*await fetch('/api/mail', {
          method: 'POST',
          body:"",
        });*/
        const data = {
            name: name,
            email: email,
        }
        const JSONdata = JSON.stringify(data)
        alert("hoge!" + JSONdata)
        setNetworking(false)
    };
    return {
        networking, setName, setEmail, submitUserProfileForm,
    };
};