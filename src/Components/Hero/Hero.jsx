import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import Category from '../Category/Category'
import BestDeal from '../Best deal/Best deal'
import AirConditioner from '../AirConditioner/AirConditioner'
import KitchenAppliances from '../KitchenAppliances/KitchenAppliances'
import Refrigerator from '../Refrigerator/Refrigerator'
import PCLaptop from '../PCs & Laptop/PCs & Laptop'
import Gadget from '../Gadget/Gadget'
import AudioAndVideo from '../AudioAndVideo/AudioAndVideo'
import TopBrands from '../TopBrands/TopBrands'
import Testimonial from '../Testimonial/Testimonial'
import Contact from '../Contact/Contact'
import HomeAppliances from '../HomeAppliances/HomeAppliances'

const Hero = () => {
    useEffect(() => (
        window.scroll(0, 0)
    ))
    return (
        <>
            <Layout>
                <div className='px-10 h-screen relative bg-[url(/images/hero-image.jpg)] bg-center md:bg-cover'>
                    <div className='p-5 flex flex-col items-start pt-16 space-y-5 absolute top-[50%] md:top-14 right-3 bg-white md:h-[400px] md:w-[380px] w-[340px]'>
                        <img src="/images/brand-logo.png" alt="" />
                        <h1 className='md:text-4xl text-[20px] text-gray-500 font-bold'>The best home entertainment <br /> system is here</h1>
                        <p className='text-gray-500'>Sit diam odio eget rhoncus volutpat est nibh velit posuere egestas.</p>
                        <button className='font-semibold text-blue-500'>Shop now</button>
                    </div>
                </div>

                {/* All components are here */}
                <Category />
                <BestDeal />
                <AudioAndVideo />
                <HomeAppliances />
                <AirConditioner />
                <KitchenAppliances />
                <Refrigerator />
                <PCLaptop />
                <Gadget />
                <TopBrands />
                <Testimonial />
                <Contact />
            </Layout>
        </>
    )
}

export default Hero
