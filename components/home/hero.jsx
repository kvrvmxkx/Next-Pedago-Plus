import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className="app-container my-12" id='top'>
            <div className="flex flex-col-reverse md:flex-row justify-between">
                <div className="w-full my-auto">
                    <p className="capitalize font-bold text-4xl md:text-[2.4rem] lg:text-[3.3rem] xl:text-[4.1rem] leading-[1.175]">
                        getting <span className="text-primary">quality</span> <br />
                        education is now <br />
                        more <span className="text-primary">easy</span>
                    </p>

                    <p className="my-5 text-gray-500">
                        Provide your with the latest online learning system and material{" "}
                        <br />
                        that help your knowlegde growing.
                    </p>

                    <div className="flex">
                        <a href="#" className="bg-primary text-white px-4 py-2 md:px-5 md:py-3 rounded-md" >
                            Register
                        </a>
                        <a href="#" className="bg-secondary text-[#6868DE] mx-4 px-4 py-2 md:px-5 md:py-3 rounded-md" >
                            Get free trial
                        </a>
                    </div>

                </div>
                <div className="w-full flex justify-center">
                    <Image
                        src={"/hero.png"}
                        width={620}
                        height={620}
                        alt="hero"
                    />
                </div>
            </div>

            <div className="mt-10 md:mt-0 flex justify-between">
                <div className="w-full flex justify-center">
                    <Image
                        src={"/circle-1.png"}
                        width={25}
                        height={25}
                        alt="hero"
                    />
                </div>
                <div className="w-full flex justify-center items-start">
                    <Image
                        src={"/circle-2.png"}
                        width={10}
                        height={10}
                        alt="hero"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero