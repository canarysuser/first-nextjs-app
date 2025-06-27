import * as jose  from "jose";
import { NextResponse } from "next/server";



export async function middleware(request) { 
    const sessionToken = request.cookies.get('sessionToken')?.value; 
    let url = new URL('/auth/login', "http://localhost:3000/")

    //console.log('Session',sessionToken)
    if(!sessionToken) {
        return NextResponse.redirect(url)
    }
    //npm install jose 
    //import * as jose from "jose"
    try { 
        jose.jwtVerify(sessionToken, '59c5c62b5542360236937db6d6b7ae21')
        return NextResponse.next();
    } catch (e) { 
        return NextResponse.redirect(url);
    }
}
export const config = { 
    matcher:['/products/:path*']
}