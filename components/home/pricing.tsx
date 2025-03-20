import { CircleCheck } from 'lucide-react'
import React from 'react'

const pricings = [
    {
        title: "Basic",
        description: "Best for personnal use",
        price: "30",
        advantages: ["Acces to core features", "Limited support", "Basic reporting tools", "Email support", "Communication tools", "Reporting and analytics"]
    },
    {
        title: "Basic",
        description: "Best for personnal use",
        price: "50",
        advantages: ["Acces to core features", "Limited support", "Basic reporting tools", "Email support", "Communication tools", "Reporting and analytics"],
    },
    {
        title: "Basic",
        description: "Best for personnal use",
        price: "90",
        advantages: ["Acces to core features", "Limited support", "Basic reporting tools", "Email support", "Communication tools", "Reporting and analytics"],
    }
]

const Pricing = () => {
    return (
        <div className='bg-white py-24' id='pricing'>
            <div className='app-container'>
                <div className="inline-flex items-center justify-center w-full mb-10">
                    <hr className="w-80 h-[.5px] my-8 bg-gray-300 border-0 rounded-sm" />
                    <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2">
                        <p className='font-extrabold texl-lg md:text-3xl text-center'>Pricing</p>
                    </div>
                </div>

                <div className="flex flex-col flex-wrap md:flex-row justify-center gap-5 md:gap-8 lg:gap-6">
                    {
                        pricings.map((i, k) => <div key={k} className='w-full md:max-w-[300px] border border-gray-200 rounded-4xl p-7 grow hover:scale-105 md:hover:scale-110 transition duration-300 ease-in-out'>
                            <div className='flex flex-col gap-8'>
                                <div>
                                    <p className='font-semibold'>{i.title}</p>
                                    <p className='text-gray-500 text-xs'>{i.description}</p>
                                </div>

                                <div>
                                    <p className='font-bold text-4xl'>
                                        ${i.price}
                                        <span className='font-normal text-sm text-gray-500'> per month</span>
                                    </p>
                                </div>

                                <div>
                                    <button className='bg-primary rounded-full px-4 py-2 min-w-full text-white text-center text-sm'>Get started</button>
                                </div>

                                <hr className='border-[.5px] border-slate-200' />

                                <div className='flex flex-col gap-3 text-slate-500 text-sm'>
                                    <p className='text-black text-lg'>What you will get</p>
                                    {
                                        i.advantages.map((i, k) => <div key={k} className='flex gap-2 items-center'>
                                            <CircleCheck size={18} />
                                            <p>{i}</p>
                                        </div>)
                                    }
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </div>

    )
}

export default Pricing