import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

type Product = {
  id: number;
  createdAt: string | null;
  title: string;
  price: string;
  productImages: {
    id: number;
    createdAt: string | null;
    productId: number;
    imageName: string;
  }[];
};

type ProductListProps = {
  products: Product[];
};

const AppProductDisplay = ({ products }: ProductListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      {products.map((product) => (
        <Card
          key={product.id}
        >
          {product.productImages.length > 0 && (
            <CardContent className="p-2" key={product.productImages[0].id}>
              <Image
                src={`/uploads/${product.productImages[0].imageName}`}
                alt={product.productImages[0].imageName}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: 150 }}
                priority
              />
            </CardContent>
          )}
          <CardHeader>
            <CardTitle>{product.title}</CardTitle>
            <CardDescription>ราคา: {product.price}</CardDescription>
          </CardHeader>
          <CardFooter>

            <Button className="ml-auto" asChild>
                <Link href={`/product/${product.id}`}>
                  เพิ่มเติม
                </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default AppProductDisplay;