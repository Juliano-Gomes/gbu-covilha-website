import Link from "next/link"
import { BsInstagram } from "react-icons/bs"

export const FooterComponent = ()=>{
    return(
        <section className="w-screen  flex items-center justify-center gap-4 p-3 min-h-[30vh]">
            <div className="flex flex-col gap-2 w-[90%]  p-2 sm:w-[550px] md:w-[90%]">
                <h1 className="text-2xl font-sans">Contatos</h1>
                <div className="flex flex-col gap-2">
                    <Link href={"https://www.instagram.com/gbucovilha/"} className="font-mono flex text-white  underline decoration-white  gap-2 items-center font-medium">
                        <div className="rounded bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]">
                            <BsInstagram color="purple"/>
                        </div>
                        <span className="text-[13px]">Instagram GBU - Covilha</span>
                    </Link>
                    <Link href={"https://www.instagram.com/gbuportugal/"} className="font-mono flex text-white underline decoration-[#fff]  gap-2 items-center font-medium">
                        <div className="rounded bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]">
                            <BsInstagram color="purple"/>
                        </div>
                        <span className="text-[13px]">Instagram GBU - nacional</span>
                    </Link>

                </div>

            </div>
        </section>
    )
}