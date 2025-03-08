'use client'

import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { useState } from 'react';
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";


const testimonials = [
    {
        firstname: "Jane",
        lastname: "X",
        jobTitle: "UI Designer at Google",
        comment: "Circuit has helped me expand my knowledge through several important courses."
    },
    {
        firstname: "Jhon",
        lastname: "Doe",
        jobTitle: "Developer at Facebook",
        comment: "That are extreme impacful and helpful for my career."
    },
    {
        firstname: "Carl",
        lastname: "Max",
        jobTitle: "Student in McGill",
        comment: "For the first time, finishing my degree seemed realistic."
    },
    {
        firstname: "Ash",
        lastname: "Jhonson",
        jobTitle: "Designer at SynthèseIA",
        comment: "Learning is now easier than ever.Just browse a job and apply if you need to."
    },

]

const SignIn = () => {

    const [index, setIndex] = useState(1)
    const increment = () => {
        let i = index == testimonials.length ? 0 : index + 1;
        console.log(i);
        console.log(testimonials.length);

        setIndex(i);
    }




    return (
        <div className='container text-gray-500 py-20' id='top'>
            <div className='flex p-20' >
                <div className='flex flex-col gap-8 w-full p-20'>
                    <div>
                        <p className='font-semibold text-5xl text-black'>Welcome</p>
                        <p className='text-xs'>Please enter your account details</p>
                    </div>


                    <div className='flex flex-col'>
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="email" type="email" className='text-black'>Email</label>
                                <input className='bg-transparent border rounded-xl focus:outline-primary p-4' type="email" placeholder='jhondoe@email.com' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="password" className='text-black'>Password</label>
                                <input className='bg-transparent border rounded-xl focus:outline-primary p-4' name='password' type="password" placeholder='•••••••••••' />
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <a href="#" className='underline'>Forgot password ?</a>
                            <a href="#" className='underline text-primary'>Already have account ?</a>
                        </div>
                    </div>


                    <button className='bg-primary p-4 text-white rounded-xl'>Sign in</button>
                    <div className='flex justify-center gap-1'>
                        <FaGoogle className="text-5xl text-primary border-[.3px] border-primary bg-white p-2 rounded-full hover:text-white hover:bg-primary hover:-translate-y-2 hover:shadow-2xl hover:drop-shadow-2xl transition duration-300 ease-in-out" />
                        <FaFacebook className="text-5xl text-primary border-[.3px] border-primary bg-white p-2 rounded-full hover:text-white hover:bg-primary hover:-translate-y-2 hover:shadow-2xl hover:drop-shadow-2xl transition duration-300 ease-in-out" />
                        <FaGithub className="text-5xl text-primary border-[.3px] border-primary bg-white p-2 rounded-full hover:text-white hover:bg-primary hover:-translate-y-2 hover:shadow-2xl hover:drop-shadow-2xl transition duration-300 ease-in-out" />

                        {/* <ion-icon className="text-4xl text-primary border-[.3px] border-primary bg-white p-2 rounded-full hover:text-white hover:bg-primary hover:-translate-y-2 hover:shadow-2xl hover:drop-shadow-2xl transition duration-300 ease-in-out" name="logo-google"></ion-icon>
                        <ion-icon className="text-4xl text-primary border-[.3px] border-primary bg-white p-2 rounded-full hover:text-white hover:bg-primary hover:-translate-y-2 hover:shadow-2xl hover:drop-shadow-2xl transition duration-300 ease-in-out" name="logo-github"></ion-icon>
                        <ion-icon className="text-4xl text-primary border-[.3px] border-primary bg-white p-2 rounded-full hover:text-white hover:bg-primary hover:-translate-y-2 hover:shadow-2xl hover:drop-shadow-2xl transition duration-300 ease-in-out" name="logo-facebook"></ion-icon> */}
                    </div>


                </div>
                <div className='bg-primary relative w-full text-white rounded-2xl px-14 py-20'>
                    <div className="bg-app-background rounded-bl-2xl absolute h-16 w-20 top-0 right-0 after:bg-primary after:content-[' '] after:rounded-tr-2xl after:w-8 after:h-8 after:absolute after:-left-8 after:shadow-app-background after:shadow-[13px_0_0]
                    before:bg-primary before:content-[' '] before:rounded-tr-2xl before:w-8 before:h-8 before:absolute before:-bottom-8 before:right-0 before:shadow-app-background before:shadow-[13px_0_0]"> </div>

                    <div className='flex flex-col gap-8'>
                        <p className='text-6xl'>What's our students saids.</p>

                        <Quote size={25} />

                        <p>{testimonials[index].comment}</p>

                        <div>
                            <p className='font-bold text-xl'>{`${testimonials[index].firstname} ${testimonials[index].lastname}`}</p>
                            <p>{testimonials[index].jobTitle}</p>
                        </div>

                        <div className='flex gap-2'>
                            <button onClick={() => setIndex(index - 1)} className='p-4 border-[.5px] border-app-background rounded-md hover:text-black hover:bg-app-background cursor-pointer'>
                                <ArrowLeft />
                            </button>
                            <button onClick={() => increment()} className='p-4 bg-app-background text-black rounded-md hover:border border-app-background hover:bg-primary hover:text-white cursor-pointer'>
                                <ArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
            <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script> */}
        </div>
    )
}

export default SignIn