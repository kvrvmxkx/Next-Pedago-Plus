import { Rating } from '@smastrom/react-rating'
import { Quote } from 'lucide-react'
import React from 'react'
import Marquee from 'react-fast-marquee'

const testimonials = [
    {
        firstname: "Jhon",
        lastname: "Doe",
        rate: 5,
        title: "Great platform",
        comment: "Circuit has helped me expand my knowledge through several important courses that are extreme impacful and helpful for my career.For the first time, finishing my degree seemed realistic."
    },
    {
        firstname: "Jane",
        lastname: "X",
        rate: 5,
        title: "Wonderful",
        comment: "Circuit has helped me expand my knowledge through several important courses that are extreme impacful and helpful for my career.For the first time, finishing my degree seemed realistic. It was online with a flexible schedule"
    },
    {
        firstname: "Joe",
        lastname: "Root",
        rate: 5,
        title: "Unbelievable",
        comment: "Circuit has helped me expand my knowledge through several important courses that are extreme impacful and helpful for my career.For the first time, finishing my degree seemed realistic."
    },
    {
        firstname: "Kyle",
        lastname: "Mayars",
        rate: 5,
        title: "Great job",
        comment: "Circuit has helped me expand my knowledge through several important courses that are extreme impacful and helpful for my career.For the first time, finishing my degree seemed realistic."
    },
    {
        firstname: "Gudukesh",
        lastname: "Motie",
        rate: 5,
        title: "Nice platform",
        comment: "Circuit has helped me expand my knowledge through several important courses that are extreme impacful and helpful for my career.For the first time, finishing my degree seemed realistic."
    },
    {
        firstname: "Jhon",
        lastname: "Doe",
        rate: 5,
        title: "Great platform",
        comment: "Circuit has helped me expand my knowledge through several important courses that are extreme impacful and helpful for my career.For the first time, finishing my degree seemed realistic."
    },
    {
        firstname: "Jane",
        lastname: "X",
        rate: 5,
        title: "Wonderful",
        comment: "Circuit has helped me expand my knowledge through several important courses that are extreme impacful and helpful for my career.For the first time, finishing my degree seemed realistic. It was online with a flexible schedule"
    },
    {
        firstname: "Joe",
        lastname: "Root",
        rate: 5,
        title: "Unbelievable",
        comment: "Circuit has helped me expand my knowledge through several important courses that are extreme impacful and helpful for my career.For the first time, finishing my degree seemed realistic."
    },
    {
        firstname: "Kyle",
        lastname: "Mayars",
        rate: 5,
        title: "Great job",
        comment: "Circuit has helped me expand my knowledge through several important courses that are extreme impacful and helpful for my career.For the first time, finishing my degree seemed realistic."
    },
    {
        firstname: "Gudukesh",
        lastname: "Motie",
        rate: 5,
        title: "Nice platform",
        comment: "Circuit has helped me expand my knowledge through several important courses that are extreme impacful and helpful for my career.For the first time, finishing my degree seemed realistic."
    },
]

const color = ["red", "cyan", "teal", "emerald", "amber", "violet", "fuchsia", "lime", "orange", "rose", "pink"]

const Testimonials = () => {
    return (
        <div className="flex flex-col mt-28 max-w-[1700px] mx-auto">
            <div className="container">
                <div className="flex flex-col lg:flex-row justify-between items-start md:items-end gap-3">
                    <p className="font-extrabold texl-lg md:text-3xl w-full">What our students are <br /> saying about us</p>
                    <p className="text-gray-500 w-full">you learn today and earn tomorrow. The roots of education are bitter
                        but the fruits are sweet. If you learn today you can lead tomorrow. See what our studens saying.
                    </p>
                </div>
            </div>


            {
                /**
                *  ? Horizontal scroll  
                */
            }
            {/* <div class="overflow-auto mr-2">
          <div className="flex gap-6 my-16 px-4 md:px-14 lg:px-24 xl:px-40 mx-auto">
            {
              feeds.map((i, k) => <div key={k} className="flex flex-col bg-white p-5 gap-3 rounded-2xl group hover:bg-primary hover:text-white min-w-[320px]">
                <p className="font-bold ">{i.title}</p>
                <div className="flex items-start justify-center gap-4">
                  <div className="border p-2 bg-primary group-hover:bg-white rounded-full text-white group-hover:text-primary">
                    <Quote size={10} />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="h-48 overflow-auto">
                      <p className="text-gray-500 group-hover:text-white">{i.comment}</p>
                    </div>

                    <hr className="border-slate-400" />

                    <div className="flex items-center gap-3">
                      <div className="bg-slate-500 rounded-full h-14 w-14 flex items-center">
                        <span className="mx-auto my-auto text-white">{i.firstname.at(0) + i.lastname.at(0)}</span>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-bold">{`${i.firstname} ${i.lastname}`}</p>
                        <Rating style={{ maxWidth: 90 }} value={i.rate} readOnly />
                      </div>
                    </div>
                  </div>
                </div>
              </div>)
            }
          </div>
        </div> */}

            {
                /**
                *  ? Infinite scroll  
                */
            }
            <div className="my-16">
                <Marquee pauseOnHover>
                    {
                        testimonials.map((i, k) => <div key={k} className="flex flex-col bg-white p-5 gap-3 rounded-2xl group hover:bg-primary hover:text-white max-w-[320px] mx-3">
                            <p className="font-bold ">{i.title}</p>
                            <div className="flex items-start justify-center gap-4">
                                <div className="border p-2 bg-primary group-hover:bg-white rounded-full text-white group-hover:text-primary">
                                    <Quote size={10} />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="h-48 overflow-auto">
                                        <p className="text-gray-500 group-hover:text-white">{i.comment}</p>
                                    </div>

                                    <hr className="border-slate-300 border-[.5px]" />

                                    <div className="flex items-center gap-3">
                                        <div className={`bg-${color[Math.floor(Math.random() * color.length)]}-500 rounded-full h-14 w-14 flex items-center`}>
                                            <span className="mx-auto my-auto text-white">{i.firstname.at(0) + i.lastname.at(0)}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="font-bold">{`${i.firstname} ${i.lastname}`}</p>
                                            <Rating style={{ maxWidth: 90 }} value={i.rate} readOnly />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </Marquee>
            </div>
        </div>
    )
}

export default Testimonials