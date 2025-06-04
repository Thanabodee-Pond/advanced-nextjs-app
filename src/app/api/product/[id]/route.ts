import { deleteImagesFromServer, deleteProductServiceById, getProductByIdService } from "@/services/product-service";
import { NextRequest, NextResponse } from "next/server";

// [DELETE] localhost:3000/api/product/3
export async function DELETE(req: NextRequest, {params}: { params: Promise<{id: string}> }) {
     try {
        const productId = (await params).id;

        const product = await getProductByIdService(Number(productId));
        if (!product) {
            return NextResponse.json({message: 'ไม่พบข้อมูลนี้ในระบบ'}, {status: 404});
        }

        // delete images
        await deleteImagesFromServer(product[0].productImages);
        
        // delete row
        await deleteProductServiceById(Number(productId));

        return NextResponse.json({
            message: 'ลบข้อมูลสำเร็จ'
        });

     } catch (error) {
        return NextResponse.json(error, {status: 500});
     }   
}