import type { Metadata } from "next";
import { Roboto , Poppins} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header-component";
import { FooterComponent } from "@/components/footer-componet";

const RobotoFont = Roboto({
  variable: "--font-roboto",
  weight:["300","400","500","600"],
});
const PoppinsFont = Poppins({
  variable: "--font-poppins",
  weight:["100","200","400"]
})
export const metadata: Metadata = {
  title: "Gbu Covilha",
  description: "GBU covilha - Junte a nós e elevemos a nossa fé",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${RobotoFont.variable} ${PoppinsFont.variable} gap-3 bg-[#617a8b] w-[100vw] flex flex-col antialiased`}
      >
        <Header/>
        <main>
          {children}
        </main>
        <FooterComponent/>
      </body>
    </html>
  );
}
