"use client"

import useToggle from "@/app/_hooks/useToggle"
import Menu from "./Menu"
import { Categories } from "@/app/types"

const CategoriesMenu = ({ categories } : { categories: Categories}) => {

    const { open, setOpen } = useToggle()

    return (
        <>
            <i className="cursor-pointer" onClick={() => setOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                </svg>
            </i>
            { open ? <Menu categories={categories} action={() => setOpen(false)} /> : null }
        </>
    )
}

export default CategoriesMenu