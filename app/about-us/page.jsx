import AboutSection from '@/components/contact/aboutSection'
import GetInTouch from '@/components/contact/getInTouch'
import Hero from '@/components/contact/hero'
import WhyUs from '@/components/contact/whyUs'
import React from 'react'



const AboutUs = () => {
    return (
        <div id='top'>
            <AboutSection />
            <Hero />
            <WhyUs />
            <GetInTouch />
        </div>
    )
}

export default AboutUs