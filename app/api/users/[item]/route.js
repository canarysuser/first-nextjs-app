import { NextResponse } from "next/server";

const names = [{"number": "one"}, {"number": "two"}, {"number": "three"}];

export async function GET(req, {params}) {
    const { item } = await params;
    const searchParams = req.nextUrl.searchParams; 
    const sequence = searchParams.get('sequence');
    console.log(sequence)
    if (item == 1) {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json();
        return NextResponse.json(data);
    } else { 
        return NextResponse.json(names)
    }
}