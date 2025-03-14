import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import React, { useState } from 'react'

const testimonials = [
    {
        firstname: "Jane",
        lastname: "X",
        jobTitle: "UI Designer at Google",
        comment: "Circuit has helped me expand my knowledge through several important courses."
    },
    {
        firstname: "Jhon",
        lastname: "Doe",
        jobTitle: "Developer at Facebook",
        comment: "That are extreme impacful and helpful for my career."
    },
    {
        firstname: "Carl",
        lastname: "Max",
        jobTitle: "Student in McGill",
        comment: "For the first time, finishing my degree seemed realistic."
    },
    {
        firstname: "Ash",
        lastname: "Jhonson",
        jobTitle: "Designer at SynthèseIA",
        comment: "Learning is now easier than ever.Just browse a job and apply if you need to."
    },

]

const SideTestimonials = () => {

    const [index, setIndex] = useState(1)
    const increment = () => {
        let i = index == testimonials.length - 1 ? 0 : index + 1;
        setIndex(i);
    }

    const decrement = () => {
        let i = index == 0 ? testimonials.length - 1 : index - 1;
        setIndex(i);
    }

    return (
        <div className='hidden xl:block bg-primary relative w-full text-white rounded-2xl px-14 py-20'>
            <div className="bg-app-background rounded-bl-2xl absolute h-16 w-20 top-0 right-0 after:bg-primary after:content-[' '] after:rounded-tr-2xl after:w-8 after:h-8 after:absolute after:-left-8 after:shadow-app-background after:shadow-[13px_0_0]
                    before:bg-primary before:content-[' '] before:rounded-tr-2xl before:w-8 before:h-8 before:absolute before:-bottom-8 before:right-0 before:shadow-app-background before:shadow-[13px_0_0]"> </div>

            <div className='flex flex-col gap-8'>
                <p className='xl:text-5xl 2xl:text-6xl'>What's our students saids.</p>

                <Quote size={25} />

                <p>{testimonials[index].comment}</p>

                <div>
                    <p className='font-bold text-xl'>{`${testimonials[index].firstname} ${testimonials[index].lastname}`}</p>
                    <p>{testimonials[index].jobTitle}</p>
                </div>

                <div className='flex gap-2'>
                    <button onClick={() => decrement()} className='p-4 border-[.5px] border-app-background rounded-md hover:text-black hover:bg-app-background cursor-pointer'>
                        <ArrowLeft />
                    </button>
                    <button onClick={() => increment()} className='p-4 bg-app-background text-black rounded-md hover:border border-app-background hover:bg-primary hover:text-white cursor-pointer'>
                        <ArrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SideTestimonials