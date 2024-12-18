import Aos from 'aos';
import React, { useEffect, useState } from 'react'
import { BsCart4 } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa'
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp, IoIosColorPalette } from 'react-icons/io'
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { RiMenu2Line } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    // shopping cart toggle 
    const [cart, setCart] = useState(false);
    // mobile cart toggle 
    const [mobile, setMobile] = useState(false);
    // Allproduct  toggle 
    const [allproducts, setAllProducts] = useState(false);
    // customize  toggle 
    const [bg, setBg] = useState(false);
    // offer  toggle 
    // const [offer, setOffer] = useState(false);
    // bgcolor  toggle 
    const [bgColor, setBgColor] = useState('#0472F0'); // Default background color
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

    const [goToTop, setGoToTop] = useState(false);

    // Handle scroll event
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setGoToTop(true);
        } else {
            setGoToTop(false);
        }
    };

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scroll animation
        });
    };

    // Add and remove scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    // toggle all products 
    const [allproduct, setAllProduct] = useState(false)
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
        },
    ];

    // Aos animation code here 
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    // item length 
    const state = useSelector((state) => state.cart.carts);
    // console.log(state)
    const subtotal = state.reduce((total, item) => total + item.price * item.qty, 0);

    // Color change handler
    const handleColorChange = (color) => {
        setBgColor(color); 
    };
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setOffer(true);
    //     }, 3000);

    //     
    //     return () => clearTimeout(timer);
    // }, []);

    // useEffect(()=>{
    //     if (offer) {
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = 'auto';
    //     }


    //     return () => {
    //         document.body.style.overflow = 'auto';
    //     };
    // },[])
    return (
        <>
            <div>
                {/* navbar here */}
                <nav className="relative">
                    {/* First Navbar */}
                    <div className={`md:flex hidden  border-b-[1px]  border-gray-600 items-center justify-between text-white px-10 bg-[${bgColor}] h-[36px]`}>
                        <div className="flex items-center gap-1">
                            <p>24/7 Customer service</p>
                            <span className="font-bold">1-800-234-5678</span>
                        </div>
                        <div className="items-center gap-8 hidden md:flex">
                            <p>Shipping & return</p>
                            <Link to={'/admin/dashboard'}>Admin</Link>
                        </div>
                    </div>

                    {/* Second Navbar */}
                    <div className={`bg-[${bgColor}] h-[80px] flex items-center justify-between text-white md:px-10 px-5`}>
                        <div className="md:flex flex items-center gap-5">
                            <button
                                className="flex md:hidden transition duration-300"
                                onClick={() => setMobile(!mobile)}
                            >
                                {mobile ? (
                                    <RxCross2 className="text-3xl" />
                                ) : (
                                    <RiMenu2Line className="text-3xl" />
                                )}
                            </button>
                            <Link to={'/'}>
                                <img src="/images/logos.svg" alt="logo" />
                            </Link>
                        </div>
                        <div className="relative">
                            <input
                                className="md:flex hidden h-11 w-[21vw] px-4 border-b-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                type="text"
                                placeholder="Search product ..."
                            />
                            <FaSearch className="md:flex hidden absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#0769DA]" />
                            <button
                                className="flex md:hidden transition duration-300"
                                onClick={() => setCart(!cart)}
                            >
                                <BsCart4 className="text-3xl" />
                            </button>
                        </div>
                    </div>

                    {/* Third Navbar */}
                    <div className={`relative px-10 bg-[${bgColor}] border-t-[1px] border-gray-600 text-white h-[65px] md:flex hidden items-center justify-between`}>
                        {/* All Products Section */}
                        <div className="flex items-center gap-4 cursor-pointer font-bold">
                            <button
                                onClick={() => setAllProduct(!allproduct)}
                                className="flex items-center gap-4"
                            >
                                <span>All Products</span>
                                {allproduct ? (
                                    <IoIosArrowDown className="font-bold text-xl" />
                                ) : (
                                    <MdOutlineKeyboardArrowUp className="text-xl font-bold" />
                                )}
                            </button>
                        </div>

                        {/* Other Menu Items */}
                        <div className="flex items-center gap-10">
                            {menu.map((item, index) => (
                                <div key={index}>
                                    <Link to={item.link} className="font-bold">
                                        {item.label}
                                    </Link>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center relative gap-10">
                            <button
                                className="transition duration-300"
                                onClick={() => setCart(!cart)}
                            >
                                <BsCart4 className="text-2xl" />
                            </button>
                            <Link to={'/login'} className="font-semibold text-[18px]">Log In</Link>
                            {/* Cart Number */}
                            <span className="h-5 w-5 absolute -top-4 left-3 cursor-pointer rounded-full flex items-center justify-center bg-white text-[#0472F0]   font-bold">
                                {state.length}
                            </span>
                        </div>

                        {/* Hover Link Items */}
                        {allproduct && (
                            <div className={`h-[20vw] w-[20vw] bg-[${bgColor}] absolute top-16 z-[999]`}>
                                <div className="p-5">
                                    {hoverlink.map((item, index) => (
                                        <ul key={index}>
                                            <Link to={item.link} className="text-2xl">
                                                {item.label}
                                            </Link>
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
                            <div className="fixed top-0 right-0 h-full w-[400px] bg-white shadow-lg z-50">
                                {/* Header */}
                                <div className="md:ml-0 ml-12 flex justify-between items-center border-b md:px-5 py-4">
                                    <h2 className="text-lg font-bold">Shopping Cart</h2>
                                    <button
                                        onClick={() => setCart(!cart)}
                                        className="text-gray-400 md:mr-0 ml-12 hover:text-black text-2xl font-semibold transform transition-transform duration-300 hover:rotate-180"
                                    >
                                        <RxCross2 className="md:text-3xl text-4xl" />
                                    </button>
                                </div>

                                {/* Cart Items */}
                                <div className="px-5 py-4 h-[60vh] overflow-y-auto">
                                    {state.map((item) => (
                                        <div key={item.id} className="flex justify-between items-center border-b pb-4 mb-4">
                                            {/* Product Image */}
                                            <div className="h-16 w-16 bg-gray-200 rounded-md">
                                                <img src={item.img} alt={item.name} />
                                            </div>

                                            {/* Product Details */}
                                            <div className="flex-1 px-4">
                                                <p className="text-sm font-semibold">{item.name}</p>
                                            </div>

                                            {/* Price */}
                                            <div className="text-gray-600 font-bold">Rs{item.price}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Subtotal */}
                                <div className="px-5 py-4 border-t">
                                    <div className="flex justify-between items-center mb-4">
                                        {state.length > 0 ? (
                                            <>
                                                <p className="text-sm font-semibold">Subtotal:</p>
                                                <p className="text-lg font-bold">Rs{subtotal.toFixed(2)}</p>
                                            </>
                                        ) : (
                                            ""
                                        )}
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
                                        <div className="text-center text-gray-500 text-sm">
                                            Your cart is empty. Add items to get started!
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* bg color change */}
                    <div className="flex items-center justify-between p-5 h-12 w-36 top-[95vw] md:top-[21.6vw] fixed right-0 z-[999] bg-white border cursor-pointer hover:bg-blue-500 group transition-all">
                        <button onClick={() => setBg(!bg)}>
                            <IoIosColorPalette className="text-xl text-blue-500 group-hover:text-white" />
                            <p className="font-semibold text-gray-500 group-hover:text-white">Customize</p>
                        </button>
                    </div>
                    {bg && (
                        <div className="h-[100vh] md:w-[30vw] w-[81vw] top-0 fixed right-0 z-[999] bg-white">
                            <div className="border shadow-blue-500 shadow-[0_4px_8px_rgba(0,0,0,0.3)] h-24 flex items-center justify-between bg-white p-5 w-full">
                                <h2 className="text-gray-500 font-semibold text-[20px]">Electronic Store</h2>
                                <button
                                    onClick={() => setBg(!bg)}
                                    className="text-gray-400 md:mr-0 ml-12 hover:text-black text-2xl font-semibold transform transition-transform duration-300 hover:rotate-180"
                                >
                                    <RxCross2 className="md:text-3xl text-4xl" />
                                </button>
                            </div>

                            {/* Color Options */}
                            <div className=" p-4">
                                <div className="mb-4">
                                    <p className="font-bold text-[15px] mb-3">Select Theme Color</p>

                                </div>
                                <div className='flex flex-col gap-5'>
                                    <div
                                        onClick={() => handleColorChange('#0472F0')}
                                        className="w-full h-16 md:h-[4vw] bg-[#0472F0] cursor-pointer"
                                    />
                                    <div
                                        onClick={() => handleColorChange('#212121')}
                                        className="w-full h-16 md:h-[4vw] bg-[#212121] cursor-pointer"
                                    />
                                    <div
                                        onClick={() => handleColorChange('#FE42B2')}
                                        className="w-full h-16 md:h-[4vw] bg-[#FE42B2] cursor-pointer"
                                    />
                                    <div
                                        onClick={() => handleColorChange('#FF5100')}
                                        className="w-full h-16 md:h-[4vw] bg-[#FF5100] cursor-pointer"
                                    />
                                    <div
                                        onClick={() => handleColorChange('#EE4D49')}
                                        className="w-full h-16 md:h-[4vw] bg-[#EE4D49] cursor-pointer"
                                    />
                                    <div
                                        onClick={() => handleColorChange('#000000')}
                                        className="w-full h-16 md:h-[4vw] bg-[#000000] cursor-pointer"
                                    />
                                    <div
                                        onClick={() => handleColorChange('#0ba0db')}
                                        className="w-full h-16 md:h-[4vw] bg-[#0ba0db] cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </nav>


                <div>{children}</div>
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
                {/* goto the top */}
                {goToTop && (
                    <div
                        onClick={scrollToTop}
                        className={`fixed bottom-5 right-8 md:right-10 flex items-center justify-center bg-[${bgColor}] md:h-8 md:w-8 h-10 w-10  shadow-lg cursor-pointer hover:bg-blue-600 transition-all`}
                    >
                        <MdOutlineKeyboardArrowUp className="text-white text-3xl" />
                    </div>
                )}
                {/* offers */}

                {/* {offer && (
                    <div className="h-[40vw] w-[70vw] bg-[url('https://img.freepik.com/premium-photo/online-fashion-shopping-with-laptop_23-2150400630.jpg?w=740')] bg-cover bg-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                        <div className="p-5 h-16 flex items-center justify-between">
                           <p></p>
                            <button
                                onClick={() => setOffer(false)}
                                className="text-3xl text-white hover:transform hover:rotate-180 transition duration-300"
                            >
                                <RxCross2 />
                            </button>
                        </div>
                        <div className="flex flex-col items-center justify-center h-full text-center text-white">
                            <h1 className="text-4xl font-extrabold mb-4">Grab Your Offer Now!</h1>
                            <p className="text-lg mb-6">Don't miss out on exclusive deals. Shop your favorites today!</p>
                            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-xl font-bold transition duration-300">
                                Shop Now
                            </button>
                        </div>
                    </div>
                )} */}



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
                    <div className={`px-10 md:h-[10vw] h-[35vw] bg-[${bgColor}] text-gray-300 flex justify-between items-center`}>
                        <span className='md:text-sm text-[10px]'>© 2024 Electronic Store. Powered by Electronic Store</span>
                        <div>
                            <img src="/images/visa.png" alt="Visa" />
                        </div>
                    </div>
                </footer>

            </div>
        </>
    )
}

export default Layout
