import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, {params}: any){
    const userId = params.id
    const cart = await prisma.cart.findFirst({
        where: {
            userId: userId
        }, 
        include: {
            CartItem: {
                include: {
                    Product: true
                }
            }
        }
    })
    if(!cart){
        return NextResponse.json({
            success: true,
            data: {
                items: [],
                totalItems: 0,
                userId: userId,
                message: "Cart is Empty"
            }
        })
    }
    return NextResponse.json({
        success: true,
        data: cart,
        message: "Cart fetched Successfully!"
    })
}