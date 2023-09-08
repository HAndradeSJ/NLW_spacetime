import { Copyrigth } from '@/components/Copyright'
import './globals.css'
import { Inter } from 'next/font/google'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree
} from 'next/font/google'
import { Hero } from '@/components/Hero'
import { EmptyMemories } from '@/components/EmptyMemories'
import { Profile } from '@/components/Profile'
import { Sigin } from '@/components/Sigin'
import { cookies } from 'next/headers'


// Importando as fonts para usar no taillwnd

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({subsets:['latin'],variable:"--font-roboto"})
const baiJamjuree = BaiJamjuree({subsets:['latin'],weight:'700',variable:'--font-baiJamjuree'})

export const metadata = {
  title: 'NLW Spacetime',
  description: 'projeto do NlW da rockteseat',
}

export default function RootLayout({
 
  children,
}: {
  children: React.ReactNode
}) {
  const autheticated = cookies().has('token')
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable}font-sans text-gray-100 bg-gray-900`}>
      
      <main className="grid grid-cols-2 min-h-screen">
          <div className="flex flex-col items-start justify-between overflow-hidden px-28 py-16 relative  border-white/10 ">
              <div className="absolute right-0  top-1/2 h-[288px] w-[526px] -translet-y-1/2 translate-x-1/2 bg-purple-700 opacity-50 blur-full"/>
              <div className="absolute top-0 bottom-0  right-2 w-2 bg-stripes"/>
             {autheticated ?<Profile/>:<Sigin/>}
             <Hero/>
             <Copyrigth/>
          </div>

        {/* ------------------------------------------ */}
          <div className="flex flex-col p-16 bg-cover">
                  {children}
          </div>
    </main>
      
      </body>
    </html>
  )
}
