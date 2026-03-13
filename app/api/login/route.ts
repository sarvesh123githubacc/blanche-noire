import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){

    const body = await req.json();

    const user = await prisma.user.findFirst({
        where: {
            email: body.email
        }
    })
    if(!user){
        return NextResponse.json({
            success: false,
            message: "User not found"
        })
    }

    if (user?.password == body?.password) {
        const res = NextResponse.json({
            success: true,
            user
    })
    return res
    }

    return NextResponse.json({
        success: false
    })
}