import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

// essa const é necessária, pois não será usado apenas do lado do cliente
export const authOption = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    pages : {
        signIn: "/signin"
    }
}

// se fosse apenas client, authOption não seria necessário, apenas o conteúdo dele aqui dentro 
const handler = NextAuth(authOption)

export {handler as GET, handler as POST }