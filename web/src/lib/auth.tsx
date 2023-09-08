import decode from 'jwt-decode'
import { cookies } from "next/headers";

// craindo uma interface para manipular o token do Github
interface User{
    sub: string,
    name: string,
    avatarUrl: string
}

export function getUser(): User {
    const token = cookies().get('token')?.value

    // validação para ver ser existe o toke 
    if(!token){
        throw new Error("não autenticado")
    }
    const user: User = decode(token)

    return user

}