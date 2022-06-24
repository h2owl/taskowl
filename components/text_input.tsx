import { useState, useEffect } from 'react';

export default function TextInput({onChange}: any) {
    const [value, setValue] = useState("");
    useEffect( () => {
        console.log("value is " + value);
    });
    return (
        <div>
            <input type="text" value={value} onChange={(ev:any) => {
                setValue(ev.target.value); 
                if (onChange) {
                    onChange();
                }
            } } />
        </div>
    )
}