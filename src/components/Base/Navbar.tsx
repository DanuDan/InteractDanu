'use client'
import { useAppDispatch, useAppSelector } from "@/hooks/hooks"
import { setShow } from "@/store/slices/sidebarSlice"
import Image from "next/image"
import { useState } from "react"

export default function BaseNavbar() {
    const dispatch = useAppDispatch()
    const sidebar = useAppSelector((state) => state.sidebar)

    function toggle() {
        dispatch(setShow(!sidebar.show))
    }

    return (
        <>
            <nav className="bg-[#151A2E] shadow-lg w-full py-3 px-2 md:px-20 flex items-center z-30 top-0 left-0 border-b border-gray-600 ">
                <div className="w-full flex justify-between items-center space-x-4">
                    <button className="px-2" onClick={toggle}>
                        <Image src={require("@/assetts/Logo.svg")} className="md:hidden 2xl:w-auto" alt="Logo" />
                    </button>
                    <div className="w-auto flex items-center space-x-4">
                        <div className="w-10 h-10 relative bg-slate-400 rounded-full border-white border">
                            <div className="absolute h-2 w-2 rounded-full bg-[#5CCC5A] top-1.5 -right-0.5" />
                        </div>
                        <div className="text-white text-base font-semibold ">
                            Hello, User!
                        </div>
                    </div>
                </div>
            </nav>
        </>

    )
}