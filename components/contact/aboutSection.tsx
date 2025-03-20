import React from 'react'

const AboutSection = () => {
    return (
        <div className=''>
            <div className='relative  w-full top-14 inline-flex flex-row justify-center h-fit pb-10 inset-0 items-center'>
                <div className='bg-indigo-500 blur-[90px] w-[250px] h-[250px] opacity-[.3] rounded-full absolute left-0'></div>
                <div className='bg-indigo-500 blur-[90px] w-[250px] h-[250px] opacity-[.3] rounded-full absolute right-0'></div>
                <div className='w-[250px] h-[250px] relative'></div>
                <div className='absolute text-center w-3xl'>
                    <p className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold'>About Us</p>
                    <p className='text-gray-500 max-w-md text-center mx-auto mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Aut minima cumque ducimus eaque? </p>
                </div>

            </div>
        </div>
    )
}

export default AboutSection