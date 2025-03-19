import CoursesDisplay from '@/components/courses/coursesDisplay'
import { Search } from 'lucide-react'
import React from 'react'

const news = [
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
        title: "Learn app development in 30 days",
        image: "/popular1.jpg",
        tag: "Web Design",
        students: 500,
        rates: 4.8,
        price: 99.99
    },
]


const popular = [
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
    },
    {
        title: "Advance Drawing",
        image: "/popular5.jpg",
        tag: "Art",
        students: 400,
        rates: 4.9,
        price: 99.99
    },
]

const trends = [
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
        title: "Learn app development in 30 days",
        image: "/popular1.jpg",
        tag: "Web Design",
        students: 500,
        rates: 4.8,
        price: 99.99
    },
]

const cat = ["Law", "Marketing", "Web", "Mobile", "Python", "Machine Learning", "Data science", "Self development"]

const Courses = () => {
    return (
        <div className='pb-10'>
            <div className='bg-white shadow-xl'>
                <div className='app-container mx-auto py-10'>
                    <div className='flex flex-col items-center'>
                        <p className='text-center mb-2 font-bold'>Which contest are you looking for?</p>
                        <div className='flex flex-col gap-1 relative w-full sm:w-sm xl:w-2xl'>
                            <input className='bg-transparent border border-gray-500 rounded-lg focus:outline-primary p-2' name='search' placeholder='Enter your keywords' />
                            <Search className='absolute right-2 top-2 text-gray-300' />
                        </div>
                    </div>
                </div>
            </div>

            <CoursesDisplay title="Polular" data={popular} />
            <CoursesDisplay title="New" data={news} />
            <CoursesDisplay title="Trend" data={trends} />

            <div className='app-container mt-10'>
                <p className="font-bold texl-lg md:text-2xl">Popular subjets</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-2">
                    {cat.map((e, k) => <div className='p-5 text-center rounded-md bg-indigo-50 text-sm hover:bg-indigo-100' key={k}>{e}</div>)}
                </div>
            </div>



        </div>
    )
}

export default Courses