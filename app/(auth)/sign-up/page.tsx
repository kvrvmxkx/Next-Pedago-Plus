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

import { toast } from "sonner";

import SideTestimonials from "@/components/auth/sideTestimonials";

import { useRouter } from "next/navigation";
import SignSocialButton from "@/components/auth/signSocialButton";

export default function SignUp() {
	const router = useRouter();

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
					toast.success("Your account has been created. Check your email for a verification link.");
					router.push("/sign-in");
					router.refresh();
				},
				onError: (ctx) => {
					console.log("error", ctx);
					toast.error(ctx.error.message ?? "Something went wrong.");
				},
			}
		);
		setPending(false);
	};

	return (
		<div className="app-container text-gray-500 py-20" id='top'>
			<div className='flex items-center lg:p-10' >
				<div className="flex flex-col gap-8 w-full md:mx-16 lg:mx-0 lg:px-10 my-auto">
					<div>
                        <p className='font-semibold text-3xl md:text-4xl lg:text-5xl text-black'>Welcome</p>
                        <p className='text-xs'>Please enter your account details</p>
                    </div>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)}>
							<div className="space-y-3">
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
							</div>

							<p className='text-end'>Already have account ? <span className='text-primary'><Link href="/sign-in">Sign in.</Link></span></p>
							<div className="mt-6">
								<LoadingButton pending={pending}>Sign up</LoadingButton>
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
	);
}

