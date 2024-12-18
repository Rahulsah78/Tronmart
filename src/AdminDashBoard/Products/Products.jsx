import React from 'react';
import OutLet from '../OutLet/OutLet';
import { AiOutlineEdit } from 'react-icons/ai';
import { IoEyeOutline } from 'react-icons/io5';
import { MdDeleteOutline } from 'react-icons/md';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';

const Products = () => {
    const productdata = [
        {
            "id": 1,
            "img": "/AdminProducts/admin-product1.png",
            "name": "Black T-shirt",
            "price": 629.00,
            "rating": "★5k",
            "Size": "S, M",
            "Category": "Fashion",
            "Stock": "55 in stock",
            "edit": <AiOutlineEdit />,
            "eye": <IoEyeOutline />,
            "delete": <MdDeleteOutline />
        },
        {
            "id": 2,
            "img": "/AdminProducts/admin-product2.png",
            "name": "Olive Green Leather Bag",
            "price": 629.00,
            "rating": "★4.5k",
            "Size": "S, M",
            "Category": "Hand Bag",
            "Stock": "535  in stock",
            "edit": <AiOutlineEdit />,
            "eye": <IoEyeOutline />,
            "delete": <MdDeleteOutline />
        },
        {
            "id": 3,
            "img": "/AdminProducts/admin-product3.png",
            "name": "Women Golden Dress",
            "price": 629.00,
            "rating": "★3k",
            "Size": "S, M",
            "Category": "Fashion",
            "Stock": "55  in stock",
            "edit": <AiOutlineEdit />,
            "eye": <IoEyeOutline />,
            "delete": <MdDeleteOutline />
        },
        {
            "id": 4,
            "img": "/AdminProducts/admin-product4.png",
            "name": "Gray Cap For Men",
            "price": 629.00,
            "rating": "★4k",
            "Size": "S, M",
            "Category": "Cap",
            "Stock": "155  in stock",
            "edit": <AiOutlineEdit />,
            "eye": <IoEyeOutline />,
            "delete": <MdDeleteOutline />
        },
        {
            "id": 5,
            "img": "/AdminProducts/admin-product5.png",
            "name": "Dark Green Cargo Pent",
            "price": 629.00,
            "rating": "★3k",
            "Size": "S, M",
            "Category": "Fashion",
            "Stock": "5  in stock",
            "edit": <AiOutlineEdit />,
            "eye": <IoEyeOutline />,
            "delete": <MdDeleteOutline />
        },
        {
            "id": 6,
            "img": "/AdminProducts/admin-product6.png",
            "name": "Orange Multi Color Headphone",
            "rating": "★4k",
            "price": 629.00,
            "rating": "4k",
            "Size": "S, M",
            "Category": "Electronics",
            "Stock": "Out of stock",
            "edit": <AiOutlineEdit />,
            "eye": <IoEyeOutline />,
            "delete": <MdDeleteOutline />
        },
        {
            "id": 7,
            "img": "/AdminProducts/admin-product7.png",
            "name": "Kid's Yellow Shoes",
            "price": 629.00,
            "rating": "★5k",
            "Size": "S, M",
            "Category": "Fashion",
            "Stock": "55  in stock",
            "edit": <AiOutlineEdit />,
            "eye": <IoEyeOutline />,
            "delete": <MdDeleteOutline />
        },
        {
            "id": 8,
            "img": "/AdminProducts/admin-product8.png",
            "name": "Sky Blue Sunglass",
            "price": 629.00,
            "rating": "★4k",
            "Size": "S, M",
            "Category": "Fashion",
            "Stock": "535  in stock",
            "edit": <AiOutlineEdit />,
            "eye": <IoEyeOutline />,
            "delete": <MdDeleteOutline />
        },
        {
            "id": 9,
            "img": "/AdminProducts/admin-product9.png",
            "name": "Men Brown Leather Shoes",
            "price": 629.00,
            "rating": "★3k",
            "Size": "S, M",
            "Category": "Shoes	",
            "Stock": "Out of stock",
            "edit": <AiOutlineEdit />,
            "eye": <IoEyeOutline />,
            "delete": <MdDeleteOutline />
        },
        {
            "id": 10,
            "img": "/AdminProducts/admin-product10.png",
            "name": "White Rubber Band Smart Watch",
            "price": 629.00,
            "rating": "★4.5k",
            "Size": "S, M",
            "Category": "Electronics",
            "Stock": "55  in stock",
            "edit": <AiOutlineEdit />,
            "eye": <IoEyeOutline />,
            "delete": <MdDeleteOutline />
        }
    ]

    return (
        <OutLet>
            <div className="p-5 min-h-screen bg-[#F7FBFC]">
                <div className="border shadow-md rounded-md">
                    {/* Header */}
                    <div className="p-5 flex items-center justify-between border-b">
                        <h2 className="text-lg font-semibold">All Products</h2>
                        <div className="flex items-center space-x-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                                Add Product
                            </button>
                            <select className="hidden md:block border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500">
                                <option>This Month</option>
                                <option>Export</option>
                                <option>Import</option>
                            </select>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="p-5 overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="py-3 px-4 text-left">Product Name & Size</th>
                                    <th className="py-3 px-4 text-left">Price</th>
                                    <th className="py-3 px-4 text-left">Stock</th>
                                    <th className="py-3 px-4 text-left">Category</th>
                                    <th className="py-3 px-4 text-left">Rating</th>
                                    <th className="py-3 px-4 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productdata.map((item, index) => (
                                    <tr
                                        key={item.id}
                                        className={`${index % 2 === 0 ? 'bg-[#F7FBFC]' : 'bg-white'
                                            } border-b hover:bg-gray-100 transition`}
                                    >
                                        {/* Product Name & Image */}
                                        <td className="py-4 px-4 flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                className="w-5 h-5 accent-blue-500"
                                            />
                                            <img
                                                src={item.img}
                                                alt={item.name}
                                                className="w-14 h-14 object-cover rounded-md"
                                            />
                                            <div>
                                                <p className="text-sm font-semibold">{item.name}</p>
                                                <span className="text-gray-500">{item.Size}</span>
                                            </div>
                                        </td>

                                        {/* Price */}
                                        <td className="py-4 px-4">${item.price.toFixed(2)}</td>

                                        {/* Stock */}
                                        <td className="py-4 px-4">{item.Stock}</td>

                                        {/* Category */}
                                        <td className="py-4 px-4">{item.Category}</td>

                                        {/* Rating */}
                                        <td className="py-4 px-4">{item.rating}</td>

                                        {/* Action Buttons */}
                                        <td className="py-4 px-4 flex gap-2 text-2xl text-gray-500">
                                            <button className="hover:text-blue-500">
                                                <AiOutlineEdit />
                                            </button>
                                            <button className="hover:text-green-500">
                                                <IoEyeOutline />
                                            </button>
                                            <button className="hover:text-red-500">
                                                <MdDeleteOutline />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="p-5 flex items-center justify-between bg-gray-100">
                        <button className="flex items-center gap-1 px-4 py-2 rounded-md hover:bg-gray-200 transition">
                            <IoMdArrowBack />
                            <span>Previous</span>
                        </button>
                        <button className="flex items-center gap-1 px-4 py-2 rounded-md hover:bg-gray-200 transition">
                            <span>Next</span>
                            <IoMdArrowForward />
                        </button>
                    </div>
                </div>
            </div>
        </OutLet>
    );
};

export default Products;
