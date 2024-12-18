import React from 'react';
import { FaUserCog, FaCreditCard, FaBell, FaLanguage, FaLock } from 'react-icons/fa';
import OutLet from '../OutLet/OutLet';

const Settings = () => {
    return (
        <OutLet>
            <div className="flex min-h-screen bg-gray-100">
                {/* Sidebar */}
                <div className="w-64 bg-gray-800 text-white p-6">
                    <h2 className="text-2xl font-bold mb-8">Settings</h2>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded-lg">
                            <FaUserCog className="text-xl" />
                            <div>Account Settings</div>
                        </div>
                        <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded-lg">
                            <FaCreditCard className="text-xl" />
                            <div>Payment Methods</div>
                        </div>
                        <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded-lg">
                            <FaBell className="text-xl" />
                            <div>Notifications</div>
                        </div>
                        <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded-lg">
                            <FaLanguage className="text-xl" />
                            <div>Language Preferences</div>
                        </div>
                        <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded-lg">
                            <FaLock className="text-xl" />
                            <div>Privacy & Security</div>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-8">
                    <h2 className="text-3xl font-semibold mb-6">Account Settings</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h3 className="text-xl font-semibold mb-4">Profile Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="w-1/3">Full Name</div>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="flex-1 p-2 border rounded-md"
                                />
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-1/3">Email Address</div>
                                <input
                                    type="email"
                                    placeholder="johndoe@example.com"
                                    className="flex-1 p-2 border rounded-md"
                                />
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-1/3">Phone Number</div>
                                <input
                                    type="tel"
                                    placeholder="+1 234 567 890"
                                    className="flex-1 p-2 border rounded-md"
                                />
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-semibold mb-6">Payment Methods</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h3 className="text-xl font-semibold mb-4">Add New Payment Method</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="w-1/3">Card Number</div>
                                <input
                                    type="text"
                                    placeholder="XXXX-XXXX-XXXX-XXXX"
                                    className="flex-1 p-2 border rounded-md"
                                />
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-1/3">Expiry Date</div>
                                <input
                                    type="text"
                                    placeholder="MM/YY"
                                    className="flex-1 p-2 border rounded-md"
                                />
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-1/3">CVV</div>
                                <input
                                    type="text"
                                    placeholder="123"
                                    className="flex-1 p-2 border rounded-md"
                                />
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-semibold mb-6">Notifications</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h3 className="text-xl font-semibold mb-4">Notification Preferences</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="w-1/3">Email Notifications</div>
                                <input type="checkbox" className="form-checkbox" />
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-1/3">SMS Notifications</div>
                                <input type="checkbox" className="form-checkbox" />
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-1/3">Push Notifications</div>
                                <input type="checkbox" className="form-checkbox" />
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-semibold mb-6">Language Preferences</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h3 className="text-xl font-semibold mb-4">Choose Your Language</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="w-1/3">Language</div>
                                <select className="flex-1 p-2 border rounded-md">
                                    <option>English</option>
                                    <option>Spanish</option>
                                    <option>French</option>
                                    <option>German</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-semibold mb-6">Privacy & Security</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h3 className="text-xl font-semibold mb-4">Change Password</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="w-1/3">Current Password</div>
                                <input
                                    type="password"
                                    placeholder="********"
                                    className="flex-1 p-2 border rounded-md"
                                />
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-1/3">New Password</div>
                                <input
                                    type="password"
                                    placeholder="********"
                                    className="flex-1 p-2 border rounded-md"
                                />
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-1/3">Confirm Password</div>
                                <input
                                    type="password"
                                    placeholder="********"
                                    className="flex-1 p-2 border rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </OutLet>
    );
};

export default Settings;
