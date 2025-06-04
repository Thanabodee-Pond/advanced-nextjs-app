"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Trash } from 'lucide-react';
import { toast } from "sonner";
import axios from "axios";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Product = {
  id: string
  title: string
  price: number
}

export const getColumns= (): ColumnDef<Product>[] => [
  {
    accessorKey: "id",
    header: "รหัส",
  },
  {
    accessorKey: "title",
    header: "ชื่อสินค้า",
  },
  {
    accessorKey: "price",
    header: "ราคา",
  },
  {
    id: 'actions',
    cell: ({ row }) => {

        const handleDelete = async () => {
            if (window.confirm(`แน่ใจว่าต้องการลบข้อมูล ${row.original.title}`)) {
                try {
                const response = await axios.delete(`/api/product/${row.original.id}`);
                toast.success(response.data.message);
                } catch (error) {
                    console.log(error);
                    toast.error('ไม่สามารถลบข้อมูลได้');
                }
            }
        }

        return (
            <Button className="bg-red-400" size="icon" onClick={handleDelete}>
                <Trash />
            </Button>
        )
    }
  }
]
