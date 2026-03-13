import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, {params}: any){
    const productId = params.id;
    const product = await prisma.product.findFirst({
        where: {
            id: productId
        }
    })
    if(!product){
        return NextResponse.json({
            success: false,
            message: "Something went wrong while getting the product"
        })
    }
    return NextResponse.json({
        data: product,
        success: true,
        message: "Product fetched Successfully"
    })
}

export async function DELETE(req: NextRequest, { params }: any) {
  const productId = params.id;

  try {
    const product = await prisma.product.delete({
      where: {
        id: productId
      }
    });

    return NextResponse.json({
      success: true,
      message: "Product deleted successfully",
      data: product
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Error deleting product"
    });
  }
}

export async function PATCH(req: NextRequest, { params }: any) {
  const productId = params.id;

  try {
    const body = await req.json();

    const updatedProduct = await prisma.product.update({
      where: {
        id: productId
      },
      data: {
        ...body
      }
    });

    return NextResponse.json({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Error updating product"
    });
  }
}