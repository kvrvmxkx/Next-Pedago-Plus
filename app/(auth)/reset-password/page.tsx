'use client'

import React from 'react'

import SideTestimonials from '@/components/sideTestimonials';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/loading-button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { authClient } from "@/lib/auth-client";

import { toast } from "sonner";

import { resetPasswordSchema } from "@/lib/zod";
import { useState } from 'react';
import { CircleAlert } from 'lucide-react';

import { useRouter, useSearchParams } from "next/navigation";
import Link from 'next/link';



const ResetPassword = () => {

    const router = useRouter();
	const searchParams = useSearchParams();
	const error = searchParams.get("error");
	const token = searchParams.get("token");
	const [isPending, setIsPending] = useState(false);

	const form = useForm<z.infer<typeof resetPasswordSchema>>({
		resolver: zodResolver(resetPasswordSchema),
		defaultValues: {
			password: "",
			confirmPassword: "",
		},
	});

    const onSubmit = async (data: z.infer<typeof resetPasswordSchema>) => {
		setIsPending(true);
		if(token) {
			const { error } = await authClient.resetPassword({
				newPassword: data.password,
				token: token
			});
			if (error) {
				toast.error(error.message ?? "Something went wrong.");
			} else {
				toast.success("Password reset successful. Login to continue.");
				router.push("/sign-in");
			}
		}
		else {
			toast.error("Missing token.");
		}
		
		setIsPending(false);
	};


    if (error === "invalid_token") {
		return (
            <div className="flex flex-col items-center justify-center grow p-4">
                <CircleAlert className='mb-4 text-red-500' size={150} />
                <h1 className="text-lg font-bold">
                    Invalid Reset Link.
                </h1>
                <p className="mb-4 text-gray-600">
                    This password reset link is invalid or has expired.
                </p>
                <Link href="/sign-in">
                    Go to home
                </Link>
            </div>
		);
	}

    return (
        <div className='app-container text-gray-500 py-20' id='top'>
            <div className='flex lg:p-10' >
                <div className='flex flex-col gap-8 w-full md:mx-16 lg:mx-0 lg:p-10'>
                    <div>
                        <p className='font-semibold text-3xl md:text-4xl lg:text-5xl text-black'>Set new password.</p>
                        <p className='text-xs'>Please enter your new password</p>
                    </div>
                    <Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>New Password</FormLabel>
										<FormControl>
											<Input
                                            className="rounded-md focus-visible:ring-0 focus-visible:border-primary px-4 py-6"
												type="password"
												placeholder="Enter your new password"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="confirmPassword"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Confirm Password</FormLabel>
										<FormControl>
											<Input
                                            className="rounded-md focus-visible:ring-0 focus-visible:border-primary px-4 py-6"
												type="password"
												placeholder="Confirm your new password"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<LoadingButton pending={isPending}>Set new password</LoadingButton>
						</form>
					</Form>
                </div>
                <SideTestimonials />
            </div>
        </div>
  )
}

export default ResetPassword