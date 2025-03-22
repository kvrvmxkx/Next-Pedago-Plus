"use server"

import { signIn, signOut } from "@/lib/auth";

export async function socialSignInAction(formData:FormData) {
    const action = formData.get('action') as string;
    await signIn(action, {redirectTo: "/"} )
}

export async function signOutAction() {
    await signOut({redirectTo: "/"} )
}

export async function CredentialsSignInAction(formData:FormData) {
    try {
        const response = await signIn("credentials", { 
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        });

        return response;
    } catch (error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        throw new Error(message);
    }
  
} 