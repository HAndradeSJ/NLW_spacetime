import { NextRequest, NextResponse } from 'next/server';
const urlsigin =` https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID }`


// backend  for front-end


// middleware de autenticação
export function middleware(request:NextRequest){

        const token = request.cookies.get('token')?.value;

        // Se usuario nn tiver logado , redireciono ele
        if(!token){
            return NextResponse.redirect(urlsigin,{
                headers:{
                    'Set-Cookie':`redirectto=${request.url}; Path=/; httpOnly; max-age=20;`
                }
                
            })
        }
            
        return NextResponse.next()

}

export const config = {
    matcher:'/memories/:path*',
}