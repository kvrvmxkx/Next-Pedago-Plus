import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='py-5 md:py-10 lg:py-20 mt-10'>
            <div className='app-container'>
                <div className='flex flex-col lg:flex-row gap-10'>
                    <div className='w-full'>
                        <Image
                            className='rounded-4xl object-cover '
                            src={"/about-us-team.jpg"}
                            width={620}
                            height={620}
                            alt="hero"
                        />
                    </div>

                    <div className='flex flex-col text-gray-500 gap-5 w-full'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Ab, non fuga. Adipisci, dolorum hic. Eum nostrum esse perspiciatis!
                            Rerum doloribus facere totam doloremque adipisci eum quisquam
                            sint quidem id necessitatibus!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Ab, non fuga. Adipisci, dolorum hic. Eum nostrum esse perspiciatis!
                            Rerum doloribus facere totam doloremque adipisci eum quisquam
                            sint quidem id necessitatibus!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Sint recusandae dicta facilis animi eaque vero nobis doloribus facere voluptatibus culpa.
                            Quisquam sed quod asperiores repudiandae delectus quae necessitatibus
                            cupiditate. Voluptate. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Sint recusandae dicta facilis animi eaque vero nobis doloribus facere voluptatibus culpa.
                        </p>
                        <div>

                            <button className='px-4 py-2 border border-primary rounded-lg'>Get in touch</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero