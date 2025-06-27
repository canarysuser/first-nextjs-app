import { createProduct } from "@/app/lib/mongoDbActions";
import { NextResponse } from "next/server";



export async function POST(req) {
    //var clonedReq = await req.clone();
        var body = await req.json(); 
        console.log(body);
        let result = await createProduct(body);
        return NextResponse.json(body);
}


export async function GET(req) {
        
        //console.log(req);
        let item = {status: 'success'}
       return NextResponse.json(item);
}