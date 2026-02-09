import { PhotoCard } from "@/components/photoCard";
import { MapPin } from "lucide-react";


export default async function HomePage(){
    return(
        <section className="pt-[90px] w-full flex items-center ">
            <section className="h-[100vh] md:flex-row md:items-start md:justify-center flex flex-col items-center justify-start w-full p-4 gap-4">
                <PhotoCard/>
                <section className="p-2 flex flex-col w-[90%] gap-3 sm:w-[500px] md:w-[550px]">
                    <h1 className="font-mono  text-2xl text-[#fff069]">GBU Covilha</h1>
                    <div className="flex flex-col gap-4">
                        <p className="font-sans">
                            O Grupo Bíblico Universitário tem na sua génese a iniciativa estudantil, sendo portanto um movimento feito de estudantes para estudantes. São os estudantes que assumem os principais papéis de liderança nos vários grupos locais distribuídos pelo país.
                        </p>

                        <div>
                            <h1 className="items-center text-[13px] flex gap-2 font-mono text-[#fff069]">
                                <MapPin size={19} />
                                <span>
                                 Bibioteca central da Ubi | Todas as quintas-feiras as 19h
                                </span>
                            </h1>

                            <p></p>

                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}