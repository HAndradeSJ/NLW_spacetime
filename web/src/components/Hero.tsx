//  importações
import Link from 'next/link'
import nwllogo from '../assets/logo.svg'
import Image from 'next/image'
 
 export function Hero (){
    return (
        <div className='space-y-5'>
        <Image src={nwllogo} alt={'logo nwl'} className=''/>
        <div className='max-w-[420px] space-y-1'>
              <h1 className='text-5xl font-sans leading-tight text-gray-50'>Sua cápsula do tempo </h1>
              <p className='text-lg leading-relaxed'>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>
              <Link href='/memories/new' className='inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600'>CADASTRAR </Link>
        </div>
     </div>

    )
 }