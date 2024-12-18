import React, { useState } from 'react';
import Layout from "../../Components/Layout/Layout";
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Logging in with", email, password);
    }

    return (
        <Layout>
        <div className="pb-10 px-5 flex items-center justify-center min-h-screen bg-[#F7FAFD]">
            <div className="w-full max-w-4xl flex flex-col lg:flex-row items-center bg-white shadow-xl rounded-lg overflow-hidden">
                {/* Form Section */}
                <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col items-center justify-center">
                    <div className="w-full max-w-md">
                        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Welcome Back!</h2>
                        <p className="text-center text-gray-600 mb-8">Please login to continue</p>
    
                        <form onSubmit={handleSubmit} className="w-full">
                            {/* Email Input */}
                            <div className="mb-5">
                                <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full mt-2 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    required
                                />
                            </div>
    
                            {/* Password Input */}
                            <div className="mb-6">
                                <label htmlFor="password" className="block text-lg font-semibold text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="w-full mt-2 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    required
                                />
                            </div>
    
                            {/* Submit Button */}
                            <div className="mb-4">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                >
                                    Log In
                                </button>
                            </div>
    
                            {/* Forgot Password Link */}
                            <div className="text-center flex justify-between">
                                <a href="#" className="text-blue-600 hover:underline text-sm">
                                    Forgot password?
                                </a>
                                <Link to={'/account/create'} className="text-blue-600 hover:underline text-sm">
                                    Create an account
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
    
                {/* Image Section */}
                <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
                    <img
                        src="https://www.bebrainer.app/images/login.gif"
                        alt="Login Animation"
                        className="w-full max-w-xs lg:max-w-md"
                    />
                </div>
            </div>
        </div>
    </Layout>
    
    );
}

export default Login;
