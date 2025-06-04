/* eslint-disable @typescript-eslint/no-explicit-any */
"use cilent"

import { Button } from "@/components/ui/button"
import AddProductForm from "./product/AddProductForm"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { DataTable } from "./product/data-table"
import { getColumns } from "./product/columns"
import { AppLoading } from "@/components/app/AppLoading"

const DProduct = () => {
  const [open, setOpen] = useState(false);
  const { data, isFetching, refetch } = useQuery({
    queryKey: ['product'],
    queryFn: async () => {
      const response = await axios.get<any[]>('/api/product');
      return response.data;
    }
  });

  const handleOpen = () => {
    setOpen(true);
  }

  if (isFetching) {
    return <AppLoading />
  }

  return (
    <div className="p-4 my-auto">
      <Button onClick={handleOpen} className='ml-10'>เพิ่มสินค้า</Button>
      <AddProductForm open={open} setOpen={setOpen} refetch={refetch} />
      <div className="my-3 mx-auto">
      {
        data && <DataTable columns={getColumns()} data={data} />
      }
      </div>
    </div>
  )
}

export default DProduct
