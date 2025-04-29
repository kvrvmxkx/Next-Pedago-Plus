import React from 'react'
import { MapPinHouse, MessageCircleMore, Phone } from 'lucide-react'


const data = [
    {
        icon: <MessageCircleMore size={20} />,
        title: "Chat to support",
        description: "We're here to help.",
        buttonText: "Chat to support"
    },
    {
        icon: <Phone size={20} />,
        title: "Visit us",
        description: "Visit our office HQ",
        buttonText: "Get directions"
    },
    {
        icon: <MapPinHouse size={20} />,
        title: "Call us",
        description: "Mon-Fri from 8am to 5pm",
        buttonText: "Call our team"
    },
]

const GetInTouch = () => {
    return (
        <div className='py-20 mx-auto'>
            <div className='app-container'>
                <p className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center '>Get in touch</p>
                <p className='text-gray-500 text-center mx-auto mt-1 mb-7'>Ready to build your education faster ? Let&apos;s chat about how we can help</p>
                <div className='grid md:grid-cols-3 gap-4'>
                    {
                        data.map((e, k) => <div key={k} className='flex flex-col gap-2 items-start bg-gray-100 p-3 rounded-lg text-gray-600 text-sm transition duration-300 ease-in-out hover:scale-105'>
                            <div className='rounded-md bg-indigo-100 text-indigo-700 w-fit p-3 mb-10'>
                                {e.icon}
                            </div>
                            <p className='font-bold text-black text-base'>{e.title}</p>
                            <p>{e.description}</p>
                            <button className='border border-gray-400 px-2 py-1 rounded-md hover:bg-indigo-500 hover:border-primary hover:text-white'>{e.buttonText}</button>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default GetInTouch