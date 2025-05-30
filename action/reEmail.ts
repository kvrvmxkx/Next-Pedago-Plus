"use server";

import EmailChanging from "@/emails/emailChanging";
import EmailVerification from "@/emails/emailVerification";
import ResetPassword from "@/emails/resetPassword";
import { Resend } from "resend";


export async function sendEmail({
    to, url, type
}: {
    to:string,
    url:string,
    type: "EmailVerification" | "ResetPassword" | "EmailChanging"
}) {

    if (!process.env.RESEND_API_KEY) {
        throw new Error("RESEND_API_KEY environment variable is not set");
    }

    const pattern = 
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!pattern.test(to)) {
        throw new Error("Invalid address email!");
    }

    let subject = "Ika Services";
    let template = null
    switch (type) {
        case "EmailVerification":
            subject = "Email verification";
            template = EmailVerification({url})
            break;
        case "ResetPassword":
            subject = "Reset your password";
            template = ResetPassword({url})
            break;
        case "EmailChanging":
            subject = "Confirm email changing";
            template = EmailChanging({url})
            break;
        default:
            subject = "Ika Services";
            template = null
            break;
    }


    try {

        const resend = new Resend(process.env.RESEND_API_KEY);

        const response = await resend.emails.send({
            from: "Ika Services <noreply@ikaservices.com>",
            to: to,
            subject: subject,
            react: template
        });

        if(response.error) {
            return {
                success: false,
                id: response.error
            };
        }

        return {
            success: true,
            id: response.data?.id
        };
    } catch (error) {
        console.error("Error while sending email",error);

        return {
            success: false,
            error: error
        };
    }
}