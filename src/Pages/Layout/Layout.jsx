import React, { useEffect, useState } from 'react';
import { BsCart4 } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp, IoIosColorPalette } from 'react-icons/io';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { RiMenu2Line } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {

    const location = useLocation()
    // shopping cart toggle 
    const [cart, setCart] = useState(false);
    // mobile cart toggle 
    const [mobile, setMobile] = useState(false)
    // Allproduct  toggle 
    const [allproducts, setAllProducts] = useState(false)
    // disabled scroll behaviour
    useEffect(() => {
        if (cart) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [cart]);

    // menu link item here 
    const menu = [
        {
            label: 'Home Appliances',
            link: '/appliancess_home'
        },
        {
            label: 'Audio & video',
            link: '/video_and_audio'
        },
        {
            label: 'Refrigerator',
            link: '/refrigerator'
        },
        {
            label: 'New arrivals',
            link: '/new-arrivals'
        },
        {
            label: 'Todays deal',
            link: '/todays-deal'
        },
        {
            label: 'Gift cards',
            link: '/gift-cards'
        },
    ];
    // toggle all products 
    const [allproduct, setAllProduct] = useState(false)
    // hover menu link item here 
    const hoverlink = [
        {
            label: 'Air conditioner',
            link: '/conditioner_air'
        },
        {
            label: 'Kitchen appliances',
            link: '/appliances_kitchen'
        },
        {
            label: 'PC & laptop ',
            link: '/laptop_and_pc'
        },
        {
            label: 'Gadgets',
            link: '/gadgets'
        },
        {
            label: 'Smart home',
            link: '/home_smart'
        }
    ];
    // sidebar link 
    const sidebar = [
        {
            label: 'Air conditioner',
            link: '/conditioner_air'
        },
        {
            label: 'Audio & video',
            link: '/video_and_audio'
        },
        {
            label: 'Gadgets',
            link: '/gadgets'
        },
        {
            label: 'Home appliances',
            link: '/appliancess_home'
        },
        {
            label: 'Kitchen appliances',
            link: '/appliances_kitchen'
        },
        {
            label: 'PCs & laptop',
            link: '/laptop_and_pc'
        },
        {
            label: 'Refrigerator',
            link: '/refrigerator'
        },
        {
            label: 'Smart home',
            link: '/home_smart'
        }
    ];
    // on top
    useEffect(() => (
        window.scroll(0, 0)
    ));
    const state = useSelector((state) => state.cart.carts);
    const subtotal = state.reduce((total, item) => total + item.price * item.qty, 0);
    
 
    return (
        <>
            <div className="min-h-screen flex flex-col">
                {/* Navbar */}
                <nav className='relative'>
                    {/* First Navbar */}
                    <div className='md:flex hidden  items-center justify-between text-white px-10 bg-[#0769DA] h-[36px]'>
                        <div className='flex items-center gap-1'>
                            <p>24/7 Customer service</p>
                            <span className='font-bold'>1-800-234-5678</span>
                        </div>
                        <div className=' items-center gap-8 hidden md:flex'>
                            <p>Shipping & return</p>
                            <span>Track order</span>
                        </div>
                    </div>



                    {/* Second Navbar */}
                    <div className='bg-[#0472F0] h-[80px] flex items-center justify-between text-white md:px-10 px-5'>
                        <div className='md:flex flex items-center gap-5'>
                            <button
                                className='flex md:hidden transition duration-300'
                                onClick={() => setMobile(!mobile)}
                            >
                                <RiMenu2Line className='text-3xl' />
                            </button>
                            <Link to={'/'}>
                                <img src="/images/logos.svg" alt="logo" />
                            </Link>
                        </div>
                        <div className="relative ">
                            <input
                                className="md:flex hidden h-11 w-[21vw] px-4 border-b-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                type="text"
                                placeholder="Search product ..."
                            />
                            <FaSearch className="md:flex hidden absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#0769DA]" />
                            <button
                                className='flex md:hidden transition duration-300'
                                onClick={() => setCart(!cart)}
                            >
                                <BsCart4 className='text-3xl' />
                            </button>

                        </div>
                    </div>

                    {/* Third Navbar */}
                    <div className='relative px-10 bg-[#0472F0] border-t-[1px] border-gray-600 text-white h-[65px] md:flex hidden items-center justify-between'>
                        {/* All Products Section */}
                        <div className='flex items-center gap-4 cursor-pointer font-bold'>
                            <button onClick={() => setAllProduct(!allproduct)} className='flex items-center gap-4'>
                                <span>All Products</span>
                                {allproduct ? (
                                    <IoIosArrowDown className='font-bold text-xl' />
                                ) : (
                                    <MdOutlineKeyboardArrowUp className='text-xl font-bold' />
                                )}
                            </button>
                        </div>

                        {/* Other Menu Items */}
                        <div className='flex items-center gap-10'>
                            {menu.map((item, index) => (
                                <div key={index}>
                                    <Link to={item.link} className='font-bold'>{item.label}</Link>
                                </div>
                            ))}
                        </div>

                        <div className='flex items-center relative gap-10'>
                            <button
                                className='transition duration-300'
                                onClick={() => setCart(!cart)}
                            >
                                <BsCart4 className='text-2xl' />
                            </button>
                            <span className='font-semibold text-[18px]'>Log In</span>
                            {/* Cart Number */}
                            <span className='h-5 w-5 absolute -top-4 left-3 cursor-pointer rounded-full flex items-center justify-center bg-white text-[#0472F0] font-bold'>{state.length}</span>
                        </div>

                        {/* Hover Link Items */}
                        {allproduct && (
                            <div className='h-[20vw] w-[20vw] bg-[#0472F0] absolute top-16 z-[999]'>
                                <div className='p-5'>
                                    {hoverlink.map((item, index) => (
                                        <ul key={index}>
                                            <Link to={item.link} className='text-2xl'>{item.label}</Link>
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Cart Sidebar */}
                    <div
                        className={`absolute top-0 left-0 w-full h-full bg-[#110d0da8] z-[9999999] 
      transition-opacity duration-500 ${cart ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    >
                        <div
                            className={`h-full w-[30vw] fixed top-0 right-0 bg-white transition-transform duration-500 
        ${cart ? 'translate-x-0' : 'translate-x-full'}`}
                        >
                            <div className='h-16 border-b-[2px] border-gray-300 flex items-center justify-between p-5 bg-white'>
                                <p className='font-bold text-gray-500'>Shopping Cart</p>
                                <button
                                    onClick={() => setCart(!cart)}
                                    className='transition-all text-2xl text-gray-600 font-bold'
                                >
                                    <RxCross2 />
                                </button>

                            </div>
                            <div className="fixed top-0 right-0 h-full w-[400px] bg-white shadow-lg z-50">
                                {/* Header */}
                                <div className="md:ml-0 ml-12 flex justify-between items-center border-b px-5 py-4">
                                    <h2 className="text-lg font-bold">Shopping Cart</h2>
                                    <button
                                        onClick={() => setCart(!cart)}
                                        className="text-gray-400 hover:text-black text-2xl font-semibold transform transition-transform duration-300 hover:rotate-180"
                                    >
                                        <RxCross2 className='md:text-3xl text-4xl' />
                                    </button>

                                </div>

                                {/* Cart Items */}
                                <div className="px-5 py-4 h-[60vh] overflow-y-auto">

                                    {
                                        state.map((item) => (
                                            <div key={item.id} className="flex justify-between items-center border-b pb-4 mb-4">
                                                {/* Product Image */}
                                                <div className="h-16 w-16 bg-gray-200 rounded-md">
                                                    <img src={item.img} alt={item.name} />
                                                </div>

                                                {/* Product Details */}
                                                <div className="flex-1 px-4">
                                                    <p className="text-sm font-semibold">
                                                        {item.name}
                                                    </p>
                                                </div>

                                                {/* Price */}
                                                <div className="text-gray-600 font-bold">Rs{item.price}</div>
                                            </div>
                                        ))
                                    }
                                </div>


                                {/* Subtotal */}
                                <div className="px-5 py-4 border-t">
                                    {/* Subtotal Section */}
                                    <div className="flex justify-between items-center mb-4">
                                        {state.length > 0 ? (
                                            <>
                                                <p className="text-sm font-semibold md:text-base">Subtotal:</p>
                                                <p className="text-lg font-bold md:text-xl">Rs{subtotal.toFixed(2)}</p>
                                            </>
                                        ) : (
                                            ""
                                        )}
                                        {/* Empty Cart Message */}
                                    </div>

                                    {state.length > 0 ? (
                                        <div className="space-y-3">
                                            <Link to={'/view-carts'}>
                                                <button className="w-full px-4 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700">
                                                    View Cart
                                                </button>
                                            </Link>
                                            <button className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500">
                                                Checkout
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="text-center text-gray-500 text-sm md:text-base">
                                            Your cart is empty. Add items to get started!
                                        </div>
                                    )}
                                </div>


                            </div>

                        </div>
                    </div>


                  
                </nav>


                {/* Main Content */}
                <div className="flex flex-grow">
                    {/* Sidebar */}
                    <aside className="hidden md:block flex-shrink-0 w-[250px] px-10 min-h-screen border-r-2 p-6">
                        <h3 className="text-lg font-semibold mb-4">Categories</h3>
                        <ul className="flex flex-col space-y-4">
                            {
                                sidebar.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            className={`font-medium hover:text-blue-500 transition-all ${location.pathname === item.link ? "text-blue-500" : "text-gray-500"}`}
                                            to={item.link}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </aside>


                    {/* Main Content Area */}

                    <main>{children}</main>

                    {/* mobil link  */}
                    {
                        mobile && <div className=' absolute md:hidden top-[21.9vw] left-0 bg-white h-96 w-full'>
                            <div>
                                <div className='p-5  bg-white flex items-center justify-between'>
                                    <h2 className='text-xl font-semibold text-gray-500'>All products</h2>
                                    <button onClick={() => setAllProducts(!allproducts)} className='text-3xl'>
                                        {
                                            allproducts ? <IoIosArrowUp />
                                                :

                                                <IoIosArrowDown />
                                        }
                                    </button>
                                </div>
                                {
                                    allproducts && (
                                        <div className='p-5 h-64 bg-[#E9EAED]  flex flex-col justify-between'>
                                            {
                                                hoverlink.map((item, index) => (
                                                    <div key={index} className='px-2 flex items-center gap-2'>
                                                        <IoIosArrowForward className='text-blue-500' />
                                                        <Link className='text-blue-500' to={item.link}>{item.label}</Link>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )
                                }
                            </div>
                            <div className='h-ful bg-[#E9EAED]'>
                                {
                                    menu.map((item, index) => (
                                        <div key={index} className='text-white p-5'>
                                            <Link className='text-blue-500' to={item.link}>{item.label}</Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    }
                </div>

                {/* Footer */}
                <footer className='h-[30vw] '>
                    <div className='px-10 flex flex-col md:flex-row md:items-center md:justify-between border-t-2 md:h-[20vw] bg-white'>
                        <div className='mb-4 md:mt-0 mt-5 md:mb-0'>
                            <img className='bg-gray-500' src="/images/logos.svg" alt="Logo" />
                        </div>
                        <div className='mb-4 md:mb-0'>
                            <h2 className='font-bold text-2xl pb-10'>Shop</h2>
                            <div className='flex font-semibold text-blue-500 flex-col'>
                                <Link>Hot deals</Link>
                                <Link>Categories</Link>
                                <Link>Brands</Link>
                                <Link>Rebates</Link>
                                <Link>Weekly discount</Link>
                            </div>
                        </div>
                        <div className='mb-4 md:mb-0'>
                            <h2 className='font-bold text-2xl pb-10'>Need help?</h2>
                            <div className='flex font-semibold text-blue-500 flex-col'>
                                <Link>Contact</Link>
                                <Link>Order tracking</Link>
                                <Link>FAQs</Link>
                                <Link>Return policy</Link>
                                <Link>Privacy policy</Link>
                            </div>
                        </div>
                        <div className='mb-4 md:mb-0'>
                            <h2 className='font-bold text-2xl pb-10'>Contact</h2>
                            <div className='flex font-semibold text-blue-500 flex-col'>
                                <Link>123 Fifth Avenue, Kathmandu, New</Link>
                                <Link>Road</Link>
                                <Link>support@info.com</Link>
                                <Link>9874563210</Link>
                            </div>
                        </div>
                    </div>
                    <div className='px-10 md:h-[7vw] mt-10 h-[35vw] bg-[#27333E] text-gray-300 flex justify-between items-center'>
                        <span className='md:text-sm text-[10px]'>© 2024 Electronic Store. Powered by Electronic Store</span>
                        <div className='flex items-center gap-5'>
                            <img className='h-[3vw]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkh_LDiTlmPFGl7wxdEyJVTXTSg6ni6nUDCa91XOJ3jjfvG3mrTcGKYzI7tkAw5Xv0uvY&usqp=CAU" alt="Visa" />
                            <img className='h-[3vw]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Hs5PTz2c6EnHlTimU7la4SKSZ3xKMhWZBA&s" alt="Visa" />
                            <img className='h-[3vw]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAIOu8V2wUmLzF7cUIq0MO0caYT1lyusHXcg&s" alt="Visa" />
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Layout;
