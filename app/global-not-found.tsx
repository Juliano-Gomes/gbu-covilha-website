// Import global styles and fonts
import './globals.css'
import { Montserrat_Alternates } from 'next/font/google'
import type { Metadata } from 'next'
 
const MontserratAlternates = Montserrat_Alternates({
  weight:["300"],
  variable:"--font-human"
})
 
export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}
 
export default function GlobalNotFound() {
  return (
    <html lang="en">
    <body>
      <section className={`bg-main-mine bg-[#617a8b] gap-4 h-screen w-full flex-col ${MontserratAlternates.variable} flex items-center justify-center`}>
        <h1 className='text-[25px] sm:text-[28px] font-human font-bold text-white'>404 - Page Not Found</h1>
        <a href ={'/'} className='w-[90px] border p-2 items-center flex justify-center font-human rounded underline font-medium bg-secondary-mine text-white'>Home</a>
      </section>
      
    </body>
    </html>
  )
}