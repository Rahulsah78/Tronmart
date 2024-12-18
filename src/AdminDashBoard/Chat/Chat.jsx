import React, { useState } from 'react';
import OutLet from '../OutLet/OutLet';

const Chat = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! How can I help you today?", },
        { id: 2, text: "Hi! I need some help with my order.", sender: "user", userImage: "/images/admin.enc" },
        { id: 3, text: "Sure! Can you provide your order number?", },
        { id: 4, text: "Yes, it's #12345.", sender: "user", userImage: "/images/admin.enc" },
        { id: 5, text: "Thanks! Let me check your order.", },
        { id: 6, text: "Okay, I'll wait.", sender: "user", userImage: "/images/admin.enc" },
        { id: 7, text: "I found your order! It's being processed.", }
    ]);



    return (
        <OutLet>
            <div className="p-5 min-h-screen bg-[#F7FBFC] flex flex-col">
                {/* Chat Header */}
                <div className="bg-blue-500 text-white py-3 px-5 rounded-t-lg flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Chat with Support</h2>

                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-4 overflow-y-auto space-y-3">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                            {msg.sender === "user" && (
                                <img
                                    src={msg.userImage}
                                    alt="User Avatar"
                                    className="w-10 h-10 rounded-full mr-2"
                                />
                            )}
                            <div className={`max-w-xs p-3 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>
                                <p>{msg.text}</p>
                            </div>
                            {msg.sender === "bot" && (
                                <img
                                    src="/images/admin.enc"
                                    alt="Bot Avatar"
                                    className="w-10 h-10 rounded-full ml-2"
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Chat Input */}
                <div className="flex items-center space-x-2 p-4 bg-white border-t-2 border-gray-300">
                    <input
                        type="text"
                        className="flex-1 p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"

                        placeholder="Type your message..."
                    />
                    <button
                        className="bg-blue-500 text-white p-3 rounded-lg"
                    >
                        Send
                    </button>
                </div>
            </div>
        </OutLet>
    );
}

export default Chat;
