import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST(req) {
   
    //console.log(token);
    const serializedCookie = serialize("sessionToken", '', {
        httpOnly: true,
        secure: 'development',
        maxAge:-1,
        path: '/',
    });
    return NextResponse.json({
        message: 'Logout succeeded'
    }, {
        headers: {
            'Set-Cookie': serializedCookie
        }
    });
}