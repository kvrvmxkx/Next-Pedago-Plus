import { BookOpenText, Presentation, Users } from 'lucide-react'
import React from 'react'

const count = [
    {
        icon: BookOpenText,
        value: "10k+",
        desc: "Total course",
        color: "text-cyan-400"
    },
    {
        icon: Presentation,
        value: "500+",
        desc: "Expert mentors",
        color: "text-orange-400"
    },
    {
        icon: Users,
        value: "300k+",
        desc: "Students globally",
        color: "text-purple-500"
    }
]


const Count = () => {
    return (
        <div className="container">
            <div className="bg-secondary flex flex-col md:flex-row justify-between items-start gap-3 p-5 md:p-10 mb-12 rounded-2xl flex-wrap">
                {
                    count.map((i, k) => <div key={k} className="flex gap-5">
                        <div className="bg-white mx-auto my-auto p-3 md:p-5 lg:p-7 rounded-md">
                            <i.icon size={30} className={i.color} />
                        </div>
                        <div className="flex flex-col justify-between">
                            <p className="font-bold text-xl md:text-3xl lg:text-4xl text-primary">{i.value}</p>
                            <p className="uppercase mt-3">{i.desc}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Count