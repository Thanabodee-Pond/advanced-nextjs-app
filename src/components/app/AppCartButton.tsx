/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "../ui/button"
import { useCartStore } from "@/lib/cart-store"

export const AppCartButton = ({product}: any) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAdd = () => {
    addItem({
      productId: product.id,
      title: product.title,
      price: product.price,
      qty: 1
    });
  }

  return (
    <Button className="mt-10" onClick={handleAdd}>
        <ShoppingCart /> เพิ่มลงในรถเข็น
    </Button>
  )
}
