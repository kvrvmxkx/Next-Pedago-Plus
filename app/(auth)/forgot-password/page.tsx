'use client'

import SideTestimonials from '@/components/auth/sideTestimonials';

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

import { forgotPasswordSchema } from "@/lib/zod";
import { useState } from 'react';

const ForgotPassword = () => {
    const [isPending, setIsPending] = useState(false);

	const form = useForm<z.infer<typeof forgotPasswordSchema>>({
		resolver: zodResolver(forgotPasswordSchema),
		defaultValues: {
			email: "",
		},
	});

    const onSubmit = async (data: z.infer<typeof forgotPasswordSchema>) => {
		setIsPending(true);
		const { error } = await authClient.forgetPassword({
			email: data.email,
			redirectTo: "/reset-password",
		});

		if (error) {
			toast.error(error.message ?? "Something went wrong.");
		} else {
            toast.success("If an account exists with this email, you will receive a password reset link.");
		}
		setIsPending(false);
	};
    return (
        <div className='app-container text-gray-500 py-20' id='top'>
            <div className='flex items-center lg:p-10' >
                <div className='flex flex-col gap-8 w-full md:mx-16 lg:mx-0 lg:p-10'>
                    <div>
                        <p className='font-semibold text-3xl md:text-4xl lg:text-5xl text-black'>Don&apos;t remember your password ?</p>
                        <p className='text-xs'>Please enter your email</p>
                    </div>
                    <Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} >

							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
                                            	className="rounded-md focus-visible:ring-0 focus-visible:border-primary px-4 py-6"
												type="email"
												placeholder="Enter your email"
												{...field}
												autoComplete="email"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
                            <p className='text-end'>Not register yet ? <span className='text-primary'><a href="/sign-up">Create account.</a></span></p>
                            <div className='mt-6'>
                                <LoadingButton pending={isPending}>Send Reset Link</LoadingButton>
                                <a href="/sign-in" className='text-primary mt-1'>Back to login</a>
                            </div>
						</form>
					</Form>
                </div>
                <SideTestimonials />
            </div>
        </div>
    )
}

export default ForgotPassword