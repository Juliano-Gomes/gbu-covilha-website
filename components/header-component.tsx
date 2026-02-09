"use client"

import { House } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export const Header=()=>{
    const [open,setOpen] = useState(false)
    return(
        <section className="fixed z-[478598349] bg-[#617a8b] flex p-2 items-center justify-around  font-sans top-0 min-w-[100%] w-screen h-[80px]">
            <section className="group cursor-pointer flex gap-2 items-center">
                <div className="flex text-[25px] ">
                    <span className="text-[#83e5d5]">G</span>
                    <span className="text-[#fff069]">B</span>
                    <span className="text-[#ff9385]">U</span>
                </div>
                <span className="text-[#fff069] text-sm transition-all group-hover:translate-x-[15px] translate-y-[-9px]">
                    covilha
                </span>
            </section>
            <section className="w-[360px]  hidden p-2 sm:flex items-center justify-center">
                <ul className="flex gap-4 font-sans">
                    <li>
                        <Link href={"/"} className="flex gap-1 hover:text-[#83e5d5] transition-all hover:font-bold">
                            <House size={20}/>
                            <span>
                                home
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/sobre"} className="flex gap-1 hover:text-[#ff9385] transition-all hover:font-bold">
                            Sobre a GBU
                        </Link>
                    </li>
                    <li>
                        <Link className="flex gap-1 hover:text-[#fff069] transition-all hover:font-bold" href={"https://gbu.pt/grupos-locais-2/"}>
                            GBU na sua cidade
                        </Link>
                    </li>
                </ul>
            </section>
            <section className="p-2  flex sm:hidden transition-all ">
                <div onClick={()=>setOpen(!open)} className="flex cursor-pointer  gap-2 font-sans flex-row items-center text-[18px]">
                    <div className="flex flex-col gap-1">
                        <span className="bg-[#f3f4f6] rounded h-[1px] w-[20px]"></span>
                        <span className="bg-[#f3f4f6] rounded h-[1px] w-[15px]"></span>
                        <span className="bg-[#f3f4f6] rounded h-[1px] w-[20px]"></span>
                    </div>
                    <span className="font-mono font-medium">
                        Menu
                    </span>
                </div>
                <section className={`z-[759345] absolute left-[15px] top-[110%]  p-2 ${open ? "flex" : "hidden" } transition-all rounded ease-in-out bg-[#6F8FAF] duration-150 w-[95%] sm:w-[80%]  h-[280px] flex  gap-2  `}>
                    <div className="flex flex-col">
                        <ul className="flex gap-4 flex-col p-4 font-sans">
                            <li className="hover:bg-[#fff069] w-[250px] p-2 rounded transition-all">
                                <Link href={"/"} className="flex gap-1  hover:text-[#83e5d5] transition-all hover:font-bold">
                                    <House size={20}/>
                                    <span>
                                        home
                                    </span>
                                </Link>
                            </li>
                            <li className="hover:bg-[#83e5d5] w-[250px] p-2 rounded transition-all">
                                <Link href={"/sobre"} className="flex gap-1 hover:text-[#ff9385] transition-all hover:font-bold">
                                    Sobre a GBU
                                </Link>
                            </li>
                            <li className="hover:bg-[#ff9385] w-[250px] p-2 rounded transition-all" >
                                <Link className="flex gap-1 hover:text-[#fff069] transition-all hover:font-bold" href={"https://gbu.pt/grupos-locais-2/"}>
                                    GBU na sua cidade
                                </Link>
                            </li>
                        </ul>
                    </div>       
                </section>
            </section>
        </section>
    )
}