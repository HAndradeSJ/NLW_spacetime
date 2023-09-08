
import { api } from "@/lib/api";
import { NextRequest, NextResponse } from "next/server";

// rota não  visivel para pegaro code , e redireconar o usaurio para app
export async function GET (request:NextRequest){
    // Destruturando a variavel para pegar o code do github
    const {searchParams} =  new URL(request.url)

    // Pegando o code do Github
    const code = searchParams.get('code')
    const redirectto = request.cookies.get('redirectto')?.value
    // Mandando  o code do github para o backend
    const RegisterResponse = await api.post('/register',{
        code,
    })
    // variavel do token do git
    const {Token} =  RegisterResponse.data

    // variavel do toal de segundos do token vai expirar
    const exprinTOken = 60*60*24*30

    // redirencionando o usario para home 
    const ResponseUrl = redirectto ??  new URL('/',request.url)
    
    return NextResponse.redirect(ResponseUrl,{
        headers:{
            'Set-Cookie':`token=${Token}; Path=/; max-age=${exprinTOken};`
        }
    })  
}