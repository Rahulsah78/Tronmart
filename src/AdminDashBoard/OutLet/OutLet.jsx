import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowDown, IoIosMoon, IoMdNotifications, IoMdSettings } from 'react-icons/io';
import { IoMoonOutline } from 'react-icons/io5';
import { MdDashboard } from 'react-icons/md';
import { RiMenu3Fill } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import notificationdata from '../../AlllJsonData/Notification/Notification.json';
import { FiMoon } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';


const OutLet = ({ children }) => {
    const location = useLocation();
    // admin link 
    const AdminLink = [
        {
            link: '/admin/dashboard',
            icon: <MdDashboard />,
            label: 'Dashboard'
        },
        {
            link: '/admin/products',
            icon: <MdDashboard />,
            label: 'Products',
            icons: <IoIosArrowDown />
        },
        {
            link: '/admin/category',
            icon: <MdDashboard />,
            label: 'Category'
        },
        {
            link: '/admin/inventory',
            icon: <MdDashboard />,
            label: 'Inventory'
        },
        {
            link: '/admin/orders',
            icon: <MdDashboard />,
            label: 'Orders'
        },
        {
            link: '/admin/customers',
            icon: <MdDashboard />,
            label: 'Customers'
        },

        {
            link: '/admin/chats',
            icon: <MdDashboard />,
            label: 'Chat'
        },
    ];
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    // notification toggle 
    const [notification, setNotification] = useState(false)
    // State for background color
    const [isDarkMode, setIsDarkMode] = useState(false);
    // theme toggle
    // const [theme, setTheme] = useState(false);

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside
                className={`hidden md:block z-[50] overflow-y-auto h-full fixed top-0 left-0 transition-all duration-300 ${isDarkMode ? "bg-[#262C35] text-white" : "bg-[#F7FBFC] text-black"
                    } ${isSidebarOpen ? 'w-[280px]' : 'w-0'} overflow-hidden scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300`}
            >
                <div className="p-5">
                    <Link to={'/'} className="text-xl font-bold text-blue-500">Tronmart</Link>
                    <nav className="mt-5 flex flex-col space-y-4">
                        {/* Add this class to hide links on mobile */}
                        {AdminLink.map((item, index) => (
                            <div key={index} className='px-5 py-2 flex items-center gap-2'>
                                <span
                                    className={`text-2xl ${location.pathname === item.link ? 'text-blue-500' : ''
                                        }`}
                                >
                                    {item.icon}
                                </span>
                                {/* Ensure links are hidden on mobile */}
                                <Link
                                    to={item.link}
                                    className="font-semibold hover:text-gray-300 hidden md:block"
                                >
                                    {item.label}
                                </Link>
                            </div>
                        ))}
                    </nav>
                </div>
            </aside>



            {/* Main Content Section */}
            <section
                className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-[280px]' : 'ml-0'
                    } `}
            >
                {/* Navbar */}
                <nav className={`border-b-2 sticky top-0 left-0 text-black flex items-center justify-between h-[35vw] p-5 md:h-24 ${isDarkMode ? "bg-[#262C35] text-white" : "bg-[#F7FBFC] text-black"
                    }`}>
                    <div className='flex items-center gap-4'>
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="text-3xl text-blue-500  "
                        >
                            <RiMenu3Fill />
                        </button>
                        <span className='text-2xl hidden md:block text-blue-500  font-semibold'>Welcome</span>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div>
                            <button onClick={() => setIsDarkMode(!isDarkMode)} className=" text-2xl md:text-2xl">

                                {isDarkMode ? <FiMoon className='text-blue-500' /> : <IoIosMoon />}
                            </button>
                        </div>
                        <div className='relative cursor-pointer'>
                            <button onClick={() => setNotification(!notification)} className='text-blue-500 text-2xl md:text-2xl'><IoMdNotifications /></button>
                            <span className='absolute -top-5 left-3 text-white flex items-center justify-center h-6 w-6 bg-blue-500 rounded-full'>3</span>
                            {
                                notification &&
                                <div className="absolute md:top-16 top-[21.5vw] -right-24 md:right-3 md:h-[25vw] w-[82vw] md:w-[27vw] border border-gray-300 rounded-lg shadow-lg bg-[#F7FBFC] p-2">
                                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Messages</h3>
                                    <div className="h-[80%] overflow-y-auto space-y-4">
                                        <div className="  transition duration-300">
                                            {notificationdata.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="h-24 bg-white text-black flex items-center p-4 gap-4 shadow-lg transition-all duration-300  hover:bg-[#F7FBFC] hover:text-black"
                                                >
                                                    {/* Avatar */}
                                                    <div className="h-14 w-14 rounded-full flex items-center justify-center overflow-hidden">
                                                        <img
                                                            src={item.img} // Use dynamic image from data
                                                            alt={`Notification Avatar ${index + 1}`}
                                                            className="h-full w-full rounded-full object-cover"
                                                        />
                                                    </div>

                                                    {/* Content */}
                                                    <div>
                                                        <h2 className="font-semibold text-lg">{item.label}</h2>
                                                        <p className="text-sm">
                                                            {item.para}
                                                        </p>
                                                    </div>
                                                </div>

                                            ))}
                                        </div>

                                    </div>
                                </div>

                            }

                        </div>

                        <div className='cursor-pointer md:h-10 md:w-10 h-16 w-16 overflow-hidden rounded-full  '>
                            <img src="/images/admin.enc" alt="admin" />
                        </div>
                        <div className="hidden md:block relative w-64">
                            <CiSearch className="text-2xl absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search... "
                                className=" pl-10 text-blue-500 placeholder-blue-500  py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
                            />
                        </div>
                    </div>
                </nav>

                {/* Main Content */}
                <main>
                    {children}
                </main>
            </section>
        </div>
    );
};

export default OutLet;
