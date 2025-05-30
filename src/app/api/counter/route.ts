import { NextResponse } from "next/server"


export async function GET(){
    const count = 5
    return NextResponse.json({count}, {status: 200})
}