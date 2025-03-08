import { ChartColumnBig, CircleDollarSign, SquarePen, TvMinimalPlay, UserCheck2, Volume2 } from 'lucide-react'
import React from 'react'

const category = [
    {
        icon: SquarePen,
        color: "cyan",
        title1: "Design &",
        title2: "Development",
        courseNumber: 250
    },
    {
        icon: Volume2,
        color: "indigo",
        title1: "Marketing &",
        title2: "Communication",
        courseNumber: 300

    },
    {
        icon: TvMinimalPlay,
        color: "orange",
        title1: "Digital",
        title2: "Marketing",
        courseNumber: 150
    },
    {
        icon: ChartColumnBig,
        color: "amber",
        title1: "Business &",
        title2: "Consulting",
        courseNumber: 170
    },
    {
        icon: CircleDollarSign,
        color: "purple",
        title1: "Finance",
        title2: "Management",
        courseNumber: 300
    },
    {
        icon: UserCheck2,
        color: "green",
        title1: "Self",
        title2: "Developement",
        courseNumber: 50
    }
]

const CoursesByCategories = () => {
    return (
        <div className="container">
            <div className="flex flex-col">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
                    <div>
                        <p className="font-extrabold texl-lg md:text-3xl">Explore course by categories</p>
                        <p className="text-gray-500">Browse top class courses by category which will be more easy for you</p>
                    </div>
                    <a href="#" className="text-primary  mt-5 md:mt-0 px-4 py-2 md:px-5 md:py-3 rounded-md border">All category</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                    {
                        category.map((i, k) => <div key={k} className="flex justify-between gap-5 group rounded-2xl bg-white p-3 hover:shadow-xl transition duration-300 ease-in-out">
                            <div className={`bg-${i.color}-100 group-hover:bg-${i.color}-500 mx-auto my-auto group-hover:transition group-hover:duration-300 group-hover:ease-in-out p-6 lg:p-7 rounded-lg`}>
                                <i.icon size={35} className={`text-${i.color}-500 group-hover:text-white`} />
                            </div>
                            <div className="grow flex flex-col justify-between">
                                <p className="font-bold">
                                    {i.title1} <br />{i.title2}
                                </p>
                                <p className="text-gray-500 mt-3">{i.courseNumber}+ course available</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default CoursesByCategories