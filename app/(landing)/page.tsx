import { PhotoCard } from "@/components/photoCard";
import { MapPin } from "lucide-react";


export default async function HomePage(){
    return(
        <section className="pt-[90px] w-full flex items-center ">
            <section className="min-h-[100vh] md:flex-row md:items-start md:justify-center flex flex-col items-center justify-start w-full p-4 gap-4">
                <PhotoCard/>
                <section className="p-2 flex flex-col w-[90%] gap-3 sm:w-[500px] md:w-[550px]">
                    <h1 className="font-mono  text-2xl text-[#fff069]">GBU Covilha</h1>
                    <div className="flex flex-col gap-4">
                        <p className="font-sans">
                            O Grupo Bíblico Universitário tem na sua génese a iniciativa estudantil, sendo portanto um movimento feito de estudantes para estudantes. São os estudantes que assumem os principais papéis de liderança nos vários grupos locais distribuídos pelo país.
                        </p>

                        <div className="flex flex-col gap-5">
                            <h1 className="items-center text-[13px] flex gap-2 font-mono text-[#fff069]">
                                <MapPin size={19} />
                                <span>
                                 Bibioteca central da Ubi | Todas as quintas-feiras as 19h
                                </span>
                            </h1>
                            <div className="flex rounded p-4 bg-[#fff069] flex-col sm:flex-row gap-3 items-center justify-center">
                                <svg fill="#000000" className="w-[46px] font-bold h-[46px] " width="146px" height="146px" viewBox="-844.8 -844.8 3609.60 3609.60" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M338.79-.011v527.66L-.034 821.298V1919.99h1920V821.297l-338.71-293.647V-.011H338.79Zm112.94 1203.953V112.93h1016.471v1091.012l-189.289 151.34H641.02l-189.29-151.34Zm1129.526-526.87 225.882 195.726v60.085l-225.882 180.706V677.07ZM112.907 932.881v-60.084L338.79 677.071v436.518L112.907 932.883Zm1694.23 144.678v623.323l-238.08-301.553-88.658 70.023 266.654 337.695H172.88l266.767-337.695-88.659-70.023-238.08 301.553V1077.56l488.47 390.777h717.29l488.47-390.777Zm-790.666-795.207v282.353h282.353v112.941H1016.47V960H903.529V677.647H621.176V564.706H903.53V282.353h112.942Z" fillRule="evenodd"></path> </g></svg>
                                <p className="font-mono decoration-[3px] decoration-[#ff9385] underline text-[#000] font-bold flex items-center justify-center">
                                    És nosso convidado para a proxima reunia da GBU COVILHA 
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}