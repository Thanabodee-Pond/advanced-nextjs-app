import conn from "@/db";
import { product, productImage } from "@/db/schema";
import { handleFileUpload } from "@/services/upload-service";
import { desc } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

// [GET] localhost:3000/api/product
export async function GET() {
    const db = await conn;
    // const products = await db.select().from(product).orderBy(desc(product.id));
    const products = await db.query.product.findMany({orderBy: desc(product.id)});
    return NextResponse.json(products);
}

// [POST] localhost:3000/api/product
export async function POST(req: NextRequest) {
    try {
        
        const { files, formData } = await handleFileUpload(req);

        const title = formData.get('title') as string;
        const price = formData.get('price') as string;

        const db = await conn;
        const result = await db.insert(product).values([{title, price}]).$returningId();

        for (const file of files) {
            await db.insert(productImage).values({
                productId: result[0].id,
                imageName: file
            });
        }

        return NextResponse.json({
            message: 'บันทึกสินค้า และอัปโหลดภาพสำเร็จ',
            files
        })

    } catch (error) {
        return NextResponse.json({error: error}, { status: 500});
    }
}