import AppProductDisplay from "@/components/app/AppProductDisplay";
import { getProductService } from "@/services/product-service";




export default async function Page() {
  const products = await getProductService();

    return (
      <div className="pt-20 pb-20 space-x-2 mx-auto max-w-3xl">
        <AppProductDisplay products={products} />
      </div>
    );
  }
  
  