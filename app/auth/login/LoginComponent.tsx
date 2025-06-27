'use client'
import { User } from '@/app/lib/definitions'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function LoginComponent() {
    const router = useRouter();
    const [item, setItem] = useState<User>({ userId: 0, userName: '', password: '' })
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        let user = { ...item };
        let response = await fetch("/api/auth/login", {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        let result = await response.json(); 
        router.push("/");
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItem({ ...item, [e.target.name]: e.target.value })
    }
    // let sessCookie = document.cookie.match("sessionToken");
    // if(sessCookie)
    //     console.log('exists')
    // else 
    //     console.log('does not exist')
    return (
        <form onSubmit={handleSubmit}>

            <label>Username</label>
            <input type="text" className='input input-success' name="userName"
                value={item.userName} onChange={handleChange} />
            <br />
            <label>Password</label>
            <input type="text" className='input input-success' name="password"
                value={item.password} onChange={handleChange} />
            <br />
            <button type="submit" className='btn btn-warning' >Sign In</button>
        </form>
    )
}

export default LoginComponent