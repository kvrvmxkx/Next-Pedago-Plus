import React from 'react'

const Newsletter = () => {
    return (
        <div className="app-container py-20">
            <div className="flex justify-center items-center">
                <div className="hidden md:block bg-[url('/decoration1.png')] w-[150px] h-[250px] bg-center bg-contain bg-no-repeat"></div>
                <div className="flex flex-col items-center text-center gap-3 overflow-visible max-w-xl">
                    <p className="text-3xl font-bold">Subscribe Newsletter</p>
                    <p>You learn today and earn tomorrow. The roots of education are bitter but the fruits are sweet.</p>

                    <div className="flex drop-shadow-[0_35px_45px_rgba(0,0,0,0.50)] mt-7 grow">
                        <input className="p-2 rounded-l-md px-3 focus:outline-0 border-inherit bg-white" placeholder="Enter your email address " />
                        <button className="bg-primary text-white px-2 rounded-r-md">Subscribe</button>
                    </div>
                </div>
                <div className="hidden md:block bg-[url('/decoration2.png')]  w-[150px] h-[250px] bg-center bg-contain bg-no-repeat"></div>
            </div>
        </div>
    )
}

export default Newsletter