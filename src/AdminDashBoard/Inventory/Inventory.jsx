import React from "react";
import OutLet from "../OutLet/OutLet";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

const Inventory = () => {
    const stats = [
        { label: "Total Product Items", value: "3521", icon: "📦" },
        { label: "In Stock Product", value: "1311", icon: "📋" },
        { label: "Out Of Stock Product", value: "231", icon: "🔔" },
        { label: "Total Visited Customer", value: "2334", icon: "👥" },
    ];

    const warehouses = [
        { id: "#WH-001", name: "Central Fulfillment", location: "123 Commerce St, NY", manager: "John Doe", contact: "+1 (555) 123-4567", stock: 6490, shipping: 3022, revenue: "$25,737" },
        { id: "#WH-002", name: "East Coast Hub", location: "456 Market Ave, NY", manager: "Jane Smith", contact: "+1 (555) 234-5678", stock: 7362, shipping: 4253, revenue: "$67,351" },
        { id: "#WH-003", name: "West Coast Depot", location: "789 Trade Blvd, CA", manager: "Richard Roe", contact: "+1 (555) 345-6789", stock: 8842, shipping: 3221, revenue: "$45,855" },
        { id: "#WH-003", name: "West Coast Depot", location: "789 Trade Blvd, CA", manager: "Richard Roe", contact: "+1 (555) 345-6789", stock: 8842, shipping: 3221, revenue: "$45,855" },
        { id: "#WH-003", name: "West Coast Depot", location: "789 Trade Blvd, CA", manager: "Richard Roe", contact: "+1 (555) 345-6789", stock: 8842, shipping: 3221, revenue: "$45,855" },
        { id: "#WH-003", name: "West Coast Depot", location: "789 Trade Blvd, CA", manager: "Richard Roe", contact: "+1 (555) 345-6789", stock: 8842, shipping: 3221, revenue: "$45,855" },
        { id: "#WH-003", name: "West Coast Depot", location: "789 Trade Blvd, CA", manager: "Richard Roe", contact: "+1 (555) 345-6789", stock: 8842, shipping: 3221, revenue: "$45,855" },
        
    ];

    return (
        <OutLet>
            <div className="p-6  bg-[#F7FBFC]">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between"
                        >
                            <div>
                                <h2 className="text-gray-600 text-sm">{stat.label}</h2>
                                <p className="text-2xl font-bold">{stat.value} <span className="text-gray-400 text-sm">Items</span></p>
                            </div>
                            <div className="text-4xl">{stat.icon}</div>
                        </div>
                    ))}
                </div>

                {/* Table Section */}
                <div className="bg-white shadow-lg rounded-lg p-4">
                    <h2 className="text-lg font-semibold mb-4">All Warehouse List</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-200 text-sm">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="p-3 text-left border">Warehouse ID</th>
                                    <th className="p-3 text-left border">Warehouse Name</th>
                                    <th className="p-3 text-left border">Location</th>
                                    <th className="p-3 text-left border">Manager</th>
                                    <th className="p-3 text-left border">Contact Number</th>
                                    <th className="p-3 text-left border">Stock Available</th>
                                    <th className="p-3 text-left border">Stock Shipping</th>
                                    <th className="p-3 text-left border">Revenue</th>
                                    <th className="p-3 text-left border">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {warehouses.map((warehouse, index) => (
                                    <tr
                                        key={index}
                                        className={`${index % 2 === 0 ? "bg-[#F7FBFC]" : "bg-white"} hover:bg-gray-50 transition duration-200`}
                                    >
                                        <td className="p-3 border">{warehouse.id}</td>
                                        <td className="p-3 border">{warehouse.name}</td>
                                        <td className="p-3 border">{warehouse.location}</td>
                                        <td className="p-3 border">{warehouse.manager}</td>
                                        <td className="p-3 border">{warehouse.contact}</td>
                                        <td className="p-3 border">{warehouse.stock}</td>
                                        <td className="p-3 border">{warehouse.shipping}</td>
                                        <td className="p-3 border">{warehouse.revenue}</td>
                                        <td className="p-3 border flex gap-2">
                                            <button className="text-blue-500">
                                                <FaEye />
                                            </button>
                                            <button className="text-green-500">
                                                <FaEdit />
                                            </button>
                                            <button className="text-red-500">
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </OutLet>
    );
};

export default Inventory;
