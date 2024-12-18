import React from 'react'
import Layout from '../Layout/Layout'
import newarrivalsdata from "../../AlllJsonData/NewArrivals/NewArrivals.json";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';

const NewArrivals = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
        AOS.refresh();
    }, []);
    return (
        <>

            <Layout>
                <div className='p-5 md:px-10  md:h-36 bg-white flex items-center'>
                    <h1 className='md:text-6xl text-3xl text-gray-500 font-bold'>New arrivals</h1>
                </div>
                <div className='p-5 md:px-10  mb-16 min-h-screen bg-[#F6FBFD]'>
                    <div className='mt-10 mb-10 md:h-44 h-[50vw] flex flex-col md:flex-row gap-5 items-center'>
                        {/* Image 1 */}
                        <div className='w-full md:w-1/2 h-full bg-[url(/images/electronic-banner-1.jpg)] bg-no-repeat bg-cover bg-center'></div>
                        {/* Image 2 */}
                        <div className='w-full md:w-1/2 h-full bg-[url(/images/electronic-banner-2.jpg)] bg-no-repeat bg-cover bg-center'></div>
                    </div>

                    <div className="md:flex  flex-wrap justify-between gap-5 bg-white h-full w-full p-5">
                        {newarrivalsdata.map((item, index) => (
                            <Link key={index} to={`/newarrivalsdetails/${item.id}`}>
                                <div
                                data-aos="fade-up"
                                    className="flex flex-col md:mb-10 mb-14 items-center md:h-[35vw] md:w-[21vw] "
                                >
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="h-72 w-full object-cover"
                                    />
                                    <div className="pt-5 flex flex-col items-start w-full px-3 mt-2">
                                        <span className="text-sm text-gray-700">{item.rating}</span>
                                        <label htmlFor="" className="text-base font-semibold text-gray-500">
                                            {item.name.slice(0, 85)}
                                        </label>
                                        {/* Price and Discount */}
                                        <div className="pt-5 flex gap-3">
                                            <label className="font-semibold">Rs{(item.price - (item.price * item.discount) / 100).toFixed()}</label>
                                            <del className="text-gray-600">Rs{item.price}</del>
                                            <label className="text-red-600">({item.discount}% OFF)</label>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>




                </div>
            </Layout>

        </>
    )
}

export default NewArrivals
