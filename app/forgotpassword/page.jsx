'use client'

import SideTestimonials from '@/components/sideTestimonials';


const ForgotPassword = () => {
    return (
        <div className='app-container text-gray-500 py-20' id='top'>
            <div className='flex lg:p-10' >
                <div className='flex flex-col gap-8 w-full md:mx-16 lg:mx-0 lg:p-10'>
                    <div>
                        <p className='font-semibold text-3xl md:text-4xl lg:text-5xl text-black'>Don't remember your password ?</p>
                        <p className='text-xs'>Please enter your account details</p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-1 relative'>
                                <label htmlFor="email" type="email" className='text-black absolute -top-3 left-2 bg-app-background px-1'>Email</label>
                                <input className='bg-transparent border rounded-xl focus:outline-primary p-4' type="email" placeholder='jhondoe@email.com' />
                            </div>
                        </div>
                        <p className='text-end'>Not register yet ? <span className='text-primary'><a href="/register">Create account.</a></span></p>
                    </div>
                    <div className='flex flex-col'>
                        <button className='bg-primary p-4 text-white rounded-xl w-full'>Re</button>
                        <a href="/signin" className='text-primary mt-1'>Back to login</a>
                    </div>
                </div>
                <SideTestimonials />
            </div>
        </div>
    )
}

export default ForgotPassword