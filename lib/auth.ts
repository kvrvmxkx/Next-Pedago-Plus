import { NextAuthOptions } from "next-auth";
import {PrismaAdapter} from "@auth/prisma-adapter"
import { prisma } from './prisma';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';


export const authConfig: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.AUTH_GITHUB_ID as string,
            clientSecret: process.env.AUTH_GITHUB_SECRET as string
        }),
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID as string,
            clientSecret: process.env.AUTH_GOOGLE_SECRET as string
        })
    ]
}