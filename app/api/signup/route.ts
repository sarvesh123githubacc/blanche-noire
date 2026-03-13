import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const user = await req.json();
    if (!user) {
        return NextResponse.json({
            success: false,
            message: "Enter some data"
        })
    }
    const createdUser = await prisma.user.create({
        data: user
    })

    if (!createdUser) {
        return NextResponse.json({
            success: false,
            message: "Problem in creating user"
        })
    }
    return NextResponse.json({
            success: true,
            message: "User created",
            data: createdUser
        })
}