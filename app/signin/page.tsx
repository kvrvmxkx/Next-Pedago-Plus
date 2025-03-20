import SideTestimonials from "@/components/sideTestimonials";
import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";


const SignIn = async () => {
    const session = await getServerSession(authConfig)
    return (
        <div className='app-container text-gray-500 py-20' id='top'>
            <h1>
                {session?.user ?
                    "Authenticated " + session?.user.email : "Not authenticated"
                }
            </h1>
            <div className='flex lg:p-10' >
                <div className='flex flex-col gap-8 w-full md:mx-16 lg:mx-0 lg:p-10'>
                    <div>
                        <p className='font-semibold text-3xl md:text-4xl lg:text-5xl text-black'>Welcome back</p>
                        <p className='text-xs'>Please enter your account details</p>
                    </div>


                    <div className='flex flex-col'>
                        <div className='flex flex-col gap-7'>
                            <div className='flex flex-col gap-1 relative'>
                                <label htmlFor="email" className='text-black absolute -top-3 left-2 bg-app-background px-1'>Email</label>
                                <input className='bg-transparent border rounded-xl focus:outline-primary p-4' type="email" placeholder='jhondoe@email.com' />
                            </div>
                            <div className='flex flex-col gap-1 relative'>
                                <label htmlFor="password" className='text-black absolute -top-3 left-2 bg-app-background px-1'>Password</label>
                                <input className='bg-transparent border rounded-xl focus:outline-primary p-4' name='password' type="password" placeholder='•••••••••••' />
                            </div>
                        </div>

                        <p className='text-end'>Not register yet ? <span className='text-primary'><a href="/register">Create account.</a></span></p>
                    </div>

                    <div className='flex flex-col'>
                        <button className='bg-primary p-4 text-white rounded-xl w-full'>Sign in</button>
                        <a href="/forgotpassword" className='text-primary mt-1'>Forgot password ?</a>
                    </div>

                    <div className='flex justify-center gap-1'>
                        <FaGoogle className="text-5xl text-primary border-[.3px] border-primary bg-white p-2 rounded-full hover:text-white hover:bg-primary hover:-translate-y-2 hover:shadow-2xl hover:drop-shadow-2xl transition duration-300 ease-in-out" />
                        <FaFacebook className="text-5xl text-primary border-[.3px] border-primary bg-white p-2 rounded-full hover:text-white hover:bg-primary hover:-translate-y-2 hover:shadow-2xl hover:drop-shadow-2xl transition duration-300 ease-in-out" />
                        <FaGithub className="text-5xl text-primary border-[.3px] border-primary bg-white p-2 rounded-full hover:text-white hover:bg-primary hover:-translate-y-2 hover:shadow-2xl hover:drop-shadow-2xl transition duration-300 ease-in-out" />
                    </div>


                </div>
                <SideTestimonials />
            </div>
        </div>
    )
}

export default SignIn