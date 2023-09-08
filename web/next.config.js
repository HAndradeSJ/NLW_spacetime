/** @type {import('next').NextConfig} */
const nextConfig = {

    //configurando a função images pq o next nn reconehece sem ser arquivo
    images:{
        domains:[
            'avatars.githubusercontent.com',    
        ]
    }
}

module.exports = nextConfig
