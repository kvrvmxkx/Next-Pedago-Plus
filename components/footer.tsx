import { MoveUp } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col xs:'>
            <div className='bg-secondary '>
                <div className='app-container py-10'>
                    <div className='flex flex-col justify-center items-center gap-10'>
                        <a href='/' className='text-2xl font-extrabold'>
                            <span className='text-primary'>Pedago</span>
                            <span className=''>+</span>
                        </a>

                        <ul className="flex gap-4 md:gap-8">
                            <li>
                                <a href="/" className="" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="">Course</a>
                            </li>
                            <li>
                                <a href="/#pricing" className="">Pricing</a>
                            </li>
                            <li>
                                <a href="/about-us" className="">About</a>
                            </li>
                            <li>
                                <a href="/contact" className="">Contact</a>
                            </li>
                        </ul>


                    </div>
                </div>
            </div>

            <div className='hidden sm:block bg-secondary py-3 border-t border-slate-300'>
                <div className='app-container'>
                    <div className='flex justify-between items-center'>
                        <p className='text-gray-500'>Copyright Pedago+, All right reserved. </p>
                        <a href='#top' className='bg-primary p-3 rounded-sm text-white'>
                            <MoveUp size={15} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer