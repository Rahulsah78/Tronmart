import React from 'react';
import { FiEye, FiEdit, FiTrash2 } from 'react-icons/fi'; // Importing icons
import OutLet from '../OutLet/OutLet';

const Orders = () => {
    
    const orderData = [
        { id: '583468/80', date: 'Apr 23, 2024', customer: 'Gell F. Anderson', priority: 'Normal', total: '$1,231.00', status: 'Unpaid', items: 4, delivery: '-', orderStatus: 'Draft' },
        { id: '456754/80', date: 'Apr 20, 2024', customer: 'Jung S. Ayule', priority: 'Normal', total: '$897.00', status: 'Paid', items: 2, delivery: '-', orderStatus: 'Packaging' },
        { id: '678746/80', date: 'Apr 19, 2024', customer: 'David A. Arnold', priority: 'High', total: '$1,478.00', status: 'Paid', items: 5, delivery: 'D-5737678', orderStatus: 'Completed' },
        { id: '678746/80', date: 'Apr 19, 2024', customer: 'David A. Arnold', priority: 'High', total: '$1,478.00', status: 'Paid', items: 5, delivery: 'D-5737678', orderStatus: 'Completed' },
        { id: '678746/80', date: 'Apr 19, 2024', customer: 'David A. Arnold', priority: 'High', total: '$1,478.00', status: 'Paid', items: 5, delivery: 'D-5737678', orderStatus: 'Completed' },
        { id: '678746/80', date: 'Apr 19, 2024', customer: 'David A. Arnold', priority: 'High', total: '$1,478.00', status: 'Paid', items: 5, delivery: 'D-5737678', orderStatus: 'Completed' },
        { id: '678746/80', date: 'Apr 19, 2024', customer: 'David A. Arnold', priority: 'High', total: '$1,478.00', status: 'Paid', items: 5, delivery: 'D-5737678', orderStatus: 'Completed' },
        { id: '678746/80', date: 'Apr 19, 2024', customer: 'David A. Arnold', priority: 'High', total: '$1,478.00', status: 'Paid', items: 5, delivery: 'D-5737678', orderStatus: 'Completed' },
        { id: '678746/80', date: 'Apr 19, 2024', customer: 'David A. Arnold', priority: 'High', total: '$1,478.00', status: 'Paid', items: 5, delivery: 'D-5737678', orderStatus: 'Completed' },
        { id: '678746/80', date: 'Apr 19, 2024', customer: 'David A. Arnold', priority: 'High', total: '$1,478.00', status: 'Paid', items: 5, delivery: 'D-5737678', orderStatus: 'Completed' },
        { id: '678746/80', date: 'Apr 19, 2024', customer: 'David A. Arnold', priority: 'High', total: '$1,478.00', status: 'Paid', items: 5, delivery: 'D-5737678', orderStatus: 'Completed' },
        { id: '678746/80', date: 'Apr 19, 2024', customer: 'David A. Arnold', priority: 'High', total: '$1,478.00', status: 'Paid', items: 5, delivery: 'D-5737678', orderStatus: 'Completed' },
        
    ];

    return (
        <OutLet>
            <div className="p-4  bg-[#F7FBFC]">
                {/* Summary Dashboard */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                    {[
                        { title: 'Payment Refund', count: 490 },
                        { title: 'Order Cancel', count: 241 },
                        { title: 'Order Shipped', count: 630 },
                        { title: 'Order Delivering', count: 170 },
                    ].map((stat, index) => (
                        <div key={index} className="bg-white shadow-md rounded-md p-4 text-center">
                            <h3 className="text-lg font-semibold">{stat.title}</h3>
                            <p className="text-2xl font-bold">{stat.count}</p>
                        </div>
                    ))}
                </div>

                {/* Orders Table */}
                <div className="overflow-auto bg-white shadow-md rounded-md">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="p-2">Order ID</th>
                                <th className="p-2">Created At</th>
                                <th className="p-2">Customer</th>
                                <th className="p-2">Priority</th>
                                <th className="p-2">Total</th>
                                <th className="p-2">Payment Status</th>
                                <th className="p-2">Items</th>
                                <th className="p-2">Delivery Number</th>
                                <th className="p-2">Order Status</th>
                                <th className="p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderData.map((order, index) => (
                                <tr key={index} className={` ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}  border-b`}>
                                    <td className="p-2">{order.id}</td>
                                    <td className="p-2">{order.date}</td>
                                    <td className="p-2">{order.customer}</td>
                                    <td className="p-2">{order.priority}</td>
                                    <td className="p-2">{order.total}</td>
                                    <td className="p-2">
                                        <span className={`px-2 py-1 rounded ${order.status === 'Paid' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="p-2">{order.items}</td>
                                    <td className="p-2">{order.delivery}</td>
                                    <td className="p-2">
                                        <span className={`px-2 py-1 rounded ${order.orderStatus === 'Completed' ? 'bg-blue-500 text-white' : 'bg-yellow-100 text-yellow-600'}`}>
                                            {order.orderStatus}
                                        </span>
                                    </td>
                                    <td className="p-2 flex gap-2">
                                        <button className="text-blue-500 hover:text-blue-700">
                                            <FiEye />
                                        </button>
                                        <button className="text-yellow-500 hover:text-yellow-700">
                                            <FiEdit />
                                        </button>
                                        <button className="text-red-500 hover:text-red-700">
                                            <FiTrash2 />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </OutLet>
    );
};

export default Orders;
