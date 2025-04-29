import { betterAuth, BetterAuthOptions } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { sendEmail } from "@/action/reEmail";
import { openAPI, admin } from "better-auth/plugins";
import prisma from "./prisma";

export const auth = betterAuth({
    database: prismaAdapter(prisma,{
        provider: "mongodb"
    }),
    session: {
        expiresIn: 60  * 60 * 24 * 7, // 7 days
        // BUG: Prob a bug with updateAge method. It throws an error - Argument `where` of type SessionWhereUniqueInput needs at least one of `id` arguments. 
        // As a workaround, set updateAge to a large value for now.
        updateAge: 60 * 60 * 24 * 7, // 7 days (every 7 days the session expiration is updated)
        cookieCache: {
            enabled: true,
            maxAge: 5 * 60 // Cache duration in seconds
        }
    },
    user: {
        additionalFields: {
            subscription: {
                type: "string",
                required: false,
            },
        },
        changeEmail: {
            enabled: true,
            sendChangeEmailVerification: async ({ newEmail, url }) => {
                await sendEmail({
                    type: "EmailChanging",
                    to: newEmail,
                    url: url
                })
            }
        }
    },
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        },
        google: {
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        }
    },
    plugins: [openAPI(), admin()], //api/auth/reference
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
        sendResetPassword: async({user, url}) => {
            sendEmail({
                type: "ResetPassword",
                to: user.email,
                url: url
            })
        }
    },
    emailVerification: {
        sendOnSignUp: true,
        autoSignInAfterVerification: true,
        sendVerificationEmail: async ({user, /*url,*/ token}) => {
            const url = `${process.env.BETTER_AUTH_URL}/api/auth/verify-email?token=${token}&callbackURL=${process.env.EMAIL_VERIFICATION_CALLBACK_URL}`;
            await sendEmail({
                type: "EmailVerification",
                to: user.email,
                url: url
            })
        }
    }
} satisfies BetterAuthOptions)

export type Session = typeof auth.$Infer.Session;
