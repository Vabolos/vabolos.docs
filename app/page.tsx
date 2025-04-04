import Link from "next/link"

import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-[86.5vh] flex flex-col justify-center items-center text-center px-2 py-8">
      <h1 className="text-4xl font-bold mb-4 sm:text-7xl">Vabolos.docs</h1>
      <p className="max-w-[600px] text-foreground mb-8 sm:text-base">
        My documentation site is a place where I can share my knowledge and experiences with the world. 
        I hope you find it useful.
      </p>
      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          To docs
        </Link>
      </div>
    </div>
  )
}
