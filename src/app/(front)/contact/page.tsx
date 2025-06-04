import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="grid place-items-center mt-20 mx-auto max-w-2xl">
      <h2 className="text-3xl text-blue-700">ติดต่อเรา</h2>
      <p className="font-sarabun text-2xl">สวัสดี contact page</p>
      <p className="font-k2d text-2xl">สวัสดี contact page</p>
      <Separator className="mt-5 bg-red-500" />
      <div className="m-10">
        <Button variant="outline" asChild>
          <Link href="/">Go to Home Page</Link>
        </Button>
      </div>
    </div>
  );
}
