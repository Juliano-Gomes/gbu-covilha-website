import Link from "next/link";

export default async function AboutPage(){
    return(
        <section className="pt-[90px] h-[100vh] w-[100vw] flex flex-col items-center justify-center">
            <Link className="rounded font-mono p-2 h-[40px] text-[#fff] bg-[#83e5d5] w-[120px] flex justify-center items-center" href={"https://gbu.pt/visao-e-missao-do-gbu/"}>
                ler mais
            </Link>
        </section>
    )
}