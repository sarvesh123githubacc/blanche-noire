import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: NextResponse) {
    const body = await req.json();
    try {
        let cart = await prisma.cart.findFirst({
            where: {
                userId: body.userId
            }
        })
        if (!cart) {
            cart = await prisma.cart.create({
                data: {
                    userId: body.userId
                }
            })
        }
        const itemExistsInCart = await prisma.cartItem.findUnique({
            where: {
                cartId_productId: {
                    cartId: cart.id,
                    productId: body.productId
                }
            }
        })

        if (itemExistsInCart) {
            const updatedItem = await prisma.cartItem.update({
                where: {
                    id: itemExistsInCart.id
                },
                data: {
                    quantity: itemExistsInCart.quantity + 1
                }
            })
            return NextResponse.json({
                success: true,
                data: updatedItem
            });
        }

        const cartItem = await prisma.cartItem.create({
            data: {
                cartId: cart.id,
                productId: body.productId,
                quantity: 1
            }
        })
        return NextResponse.json({
            success: true,
            data: cartItem
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Failed to add product to cart"
        });
    }
}