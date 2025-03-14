import React from 'react'
import { CalendarCheck, MessageSquareText, UserRoundCheck, UserRoundSearch } from 'lucide-react'

const why = [
    {
        icon: <UserRoundCheck size={20} />,
        title: "Expertise",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minima cumque ducimus eaque?"
    },
    {
        icon: <UserRoundSearch size={20} />,
        title: "Attention to Detail",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minima cumque ducimus eaque?"
    },
    {
        icon: <MessageSquareText size={20} />,
        title: "Communication",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minima cumque ducimus eaque?"
    },
    {
        icon: <CalendarCheck size={20} />,
        title: "Customer Service",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minima cumque ducimus eaque?"
    }
]

const WhyUs = () => {
    return (
        <div className='bg-white py-5 md:py-10 lg:py-20'>
            <div className='app-container py-14'>
                <p className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center'>Why Us</p>
                <p className='text-gray-500 max-w-md text-center mx-auto mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Aut minima cumque ducimus eaque? </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-7 my-10'>
                    {why.map((e, k) => <div key={k} className='flex flex-col p-3 gap-1 bg-gray-50 rounded-lg relative transition duration-300 ease-in-out hover:scale-105'>
                        <div className='absolute -top-5 rounded-md bg-indigo-100 text-indigo-700 p-3'>
                            {e.icon}
                        </div>
                        <p className='text-lg font-bold mt-4'>{e.title}</p>
                        <p className='text-sm'>{e.description}</p>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default WhyUs