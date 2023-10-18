"use server"

import React from 'react'
import { Resend } from "resend"
import { validateFormData, getErrorMsg } from "@/lib/utils"
import ContactFormEmailStyle from '@/email/contact-form-email-style'

const resend = new Resend(process.env.MAIL_API_KEY)

export const sendEmail= async (formData: FormData) => {
    const email = formData.get("email")
    const message = formData.get("message")

    if( !validateFormData(email, 100))
    {
        return {
            error: "Invalid email",
        }
    }

    if(!validateFormData(message, 500)){
        return {
            error: "Invalid message",
        }
    }

    let data;
    try {
        data = await resend.emails.send({
            from: "Contact Request<onboarding@resend.dev>",
            to: "jeejoanup@gmail.com",
            subject: "Message from Portolio contact form",
            reply_to: email as string,
            react: React.createElement(ContactFormEmailStyle, {
                message: message as string,
                senderEmail: email as string
            })
        })
    } catch (error: unknown) {
        return {
            error: getErrorMsg(error)
        }
    }

    return {
        data,
    };
}