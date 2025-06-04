import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import AppLogoutButton from "./AppLogoutButton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { AppCartTotal } from "./AppCartTotal";

const AppHeader = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  return (
    <header>
      <div className="fixed inset-x-0 top-0 z-50 bg-rose-200/50">
        <div className="max-w-4xl mx-auto flex h-14 items-center justify-between gap-12 px-4 backdrop-blur-xs transition">
          <div className="absolute inset-x-0 top-full h-px bg-zinc-900/7.5 transition"></div>
          <div className="flex items-center gap-5">
            <Link href="/">
            <svg viewBox="0 0 64 64" aria-hidden="true" className="h-9">
              <path
                className="fill-amber-400"
                d="M56,29V54a6,6,0,0,1-6,6H14a6,6,0,0,1-6-6V29Z"
              />
              <path
                className="fill-amber-500"
                d="M56,29V54a6,6,0,0,1-6,6H32V29Z"
              />
              <path
                className="fill-blue-300"
                d="M46.43,13.9l-2.8-6C43.08,6.68,42.26,6,41.38,6H22.14A2.61,2.61,0,0,0,20,7.66l-3.15,6A18.25,18.25,0,0,0,15,22v7c0,1.1.52,2,1.16,2H46.84c.64,0,1.16-.9,1.16-2V21.65A18.91,18.91,0,0,0,46.43,13.9Z"
              />
              <path
                className="fill-gray-700"
                d="M32,43h0a7,7,0,0,1,7,7V60a0,0,0,0,1,0,0H25a0,0,0,0,1,0,0V50A7,7,0,0,1,32,43Z"
              />
              <path
                className="fill-gray-400"
                d="M60,21.65V29a2,2,0,0,1-2,2H43V23.37a16.44,16.44,0,0,0-2.17-8.16L35.57,6h13a4.94,4.94,0,0,1,3.9,1.88l4.82,6A12.4,12.4,0,0,1,60,21.65Z"
              />
              <path
                className="fill-gray-400"
                d="M3,21.65V29a2,2,0,0,0,2,2H20V23.37a16.44,16.44,0,0,1,2.17-8.16L27.43,6h-13a4.94,4.94,0,0,0-3.9,1.88l-4.82,6A12.4,12.4,0,0,0,3,21.65Z"
              />
              <path
                className="fill-gray-700"
                d="M39,50V60H32V43a7,7,0,0,1,7,7Z"
              />
            </svg>
            </Link>
          </div>
          <div className="flex items-center gap-5">

            {
              session && <div className="flex gap-4">
                ยินดีต้อนรับคุณ {session.user.name} email: {session.user.email} role: {session.user.role}
              </div>
            }
            <Link href="/cart">
            <div className="flex gap-1 p-1 border border-black rounded-sm">
                <ShoppingCart className="h-5 w-5" />
                <AppCartTotal />
            </div>
            </Link>
            <div className="flex gap-4">
              <Link
                className="inline-flex justify-center text-center gap-0.5 overflow-hidden rounded-full bg-zinc-900 px-3 py-1 text-sm/6 font-medium text-white transition hover:bg-zinc-700"
                href="/contact"
              >
                ติดต่อเรา
              </Link>
              <Link
                className="inline-flex justify-center text-center gap-0.5 overflow-hidden rounded-full bg-zinc-900 px-3 py-1 text-sm/6 font-medium text-white transition hover:bg-zinc-700"
                href="/product"
              >
                สินค้าทั้งหมด
              </Link>
            </div>
              
            {
              !session && <div className="flex gap-2">
                  <Link
                      className="inline-flex justify-center text-center gap-0.5 overflow-hidden rounded-full bg-zinc-900 px-3 py-1 text-sm/6 font-medium text-white transition hover:bg-zinc-700"
                      href="/login"
                    >
                      ลงชื่อเข้าใช้
                    </Link>
                    <Link
                      className="inline-flex justify-center gap-0.5 overflow-hidden rounded-full bg-gray-400 px-3 py-1 text-sm/6 font-medium text-white transition hover:bg-zinc-700"
                      href="/signup"
                    >
                      สมัครสมาชิก
                    </Link>
                </div>
            }

            {
              session && <AppLogoutButton />
            }

          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
