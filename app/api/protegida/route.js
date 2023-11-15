import { getServerSession } from "next-auth";
import { authOption } from "../auth/[...nextauth]/route"
import { NextResponse } from "next/server";

export async function GET(){
    const session = await getServerSession(authOption)
    if(!session) {
        return NextResponse.json({
            message: "Rota Logada"
        })
    }
    return NextResponse.json({
        name: session.user.name
    })
}