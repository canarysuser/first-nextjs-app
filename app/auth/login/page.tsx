import React from 'react'
import LoginComponent from './LoginComponent'

async function LoginPage() {


  return (
    <div className='card w-96 bg-base-100 card-xs shadow-sm m-auto mt-5'>
        <h2 className='card-title bg-blue-500 text-center text-4xl text-white p-4'>
            Login
        </h2>
        <div className='card-body text-xl'>
            <LoginComponent/>
        </div>
    </div>
  )
}

export default LoginPage