import Link from "next/link"
import Image from "next/image"
import CategoriesMenu from "./categories_menu/CategoriesMenu"
import { getCategories } from "@/app/_lib/getCategories"
import SearchContainer from "./search/SearchContainer"

const NavBar = async () => {

  const categories = await getCategories()

  return (
    <header>
      <div className="w-full max-w-screen-2xl mx-auto grid grid-cols- px-6 py-4">
        <div className="relative w-48 h-12 col-span-3">
          <Link href="/">
            <Image
              className="object-contain"
              src="https://drive.google.com/uc?export=view&id=1BLm0zCbENDbmXD4BNX7myU_eDjGXuMG8"
              alt="logo compured"
              fill
              priority
              sizes="(max-width: 650px) 50vw, 25vw"
            />
          </Link>
        </div>
        <nav className="col-start-12 col-span-1 flex gap-6 justify-self-end self-center">
          <CategoriesMenu categories={categories} />
          <SearchContainer />
          <i className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </i>
        </nav>
      </div>
    </header>
  )
}

export default NavBar