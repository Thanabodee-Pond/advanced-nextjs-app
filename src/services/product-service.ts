import 'server-only';

import conn from "@/db";
import { desc, eq } from 'drizzle-orm';
import { product } from '@/db/schema';
import path from 'path';
import { unlinkSync } from 'fs';

const db = await conn;

export async function getProductService() {
    return await db.query.product.findMany({
        orderBy: desc(product.id),
        with: {
            productImages: true
        }
    });
}

export async function getProductByIdService(id: number) {
    return await db.query.product.findMany({
        where: eq(product.id, id),
        orderBy: desc(product.id),
        with: {
            productImages: true
        }
    });
}

export async function deleteProductServiceById(id: number) {
    return await db.delete(product).where(eq(product.id, id));
}

export async function deleteImagesFromServer(images: { imageName: string }[]) {
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');

    for (const item of images) {
        const imagePath = path.join(uploadDir, item.imageName);
        unlinkSync(imagePath);
    }
}