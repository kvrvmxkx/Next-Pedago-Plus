"use server";

import sgMail from "@sendgrid/mail";

export async function sendEmail({
    to, verificationUrl
}: {
    to:string,
    subject:string,
    verificationUrl:string
}) {
    if(!process.env.SENDGRID_API_KEY) {
        throw new Error("SENDGRID_API_KEY environment variable is not set.");
    }

    if(!process.env.SENDGRID_TEMPLATE_ID) {
        throw new Error("SENDGRID_TEMPLATE_ID environment variable is not set");
    }

    if(!process.env.EMAIL_FROM) {
        throw new Error("EMAIL_FROM environment variable is not set.");
    }

    const pattern = 
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!pattern.test(to)) {
        throw new Error("Invalid address email!");
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // const message2 = {
    //     to: "sendgridtesting@gmail.com",
    //     from: process.env.EMAIL_FROM,
    //     subject: "9F4A7B0CB77E",
    //     text: verificationUrl,
    // };

    const message = {
        to: to.toLowerCase().trim(),
        from: process.env.EMAIL_FROM,
        templateId: process.env.SENDGRID_TEMPLATE_ID,
        dynamic_template_data: {
            verificationUrl: verificationUrl
        },
        hideWarnings: true,
    }


    try {
        const [response] = await sgMail.send(message);
        if(response.statusCode !== 202) {
            throw new Error(`Sendgrid API returned status code ${response.statusCode}`);
        }
        console.log("success");

        return {
            success: true,
            messageId: response.headers['x-message-id']
        };

    } catch (error) {
        console.error("Error while sending email",error);

        return {
            success: false,
            message: "Fail to send email, please try again later."
        };
    }
}