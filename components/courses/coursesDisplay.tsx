import { CircleDollarSign, Star, UserRound } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const CoursesDisplay = ({ title, data }: {title: string, data: {
    title: string,
    image: string,
    tag: string,
    students: number,
    rates: number,
    price: number }[]
    }) => {
    return (
        <div className="app-container mt-10">
            <div className="flex flex-col">
                <p className="font-bold texl-lg md:text-2xl">{title}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-2">
                    {
                        data.map((i, k) => <div key={k} className="bg-white rounded-2xl p-2 flex flex-col hover:scale-105 transition duration-300 ease-in-out hover:shadow-xl">
                            <div className="h-40">
                                <Image
                                    className="rounded-xl object-cover h-full"
                                    src={i.image}
                                    width={620}
                                    height={620}
                                    alt="hero" />
                            </div>

                            <div className="my-5">
                                <a href="#" className="bg-secondary text-[#6868DE] text-xs font-semibold px-4 py-1 md:py-2 rounded-md">{i.tag}</a>
                            </div>

                            <p className="font-semibold text-sm">{i.title}</p>

                            <div className="flex gap-5 mt-5">
                                <div className="flex items-center">
                                    <div className="bg-teal-50 p-2 rounded-full">
                                        <UserRound size={15} className={`text-teal-500 `} />
                                    </div>
                                    <p className="text-xs">{i.students}+</p>
                                </div>

                                <div className="flex items-center">
                                    <div className="bg-amber-50 p-2 rounded-full">
                                        <Star size={15} className={`text-amber-500 `} />
                                    </div>
                                    <p className="text-xs">{i.rates}</p>
                                </div>

                                <div className="flex items-center">
                                    <div className="bg-pink-50 p-2 rounded-full">
                                        <CircleDollarSign size={15} className={`text-pink-500 `} />
                                    </div>
                                    <p className="text-xs">{i.price}$</p>
                                </div>

                            </div>

                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default CoursesDisplay