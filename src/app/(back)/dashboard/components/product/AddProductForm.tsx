import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UploadPreview } from './UploadPreview'
import axios from 'axios'
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query'

const formSchema = z.object({
  title: z.string().min(1, "ชื่อสินค้าห้ามว่าง"),
  price: z.preprocess(
    (val) => (val === "" ? undefined : Number(val)),
    z.number({
      required_error: "ราคาสินค้าห้ามว่าง",
      invalid_type_error: "ราคาต้องเป็นตัวเลข",
    }).positive("ราคาสินค้าต้องมากกว่า 0")
  ),
  image: z.preprocess(
    (val) => (val === undefined || val === null ? [] : val),
    z
      .array(z.instanceof(File))
      .refine((files) => files.length > 0, {
        message: "ภาพสินค้าห้ามว่าง",
      })
      .refine((files) => files.length <= 5, {
        message: "ภาพสินค้าห้ามเกิน 5 รูป",
      })
  ),
});


type formValues = z.infer<typeof formSchema>;

type AddProductFormProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<unknown[], Error>>
}

const AddProductForm = ({ open, setOpen, refetch }: AddProductFormProps) => {
  const { register, handleSubmit, control, reset, formState: { isSubmitting, errors } } = useForm({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: formValues) => {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('price', data.price.toString());
      for (const item of data.image) {
        formData.append('images', item);
      }
      // call backend api
      const response = await axios.post('/api/product', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log(response.data);
      setOpen(false);
      reset();
      await refetch();
  }
      
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>เพิ่มข้อมูลสินค้า</DialogTitle>
          <DialogDescription>
            ตามรูปภาพเพื่ออัปโหลดได้
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                ชื่อสินค้า
              </Label>
              <Input id="title" className="col-span-3" {...register("title")}/>
              {
                errors.title && (
                  <p className="text-red-500  text-sm col-span-4 mx-auto">{errors.title.message}</p>
                )
              }
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                ราคา
              </Label>
              <Input id="price" className="col-span-3" {...register("price")} />
              {
                errors.price && (
                  <p className="text-red-500  text-sm col-span-4 mx-auto">{errors.price.message}</p>
                )
              }
            </div>
          </div>

          <Controller
            control={control}
            name="image"
            render={( { field }) => (
              <UploadPreview onChange={field.onChange} value={field.value as File[]}  error={errors.image?.message} />
            )}
          />


        <DialogFooter>
          <Button type="submit" disabled={isSubmitting} >
            {isSubmitting ? "กำลังบันทึก"  : "บันทึก"}
          </Button>
        </DialogFooter>
          </form>    
      </DialogContent>
    </Dialog>
  )
}

export default AddProductForm
