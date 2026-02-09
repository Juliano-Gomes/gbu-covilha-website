import Link from "next/link";

export default async function AboutPage(){
    return(
        <section className="pt-[90px]  h-[100vh] w-[100vw] flex flex-col items-center gap-4 justify-center">
            <section className="flex items-center justify-center md:w-[500px] font-mono w-[450px]">
                <p>
                    O Grupo Bíblico Universitário (GBU) é um espaço para questões honestas sobre a Bíblia, a vida académica e a sociedade.
                    <br />
                    Há mais de 50 anos em Portugal e existente em cerca de 180 países, o GBU tem influenciado milhares de estudantes, hoje integrados nas mais variadas esferas da sociedade.
                    <br />
                    Organizamo-nos em grupos locais em diversas cidades onde há presença de ensino superior e dispomos de uma rede de líderes estudantis, cooperadores e staff que colaboram para alcançarmos a nossa visão.
                </p>
            </section>
            <Link className="rounded font-mono p-2 h-[40px] text-[#fff] bg-[#83e5d5] w-[120px] flex justify-center items-center" href={"https://gbu.pt/visao-e-missao-do-gbu/"}>
                ler mais
            </Link>
        </section>
    )
}