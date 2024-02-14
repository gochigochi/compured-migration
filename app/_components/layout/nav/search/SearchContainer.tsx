"use client"

import Search from './Search'
import useToggle from '@/app/_hooks/useToggle'

const SearchContainer = () => {

    const { open, setOpen } = useToggle()

    return (
        <>
            <i className="cursor-pointer" onClick={() => setOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </i>
            { open ? <Search action={() => setOpen(false)} /> : null }
        </>
    )
}

export default SearchContainer