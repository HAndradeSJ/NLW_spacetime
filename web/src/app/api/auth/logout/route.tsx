
import { NextRequest, NextResponse } from "next/server";

// rota não  visivel para pegaro code , e redireconar o usaurio para app
export async function GET (request:NextRequest){
    
    // redirencionando o usario para home 
    const ResponseUrl = new URL('/',request.url)
    
    return NextResponse.redirect(ResponseUrl,{
        headers:{
            'Set-Cookie':`token=jdksjlkjf; Path=/; max-age=0;`
        }
    })  
}