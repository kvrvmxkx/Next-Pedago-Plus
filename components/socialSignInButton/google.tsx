import React, { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'


import { useRouter } from "next/navigation";
import { authClient } from '@/lib/authClient';

import { ErrorContext } from "@better-fetch/fetch";
import { toast } from "sonner";



const GoogleSignInButton = () => {
    const [pendingGoogle, setPendingGoogle] = useState(false);
    const router = useRouter();
    const handleSignInWithGoogle = async () => {
        await authClient.signIn.social(
            {
                provider: "google",
            },
            {
                onRequest: () => {
                    setPendingGoogle(true);
                },
                onSuccess: async () => {
                    router.push("/");
                    router.refresh();
                },
                onError: (ctx: ErrorContext) => {
                    toast.error(ctx.error.message ?? "Something went wrong.");
                },
            }
        );
        setPendingGoogle(false);
    };
  return (
    <div>

        {pendingGoogle ? (
                    <div className="flex items-center justify-center mx-auto border-[.3px] border-primary rounded-full h-full w-12">
                        <svg
                            className="animate-spin h-5 w-5 text-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                    </div>
                ) : (
                    <FaGoogle onClick={handleSignInWithGoogle} className="text-5xl text-primary border-[.3px] border-primary bg-white p-2 rounded-full hover:text-white hover:bg-primary hover:-translate-y-2 hover:shadow-2xl hover:drop-shadow-2xl transition duration-300 ease-in-out" />
                )}
    </div>
  )
}

export default GoogleSignInButton