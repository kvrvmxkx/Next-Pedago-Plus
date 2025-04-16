import { MoveUp } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col xs:'>
            <div className='bg-secondary '>
                <div className='app-container py-10'>
                    <div className='flex flex-col justify-center items-center gap-10'>
                        <Link href='/' className='text-2xl font-extrabold'>
                            <span className='text-primary'>Pedago</span>
                            <span className=''>+</span>
                        </Link>

                        <ul className="flex gap-4 md:gap-8">
                            <li>
                                <Link href="/" className="" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link href="#" className="">Course</Link>
                            </li>
                            <li>
                                <Link href="/#pricing" className="">Pricing</Link>
                            </li>
                            <li>
                                <Link href="/about-us" className="">About</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="">Contact</Link>
                            </li>
                        </ul>


                    </div>
                </div>
            </div>

            <div className='hidden sm:block bg-secondary py-3 border-t border-slate-300'>
                <div className='app-container'>
                    <div className='flex justify-between items-center'>
                        <p className='text-gray-500'>Copyright Pedago+, All right reserved. </p>
                        <Link href='#top' className='bg-primary p-3 rounded-sm text-white'>
                            <MoveUp size={15} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer