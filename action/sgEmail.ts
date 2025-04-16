"use server";

import sgMail from "@sendgrid/mail";

export async function sendEmail({
  to, url, type
}: {
    to:string,
    url:string,
    type: "EmailVerification" | "ResetPassword" | "EmailChanging"
}) {


  if (!process.env.SENDGRID_API_KEY) {
    throw new Error("SENDGRID_API_KEY environment variable is not set");
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
            template = process.env.SENDGRID_VERIFICATiON_TEMPLATE_ID!
            break;
        case "ResetPassword":
            subject = "Reset your password";
            template = "";
            break;
        case "EmailChanging":
            subject = "Confirm email changing";
            template = "";
            break;
        default:
            subject = "Ika Services";
            template = "";
            break;
    }


    try {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        const [response] = await sgMail.send({
            from: "noreply@ikaservices.com",
            to: to,
            subject: subject,
            templateId: template,
            dynamicTemplateData: {
                url: url
            }
        });

        if (response.statusCode !== 202) {
            return {
                success: false,
                message: response.statusCode
            }
        }


        return {
            success: true,
            id: response.headers['x-message-id']
        };

    } catch (error) {
        console.error("Error sending email:", error);

        return {
            success: false,
            error: error
        }
    }
}