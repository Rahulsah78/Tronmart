import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import todayData from '../../AlllJsonData/Todaybest/Todaybest.json';
import { BsCart4 } from 'react-icons/bs';
import { MdPlayArrow } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../../Redux/Allslices/CartSlice';
import { toast } from 'react-toastify';
import AOS from 'aos';
import { useEffect } from 'react';


const BestDeal = () => {
    const [hoveredItemId, setHoveredItemId] = useState(null);

    // Handle mouse enter and leave events
    const handleMouseEnter = (id) => {
        setHoveredItemId(id);
    };

    const handleMouseLeave = () => {
        setHoveredItemId(null);
    };

    // const state = useSelector((state) => state);
    // console.log(state)
    const dispatch = useDispatch();
    // add to cart 
    const ADDTOCART = (item) => {
        dispatch(addtocart(item));
        toast.success('item added to cart')
    }
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
        AOS.refresh();
    }, []);
    return (
        <div className='p-10 bg-[#F7FAFD] min-h-screen'>
            <h1 className='text-2xl font-bold'>Today’s best deal</h1>
            <div  className='h-full flex gap-[8px] items-center flex-wrap justify-between mt-5'>
                {todayData.map((item) => {
                    return (
                        <div data-aos="fade-up" className='overflow-hidden relative md:h-[vw] md:w-[22vw] mb-6 group' key={item.id}>
                            <div className='flex flex-col items-center'>
                                <Link to={`/productsdetails/${item.id}`}>
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className='transition-all duration-300 ease-in-out'
                                    />
                                </Link>
                                <Link to={`/productsdetails/${item.id}`}>
                                    <div className='px-6 flex flex-col'>
                                        <span className='pt-2 text-xl text-yellow-400'>{item.rating}</span>
                                        <span className='pt-2 md:text-xl text-sm font-bold'>{item.name.slice(0, 70)}...</span>
                                        {/* Price and Discount */}
                                        <div className="pt-5 flex gap-3">
                                            <label className="font-semibold">Rs{(item.price - (item.price * item.discount) / 100).toFixed()}</label>
                                            <del className="text-gray-600">Rs{item.price}</del>
                                            <label className="text-red-600">({item.discount}% OFF)</label>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            {/* Sale Badge */}
                            <span className=' py-2 px-6 font-bold rounded-[50px] bg-white text-blue-500 shadow-md text-xs absolute top-3 left-3'>
                                Sale
                            </span>

                            {/* Cart Icon */}
                            <div>
                                <div
                                    onMouseEnter={() => handleMouseEnter(item.id)}
                                    onMouseLeave={handleMouseLeave}
                                    className='h-8 w-8 flex items-center justify-center font-bold rounded-[50px] bg-blue-500 text-white text-xs absolute top-3 right-[-30px] opacity-0 group-hover:opacity-100 group-hover:right-3 transition-all duration-300 ease-in-out'>
                                    <button onClick={() => ADDTOCART(item)}>
                                        <BsCart4 className='text-xl' />
                                    </button>
                                </div>

                                {/* Show Text When Hovering */}
                                {hoveredItemId === item.id && (
                                    <div className='flex items-center absolute top-3 right-[45px]'>
                                        <button onClick={()=>ADDTOCART(item)} className='text-xs px-2 py-1 bg-blue-500 text-white shadow-md'>
                                            Add to Cart
                                        </button>
                                        <MdPlayArrow className='text-xl text-blue-500' />
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div data-aos="fade-up" className='hidden mt-10md:mb-44 mb-14 h-64 md:flex md:flex-row flex-col md:gap-8 gap-5 items-center justify-between'>
                <div className='h-full w-full md:w-[400px] flex items-center justify-between bg-[#F1F3F7] p-6 rounded-lg shadow-lg'>
                    <div className='text-white'>
                        <h1 className='text-3xl text-black font-bold'>Wireless Headphones</h1>
                        <p className='mt-2 text-gray-500 text-lg'>Starting at $49</p>
                        <button className='py-2 text-blue-500 font-semibold'>Shop Now</button>
                    </div>
                    <img
                        src='/BestDeal/banner1.png'
                        alt='banner'
                        className='mt-10 md:w-[100px] w-[25vw] h-auto object-cover rounded-lg'
                    />
                </div>

                <div className='h-full w-full md:w-[400px] flex items-center justify-between bg-[#E9EAED] p-6 rounded-lg shadow-lg'>
                    <div className='text-white'>
                        <h1 className='text-3xl text-black font-bold'>Grooming</h1>
                        <p className='mt-2 text-gray-500 text-lg'>Starting at $49</p>
                        <button className='mt-4 text-blue-500 font-semibold'>Shop Now</button>
                    </div>
                    <img
                        src='/BestDeal/trimer.png'
                        alt='banner'
                        className='mt-10 hidden md:block w-[200px] h-auto object-cover rounded-lg'
                    />
                </div>

                <div className='h-full w-full md:w-[400px] flex items-center justify-between bg-[#F8EDD1] p-6 rounded-lg shadow-lg'>
                    <div className='text-white'>
                        <h1 className='text-3xl text-black font-bold'>Video games</h1>
                        <p className='mt-2 text-gray-500 text-lg'>Starting at $49</p>
                        <button className='mt-4 text-blue-500 font-semibold'>Shop Now</button>
                    </div>
                    <img
                        src='/BestDeal/game.png'
                        alt='banner'
                        className='mt-16 hidden md:block w-[100px] h-auto object-cover rounded-lg'
                    />
                </div>
            </div>



        </div>
    );
};

export default BestDeal;
