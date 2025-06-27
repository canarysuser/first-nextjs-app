'use client'
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';
import React from 'react'

 function LogoutPage() {

    const logout = async () => { 

    
    let response = await fetch("/api/auth/logout", {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });
    redirect("/home")
    } 
    logout();
  return (
    <div>page</div>
  )
}

export default LogoutPage