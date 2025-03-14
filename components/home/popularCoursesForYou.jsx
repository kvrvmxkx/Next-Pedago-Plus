import { CircleDollarSign, Star, UserRound } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const popular = [
    {
        title: "Learn app development in 30 days",
        image: "/popular1.jpg",
        tag: "Web Design",
        students: 500,
        rates: 4.8,
        price: 99.99
    },
    {
        title: "Advance montion graphics",
        image: "/popular2.jpg",
        tag: "Graphics Design",
        students: 800,
        rates: 4.9,
        price: 89.99

    },
    {
        title: "Learn CMS Development",
        image: "/popular3.jpg",
        tag: "Web Design",
        students: 200,
        rates: 4.9,
        price: 89.00
    },
    {
        title: "The Complete Web Design Course",
        image: "/popular4.jpg",
        tag: "Web Design",
        students: 500,
        rates: 4.8,
        price: 99.99
    },
    {
        title: "Advance Drawing",
        image: "/popular5.jpg",
        tag: "Art",
        students: 400,
        rates: 4.9,
        price: 99.99
    },
    {
        title: "Advance videography course",
        image: "/popular6.jpg",
        tag: "Media",
        students: 350,
        rates: 4.8,
        price: 99.99
    }
]

const PopularCoursesForYou = () => {
    return (
        <div className="bg-secondary mt-28 py-28">
            <div className="app-container">
                <div className="flex flex-col">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
                        <div>
                            <p className="font-extrabold texl-lg md:text-3xl">Popular courses for you</p>
                            <p className="text-gray-500">Get the best course with the best price with world-class tutors</p>
                        </div>
                        <a href="#" className="text-primary  mt-5 md:mt-0 px-4 py-2 md:px-5 md:py-3 rounded-md border">See all jobs</a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                        {
                            popular.map((i, k) => <div key={k} className="bg-white rounded-2xl p-4 flex flex-col hover:scale-105 transition duration-300 ease-in-out hover:shadow-xl">
                                <div className="h-52">
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

                                <p className="font-semibold">{i.title}</p>

                                <div className="flex gap-5 mt-10">
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
        </div>
    )
}

export default PopularCoursesForYou