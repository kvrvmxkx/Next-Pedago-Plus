"use client";

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

import Link from "next/link";

import { signUpSchema } from "@/lib/zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { authClient } from "@/lib/auth-client";

import { useState } from "react";

import SideTestimonials from "@/components/sideTestimonials";

import { toast } from "sonner"


export default function SignUp() {


	const [pending, setPending] = useState(false);

	const form = useForm<z.infer<typeof signUpSchema>>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
		await authClient.signUp.email(
			{
				email: values.email,
				password: values.password,
				name: values.name,
			},
			{
				onRequest: () => {
					setPending(true);
				},
				onSuccess: () => {
					toast.success("Account created",{
						description:"Your account has been created. Check your email for a verification link.",
						action: {
							label: "Ok",
							onClick: () => {},
						},
					});
				},
				onError: (ctx) => {
					console.log("error", ctx);
					toast.error("Something went wrong",{
						description: ctx.error.message ?? "Something went wrong.",
					});
				},
			}
		);
		setPending(false);
	};

	return (
		<div className="app-container text-gray-500 py-20" id='top'>
			<div className='flex lg:p-10' >
				<div className="flex flex-col gap-8 w-full md:mx-16 lg:mx-0 lg:px-10 my-auto">
					<div>
                        <p className='font-semibold text-3xl md:text-4xl lg:text-5xl text-black'>Welcome</p>
                        <p className='text-xs'>Please enter your account details</p>
                    </div>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
							{["name", "email", "password", "confirmPassword"].map((field) => (
								<FormField
									control={form.control}
									key={field}
									name={field as keyof z.infer<typeof signUpSchema>}
									render={({ field: fieldProps }) => (
										<FormItem>
											<FormLabel>
												{field.charAt(0).toUpperCase() + field.slice(1)}
											</FormLabel>
											<FormControl>
												<Input
													className='rounded-md focus-visible:ring-0 focus-visible:border-primary px-4 py-6'
													type={
														field.toLowerCase().includes("password")
															? "password"
															: field === "email"
															? "email"
															: "text"
													}
													placeholder={`Enter your ${field}`}
													{...fieldProps}
													autoComplete="off"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							))}
							<p className='text-end'>Already have account ? <span className='text-primary'><Link href="/signin">Signin.</Link></span></p>
							<LoadingButton pending={pending}>Sign up</LoadingButton>
						</form>
					</Form>
				</div>
				<SideTestimonials />
			</div>
		</div>
	);
}

