import React from 'react'
import OutLet from '../OutLet/OutLet'
import { IoEyeOutline } from 'react-icons/io5'
import { AiOutlineEdit } from 'react-icons/ai'
import { MdDeleteOutline } from 'react-icons/md'

const Category = () => {
    const category = [
        { title: 'Fashion Categories', img: '/AdminProducts/admin-product1.png' },
        { title: 'Electronics Headphone', img: '/AdminProducts/admin-product6.png' },
        { title: 'Foot Wares', img: '/AdminProducts/admin-product7.png' },
        { title: 'Eye Ware & Sunglass', img: '/AdminProducts/admin-product8.png' },
    ]

    const productdata = [
        {
            id: 1, img: '/AdminProducts/admin-product1.png', name: 'Black T-shirt',
            price: 629.00, stock: 1900, Create: 'Admin',
        },
        {
            id: 2, img: '/AdminProducts/admin-product2.png', name: 'Olive Green Leather Bag',
            price: 629.00, stock: 46233, Create: 'Seller',
        },
        {
            id: 3, img: '/AdminProducts/admin-product3.png', name: 'Women Golden Dress',
            price: 629.00, stock: 1900, Create: 'Admin',
        },
        {
            id: 4, img: '/AdminProducts/admin-product4.png', name: 'Gray Cap For Men',
            price: 629.00, stock: 250, Create: 'Seller',
        },
    ]

    return (
        <OutLet>
            <div className='p-5  bg-[#F7FBFC]'>
                {/* Category Cards */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8'>
                    {category.map((item, index) => (
                        <div key={index} className='p-5 bg-white shadow-lg rounded-lg flex flex-col items-center '>
                            <div className={`w-full h-36 flex items-center justify-center rounded-md 
                                ${index % 4 === 0 ? 'bg-gray-200' : index % 4 === 1 ? 'bg-orange-200' : index % 4 === 2 ? 'bg-yellow-200' : 'bg-green-200'}`}>
                                <img src={item.img} alt={item.title} className='h-24 object-contain' />
                            </div>
                            <h3 className='mt-4 font-semibold text-lg text-center'>{item.title}</h3>
                        </div>
                    ))}
                </div>

                {/* Product Table */}
                <div className='bg-white p-5 rounded-lg shadow-md'>
                    <div className='overflow-x-auto'>
                        <table className='w-full table-auto'>
                            <thead className='bg-gray-200'>
                                <tr>
                                    <th className='py-2 px-4 text-left'>Product</th>
                                    <th className='py-2 px-4 text-left'>Price</th>
                                    <th className='py-2 px-4 text-left'>Created By</th>
                                    <th className='py-2 px-4 text-left'>Stock</th>
                                    <th className='py-2 px-4 text-left'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productdata.map((item, index) => (
                                    <tr key={item.id} className={`border-t ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                        <td className='py-2 px-4 flex items-center gap-3'>
                                            <img src={item.img} alt={item.name} className='w-14 h-14 object-cover rounded' />
                                            <span>{item.name}</span>
                                        </td>
                                        <td className='py-2 px-4'>${item.price.toFixed(2)}</td>
                                        <td className='py-2 px-4'>{item.Create}</td>
                                        <td className='py-2 px-4'>{item.stock}</td>
                                        <td className='py-2 px-4 flex gap-2'>
                                            <button className='text-blue-500 text-2xl hover:text-blue-700'><AiOutlineEdit /></button>
                                            <button className='text-green-500 text-2xl hover:text-green-700'><IoEyeOutline /></button>
                                            <button className='text-red-500 text-2xl hover:text-red-700'><MdDeleteOutline /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </OutLet>
    )
}

export default Category
