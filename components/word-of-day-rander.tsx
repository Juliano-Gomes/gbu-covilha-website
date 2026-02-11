"use client"
import { getRandomWord } from "@/app/server/words"
import { Loader } from "lucide-react"
import { useState } from "react"

export const WordOdDay = ()=>{
    const [spin,setSpin]= useState(false)
    const [Word,setWord] = useState(()=>{
        return getRandomWord()
    })
        

    return(
        <section className="flex flex-col  w-full gap-3 sm:w-[500px] bg-[#83e5d5] min-h-[150px] rounded md:w-[550px] p-2 items-center justify-center">
            <p className="font-sans p-2">
                <q>
                    {Word.versiculo}
                </q>
            </p>
            <div className="flex items-center w-[90%] justify-between">
                <span className="flex items-center bg-[#fff069] font-medium transition-all cursor-pointer gap-3 font-mono text-[14px] justify-center  p-2 rounded" onClick={()=>{
                    setSpin(true)
                    setTimeout(()=>{
                        setSpin(false)
                        setWord(()=>getRandomWord())
                    },1000)
                    }
                }>
                    {spin && <Loader className={`animate-spin size-[18px]`}/>}
                     mais
                </span>
                <span className="font-mono text-[14px]  p-2 w-full flex justify-end">{Word.localizacao}</span>
            </div>
        </section>
    )
}