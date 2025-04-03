import { betterAuth, BetterAuthOptions } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { sendEmail } from "@/action/email";
import { openAPI } from "better-auth/plugins";

export const auth = betterAuth({
    database: prismaAdapter(prisma,{
        provider: "mysql"
    }),
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
    plugins: [openAPI()], //api/auth/reference
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
        sendVerificationEmail: async ({user, token}) => {
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
