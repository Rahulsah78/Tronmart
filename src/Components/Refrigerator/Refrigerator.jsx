import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import refrigeratordata from "../../AlllJsonData/Refrigerator/Refrigerator.json"
import { BsCart4 } from 'react-icons/bs';
import { MdPlayArrow } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addtocart } from '../../Redux/Allslices/CartSlice';
import { toast } from 'react-toastify';
import AOS from 'aos';
import { useEffect } from 'react';

const Refrigerator = () => {
    const [hoveredItemId, setHoveredItemId] = useState(null);

    // Handle mouse enter and leave events
    const handleMouseEnter = (id) => {
        setHoveredItemId(id);
    };

    const handleMouseLeave = () => {
        setHoveredItemId(null);
    };
    const dispatch = useDispatch();
    // add to cart 
    const ADDTOCART = (item) => {
        dispatch(addtocart(item));
        toast.success('item added to cart')
    };
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
            <div className='p-5 md:px-10 flex flex-col gap-2 items-center  min-h-screen bg-[#F7FAFD]'>
                <div className='px-5 shadow-md  bg-white h-full '>
                    <h1 className='pt-4 text-2xl font-bold'>Refrigerator</h1>
                    <div className='flex gap-5 items-center justify-between'>
                        <div className='h-full flex gap-[5px] items-center  flex-wrap justify-between mt-5 bg-ore-500'>
                            {
                                refrigeratordata.map((item, index) => {
                                    
                                    return (
                                        <div data-aos="fade-up" key={index} className='overflow-hidden relative  md:h-[37vw] md:w-[22vw] mb-6 group'>
                                            <Link to={`/refrigeratordetails/${item.id}`} className='flex flex-col items-center'>
                                                <img src={item.img} alt={item.name} className="transition-all duration-300 ease-in-out" />
                                                <div className='px-6 flex flex-col'>
                                                    <span className="pt-2 text-xl text-yellow-400">{item.rating}</span>
                                                    <span className='pt-2 font-bold'>{item.name.slice(0, 70)}...</span>

                                                    {/* Price and Discount */}
                                                    <div className="pt-5 flex gap-3">
                                                        <label className="font-semibold">Rs{(item.price - (item.price * item.discount) / 100).toFixed()}</label>
                                                        <del className="text-gray-600">Rs{item.price}</del>
                                                        <label className="text-red-600">({item.discount}% OFF)</label>
                                                    </div>
                                                </div>
                                            </Link>

                                            {/* Sale Badge */}
                                            {
                                                index === 1 || index === 2 || index === 3 ? (
                                                    <span className="py-2 px-6 font-bold rounded-full bg-white text-blue-500 shadow-md text-xs absolute top-3 left-3">
                                                        Sale
                                                    </span>
                                                ) : (
                                                    ""
                                                )
                                            }


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
                                                    <>
                                                        <div className='flex items-center  absolute top-3 right-[45px]  '>
                                                            <div className='text-xs px-2 py-1  bg-blue-500 text-white shadow-md' >
                                                                Add to Cart
                                                            </div>
                                                            <MdPlayArrow className='text-blue-500' />
                                                        </div>


                                                    </>
                                                )}
                                            </div>
                                        </div>

                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                {/* banner here  */}
                <div className='h-36 mb-10  bg-[url(/Refrigerator/promotional-banner1.jpg)] w-full'></div>
            </div>
        </>
    )
}

export default Refrigerator
