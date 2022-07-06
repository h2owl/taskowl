import { useState } from 'react';

export const useUserProfileEdit = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const submitUserProfileForm = async () => {
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
    };
    return {
        setName, setEmail, submitUserProfileForm,
    };
};