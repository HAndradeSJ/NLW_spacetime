import { getUser } from "@/lib/auth";
import { User } from "lucide-react";
import Image from "next/image";

export function Profile (){
    // destruturização para pegar dados do usuario 
    const {name, avatarUrl} = getUser()
    return(
        <div className="flex items-center gap-3 text-left">
            <Image src={avatarUrl} width={40} height={40} alt="" className="w-10 h-10 rounded-full"/>
            <p className='text-sm leading-snug max-w-[140px] hover:text-gray-50 transition-colors'>{name}</p>
            <a href="/api/auth/logout" className="block text-red-480 hover:text-red-300" >Quero sair !</a>
        </div>
    )
}