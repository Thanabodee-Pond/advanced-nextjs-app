import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { getProductByIdService } from "@/services/product-service";
import { AppCartButton } from "@/components/app/AppCartButton";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const productId = (await params).id;

  const [product] = await getProductByIdService(Number(productId));

  return (
    <div className="mx-auto max-w-4xl mt-20">
      <h1 className="text-2xl">
       Name: {product.title} price: {product.price} id: {product.id}
      </h1>
      <Carousel>
        <CarouselContent>
          {product.productImages.map((item) => {
            return (
              <CarouselItem key={item.id}>
                <Image
                  src={`/uploads/${item.imageName}`}
                  alt={item.imageName}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: 400 }}
                  priority
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <hr />
       <AppCartButton product={product} />  
    </div>
  );
}