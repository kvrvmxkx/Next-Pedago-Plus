import React from 'react'

const Contact = () => {
    return (
        <div className='app-container' id='top'>
            <div className='mb-32'>
                <p className="capitalize font-bold text-4xl md:text-[2.4rem] lg:text-[3.3rem] xl:text-[4.1rem] leading-[1.175] my-16 md:my-28 lg:my-36">
                    Let&apos;s build <span className="text-primary">greatest</span> <br />
                    futur together.
                </p>
                <div className='flex flex-col-reverse md:flex-row gap-10 md:gap-4 lg:gap-56'>
                    <div className='text-gray-600 text-lg flex flex-col gap-2 min-w-1/3'>
                        <a href="mailto:hello@pedagoplus.com">hello@pedagoplus.com</a>
                        <a href="tel:hello@pedagoplus.com">(514) 456 7890</a>
                        <p>875, avenue Homère, Sherbrooke, Québec, J1N 2H8</p>
                    </div>
                    <div className='flex flex-col max-w-4xl'>
                        <p className='text-2xl md:text-3xl lg:text-4xl'>
                            You learn today and earn tomorrow.
                            The roots of education are bitter but the fruits are sweet.
                            If you learn today you can lead tomorrow.
                        </p>
                        <form className='flex flex-col gap-5 mt-8'>
                            <div className='flex flex-col md:flex-row gap-10'>
                                <input required type="text" className='border-b focus:outline-0 grow py-4' placeholder='Name&#42;' />
                                <input required type="email" className='border-b focus:outline-0 grow py-4' placeholder='Email&#42;' />
                            </div>
                            <textarea required className='border-b focus:outline-0 grow py-4 resize-none' rows={8} placeholder='Message&#42;'></textarea>
                            <div>
                                <button type='submit' className='bg-transparent border-[.5px] rounded-lg py-2 px-6'>Send</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact