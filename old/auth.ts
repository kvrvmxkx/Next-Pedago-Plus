import NextAuth from "next-auth"
import {PrismaAdapter} from "@auth/prisma-adapter"

import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';

import { getUserByEmail } from "@/data/user";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
    session: {
        strategy: 'jwt'
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        Github, 
        Google,
        Credentials({
            async authorize(credentials) {
                if (credentials === null) return null;
                try {
                    const user = getUserByEmail(credentials?.email)
                    if(user) {
                        const isMatch = user?.password === credentials?.password;
                        if(isMatch) {
                            return user;
                        }
                        else {
                            throw new Error('Password incorrect');
                        }
                    }
                    else {
                        throw new Error('User not found');
                    }
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                } catch (error) {
                    throw new Error('Server error');
                }
            }
        })
    ],
})