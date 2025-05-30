import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    try {
        const message = 'hola desde el api'
        return NextResponse.json({message}, {status: 200})
    } catch (error) {
        const messageError = error instanceof Error ? error.message : 'algo salio mal'
        return NextResponse.json({message: messageError}, {status: 500})
    }
}