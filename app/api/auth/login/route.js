import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { authenticate } from "../../../lib/userDbActions";
import { serialize } from "cookie";

export async function POST(req) {
    const { userName, password } = await req.json();

    let inputUser = { userId: 0, userName: userName, password: password };
   //// console.log('api', inputUser)
    var user = authenticate(inputUser);
   // console.log(user)
    if (!user || user == null) {
        return NextResponse.json({
            message: 'Invalid Credentials'
        }, {
            status: 401,
            statusText: 'Unauthorized access'
        });
    }
    const token = jwt.sign({ userName },
        '59c5c62b5542360236937db6d6b7ae21',
        {
            expiresIn: '1h'
        }
    );
    //console.log(token);
    const serializedCookie = serialize("sessionToken", token, {
        httpOnly: true,
        secure: 'development',
        maxAge: 60 * 60,
        path: '/',
    });
    return NextResponse.json({
        message: 'Authentication succeeded'
    }, {
        headers: {
            'Set-Cookie': serializedCookie
        }
    });
}