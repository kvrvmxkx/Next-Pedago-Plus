"use client"

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

import { signInSchema } from "@/lib/zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { authClient } from "@/lib/auth-client";

import { useState } from "react";

import { toast } from "sonner";

import { useRouter } from "next/navigation";

import { ErrorContext } from "@better-fetch/fetch";

import SignSocialButton from '@/components/auth/signSocialButton';
import SideTestimonials from "@/components/auth/sideTestimonials";



const SignIn = () => {

    const router = useRouter();
    const [pendingCredentials, setPendingCredentials] = useState(false);

    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const handleCredentialsSignIn = async (
        values: z.infer<typeof signInSchema>
	) => {
		await authClient.signIn.email(
			{
				email: values.email,
				password: values.password,
			},
			{
				onRequest: () => {
					setPendingCredentials(true);
				},
				onSuccess: async () => {
					router.push("/");
					router.refresh();
				},
				onError: (ctx: ErrorContext) => {
					if (ctx.error.status === 403) {
						toast.error("Please verify your email address");
					}
					//console.log(ctx);
                    toast.error(ctx.error.message ?? "Something went wrong.");
				},
			}
		);
		setPendingCredentials(false);
	};


	

    return (
        <div className='app-container text-gray-500 py-20' id='top'>
            <div className='flex items-center lg:p-10' >
                <div className='flex flex-col gap-8 w-full md:mx-16 lg:mx-0 lg:p-10'>
                    <div>
                        <p className='font-semibold text-3xl md:text-4xl lg:text-5xl text-black'>Welcome back</p>
                        <p className='text-xs'>Please enter your account details</p>
                    </div>
                    <Form {...form}>
						<form onSubmit={form.handleSubmit(handleCredentialsSignIn)}>
							<div className="space-y-6">
								{["email", "password"].map((field) => (
									<FormField
										control={form.control}
										key={field}
										name={field as keyof z.infer<typeof signInSchema>}
										render={({ field: fieldProps }) => (
											<FormItem>
												<FormLabel>
													{field.charAt(0).toUpperCase() + field.slice(1)}
												</FormLabel>
												<FormControl>
													<Input
														className="rounded-md focus-visible:ring-0 focus-visible:border-primary px-4 py-6"
														type={field === "password" ? "password" : "email"}
														placeholder={`Enter your ${field}`}
														{...fieldProps}
														autoComplete={
															field === "password" ? "current-password" : "email"
														}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								))}
							</div>
                            <p className='text-end'>Not register yet ? <span className='text-primary'><a href="/sign-up">Create account.</a></span></p>
							<div className="mt-6">
								<LoadingButton pending={pendingCredentials}>
									Sign in
								</LoadingButton>
								<a href="/forgot-password" className='text-primary mt-1'>Forgot password ?</a>
							</div>
						</form>
					</Form>
					{
					/** 
					 *! Social Sign button
					 */
					 }
					<SignSocialButton />
                </div>
				{
				/** 
				 *! Side Testimonials
				*/
				}
                <SideTestimonials />
            </div>
        </div>
    )
}

export default SignIn