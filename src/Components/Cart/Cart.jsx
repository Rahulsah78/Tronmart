import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { addtocart, decreaseQuantity, removeToCart } from "../../Redux/Allslices/CartSlice";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
    const state = useSelector((state) => state.cart.carts);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleincrement = (item) => {
        dispatch(addtocart(item));
    };

    // Remove item from cart
    const handleremove = (item) => {
        dispatch(removeToCart(item));
        if (state.length === 0) {
            navigate('/');
        }
    };

    // Decrease the quantity
    const handledecrease = (item) => {
        dispatch(decreaseQuantity(item));
    };

    // Calculate subtotal
    const subtotal = state.reduce((acc, item) => acc + item.price * item.qty, 0);

    // Calculate total (you can add additional charges like taxes, shipping, etc., if needed)
    const total = subtotal; // Assuming no additional charges for now
    const [showCouponInput, setShowCouponInput] = useState(false);

    const handleCouponClick = () => {
        setShowCouponInput(!showCouponInput);
    };

    const cart = useSelector((state) => state.cart.carts); // Redux state for cart

    console.log(cart)
    return (
        <Layout>
            <div className="px-5 py-8">
                <h1 className="text-3xl font-bold mb-6">Cart</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items */}
                    <div className="w-full lg:w-3/4 overflow-x-auto">
                        <table className="w-full border border-gray-200">
                            <thead>
                                <tr className="bg-gray-100 text-left">
                                    <th className="p-4">Product</th>
                                    <th className="p-4">Price</th>
                                    <th className="p-4">Quantity</th>
                                    <th className="p-4">Subtotal</th>
                                    <th className="p-4">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {state.map((item) => (
                                    <tr key={item.id} className="border-b">
                                        <td className="p-4 flex items-center gap-4">
                                            <img
                                                src={item.img}
                                                alt={item.name}
                                                className="w-16 h-16 object-cover"
                                            />
                                            <span className="hidden md:block md:text-xl text-sm">{item.name}</span>
                                        </td>
                                        <td className="p-4">Rs{item.price.toFixed(2)}</td>
                                        <td className="p-4">
                                            <div className="flex items-center border border-gray-300 rounded-md w-fit">
                                                <button
                                                    onClick={() => handledecrease(item)}
                                                    className="px-3 py-1"
                                                >
                                                    -
                                                </button>
                                                <span className="px-3 py-1">{item.qty}</span>
                                                <button
                                                    onClick={() => handleincrement(item)}
                                                    className="px-3 py-1"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            Rs{(item.price * item.qty).toFixed(2)}
                                        </td>
                                        <td className="p-4">
                                            <button
                                                onClick={() => handleremove(item.id)}
                                                className="text-red-500"
                                            >
                                                <FaRegTrashCan />
                                            </button>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Cart Totals */}
                    <div className="p-4 w-full lg:w-80 bg-white border border-gray-200 mt-8 lg:mt-0">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">Cart Totals</h2>
                        <div className="flex justify-between mb-4 border-b-2">
                            <span className="font-semibold text-gray-600">Subtotal</span>
                            <span className="font-medium text-gray-800">Rs{subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-6 border-b-2">
                            <span className="font-semibold text-gray-600">Total</span>
                            <span className="font-bold text-lg text-gray-900">Rs{total.toFixed(2)}</span>
                        </div>
                        <div className="mb-4">
                            <h3
                                onClick={handleCouponClick}
                                className="cursor-pointer hover:text-blue-500 text-gray-700 text-sm font-medium"
                            >
                                Have a Coupon?
                            </h3>
                        </div>
                        {showCouponInput && (
                            <div
                                className={`flex gap-2 items-center transition-all duration-500 ease-in-out ${showCouponInput ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
                                    }`}
                            >
                                <input
                                    type="text"
                                    placeholder="Enter coupon code"
                                    className="py-2 px-3 w-full border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button className="bg-blue-500 text-white font-semibold py-2 px-4  hover:bg-blue-600">
                                    Apply
                                </button>
                            </div>
                        )}
                        <div className="mt-6">
                            <Link to={'/check-out-page'}>
                                <button className="w-full font-semibold text-white bg-blue-500 py-3 hover:bg-blue-600">
                                    Proceed to Checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default Cart;
