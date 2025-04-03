"use client"

import SideTestimonials from "@/components/sideTestimonials";
//import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

import { SyntheticEvent, useState } from "react";
//import { useRouter } from "next/navigation";
// import { CredentialsSignInAction, socialSignInAction } from "@/action";

const SignIn = () => {
    const [error, setError] = useState("");
    //const router = useRouter();
    async function handleFormSubmit(event: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
        event.preventDefault()
        try {
            const formData = new FormData(event.currentTarget);
            console.log(formData);
            

                //const email = formData.get('email');
                //const password = formData.get('password');

                // if(email && password) {
                //     const response = await CredentialsSignInAction(formData);
                //     if(!!response.error) {
                //         setError("Server error");
                //     } else {
                //         router.push('/');
                //     }
                // }
                // else {
                //     setError("Please fill all inputs");
                // }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setError("Invalid password or username");
        }
    }
    return (
        <div className='app-container text-gray-500 py-20' id='top'>
            <div className='flex lg:p-10' >
                <div className='flex flex-col gap-8 w-full md:mx-16 lg:mx-0 lg:p-10'>
                    <div>
                        <p className='font-semibold text-3xl md:text-4xl lg:text-5xl text-black'>Welcome back</p>
                        <p className='text-xs'>Please enter your account details</p>
                    </div>
                    <form onSubmit={handleFormSubmit} className='flex flex-col'>
                        <div className="mb-4 text-sm text-red-500">
                            {error}
                        </div>

                        <div className='flex flex-col gap-7'>
                            <div className='flex flex-col gap-1 relative'>
                                <label htmlFor="email" className='text-black absolute -top-2 left-2 bg-app-background px-1 text-xs'>Email</label>
                                <input className='bg-transparent border rounded-xl focus:outline-primary p-4' name='email' type="email" placeholder='jhondoe@email.com' />
                            </div>
                            <div className='flex flex-col gap-1 relative'>
                                <label htmlFor="password" className='text-black absolute -top-2 left-2 bg-app-background px-1 text-xs'>Password</label>
                                <input className='bg-transparent border rounded-xl focus:outline-primary p-4' name='password' type="password" placeholder='•••••••••••' />
                            </div>
                        </div>

                        <p className='text-end'>Not register yet ? <span className='text-primary'><a href="/register">Create account.</a></span></p>

                        <div className='flex flex-col mt-8'>
                            <button className='bg-primary p-4 text-white rounded-xl w-full'>Sign in</button>
                            <a href="/forgotpassword" className='text-primary mt-1'>Forgot password ?</a>
                        </div>
                    </form>


                    {/* <form action={socialSignInAction} className='flex justify-center gap-1'>
                        <button type="submit" name="action" value="google">
                            <FaGoogle className="text-5xl text-primary border-[.3px] border-primary bg-white p-2 rounded-full hover:text-white hover:bg-primary hover:-translate-y-2 hover:shadow-2xl hover:drop-shadow-2xl transition duration-300 ease-in-out" />
                        </button>

                        <button type="submit" name="action" value="facebook">
                            <FaFacebook className="text-5xl text-primary border-[.3px] border-primary bg-white p-2 rounded-full hover:text-white hover:bg-primary hover:-translate-y-2 hover:shadow-2xl hover:drop-shadow-2xl transition duration-300 ease-in-out" />
                        </button>

                        <button type="submit" name="action" value="github">
                            <FaGithub className="text-5xl text-primary border-[.3px] border-primary bg-white p-2 rounded-full hover:text-white hover:bg-primary hover:-translate-y-2 hover:shadow-2xl hover:drop-shadow-2xl transition duration-300 ease-in-out" />
                        </button>

                    </form> */}

                </div>
                <SideTestimonials />
            </div>
        </div>
    )
}

export default SignIn