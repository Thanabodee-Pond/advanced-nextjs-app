import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="relative flex h-full flex-col px-4 pt-14">
        <main className="flex-auto">
          <article className="flex h-full flex-col pt-16 pb-10">
            <div className="mx-auto max-w-2xl flex-auto">
              <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
                <div className="absolute top-0 left-1/2 ml-[-38rem] h-[25rem] w-[81.25rem]">
                  <div className="absolute inset-0 bg-linear-to-r from-[#ef2a07] to-[#f5f569] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
                    <svg
                      aria-hidden="true"
                      className="/2.5 /5 absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay"
                    >
                      <defs>
                        <pattern
                          id=":S1:"
                          width="72"
                          height="56"
                          patternUnits="userSpaceOnUse"
                          x="-12"
                          y="4"
                        >
                          <path d="M.5 56V.5H72" fill="none"></path>
                        </pattern>
                      </defs>
                      <rect
                        width="100%"
                        height="100%"
                        strokeWidth="0"
                        fill="url(#:S1:)"
                      ></rect>
                      <svg x="-12" y="4" className="overflow-visible">
                        <rect
                          strokeWidth="0"
                          width="73"
                          height="57"
                          x="288"
                          y="168"
                        ></rect>
                        <rect
                          strokeWidth="0"
                          width="73"
                          height="57"
                          x="144"
                          y="56"
                        ></rect>
                        <rect
                          strokeWidth="0"
                          width="73"
                          height="57"
                          x="504"
                          y="168"
                        ></rect>
                        <rect
                          strokeWidth="0"
                          width="73"
                          height="57"
                          x="720"
                          y="336"
                        ></rect>
                      </svg>
                    </svg>
                  </div>
                </div>
              </div>
              <h1 className="text-2xl/8 font-bold text-zinc-950">
                ยินดีต้อนรับสู่ร้านค้าของเรา
              </h1>
              <p className="mt-2 text-base/7 text-zinc-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci est ad quis neque perspiciatis labore itaque quidem
                quod, quisquam nesciunt? Error in aspernatur quo magnam
                voluptate, accusamus dignissimos! Aliquam, nesciunt.
              </p>
              <div className="mt-6 mb-16 flex gap-3">
                <Link
                  className="inline-flex justify-center gap-0.5 overflow-hidden rounded-full bg-zinc-900 px-3 py-1 text-sm/6 font-medium text-white transition hover:bg-zinc-700"
                  href="/product"
                >
                  เลือกซื้อสินค้า
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    className="mt-0.5 -mr-1 h-5 w-5"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
                    ></path>
                  </svg>
                </Link>
                <a
                  className="inline-flex justify-center gap-0.5 overflow-hidden rounded-full px-3 py-1 text-sm/6 font-medium text-zinc-700 ring-1 ring-zinc-900/10 transition ring-inset hover:bg-zinc-900/2.5 hover:text-zinc-900"
                  href="/contact"
                >
                  ติดต่อเรา
                </a>
              </div>
              <h2
                className="scroll-mt-24 text-lg/7 font-semibold text-zinc-900"
                id="getting-started"
              >
                เกี่ยวกับเรา
              </h2>
              <p className="lead mt-2 mb-6 text-base/7 text-zinc-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                temporibus incidunt voluptates, sequi ipsam doloremque expedita
                veniam, neque minima nostrum illum. Ad error expedita fuga
                perferendis maiores delectus rem quis.
              </p>

              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                eos, doloribus in accusamus at quibusdam commodi impedit nihil
                maiores sapiente iusto cum atque quidem dicta reiciendis amet,
                veritatis ex autem.
              </p>

              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                eos, doloribus in accusamus at quibusdam commodi impedit nihil
                maiores sapiente iusto cum atque quidem dicta reiciendis amet,
                veritatis ex autem.
              </p>

            </div>
          </article>
        </main>
      </div>
    </>
  );
}