import React from 'react';
import { FaInbox, FaStar, FaPaperPlane, FaTrash, FaExclamationTriangle, FaRegEnvelope } from 'react-icons/fa';
import OutLet from '../OutLet/OutLet';

const Email = () => {
  return (
    <OutLet>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 text-white p-4">
          {/* User Info */}
          <div className="flex items-center space-x-4 mb-6">
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="rounded-full"
            />
            <div className="text-lg">John Doe</div>
          </div>

          {/* Folders */}
          <h2 className="text-2xl font-bold mb-8">Email</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded-lg">
              <FaInbox className="text-xl" />
              <div className="flex-1">Inbox</div>
              <span className="text-sm bg-red-500 text-white rounded-full px-2 py-1">7</span>
            </div>
            <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded-lg">
              <FaStar className="text-xl" />
              <div className="flex-1">Starred</div>
              <span className="text-sm bg-red-500 text-white rounded-full px-2 py-1">0</span>
            </div>
            <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded-lg">
              <FaRegEnvelope className="text-xl" />
              <div className="flex-1">Drafts</div>
              <span className="text-sm bg-red-500 text-white rounded-full px-2 py-1">32</span>
            </div>
            <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded-lg">
              <FaPaperPlane className="text-xl" />
              <div className="flex-1">Sent Mail</div>
              <span className="text-sm bg-red-500 text-white rounded-full px-2 py-1">0</span>
            </div>
            <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded-lg">
              <FaTrash className="text-xl" />
              <div className="flex-1">Trash Mail</div>
              <span className="text-sm bg-red-500 text-white rounded-full px-2 py-1">5</span>
            </div>
            <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded-lg">
              <FaExclamationTriangle className="text-xl" />
              <div className="flex-1">Important</div>
              <span className="text-sm bg-red-500 text-white rounded-full px-2 py-1">1</span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-8 bg-gray-100">
          <div className="text-3xl font-semibold mb-6">Inbox</div>
          
          {/* Sample Email 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex justify-between items-center mb-2">
              <div className="font-semibold">Jane Doe</div>
              <div className="text-sm text-gray-500">2:15 PM</div>
            </div>
            <div className="font-bold text-lg">Meeting tomorrow at 10 AM</div>
            <div className="text-gray-600">Hey John, just a reminder about our meeting tomorrow...</div>
          </div>

          {/* Sample Email 2 */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex justify-between items-center mb-2">
              <div className="font-semibold">Mark Smith</div>
              <div className="text-sm text-gray-500">12:30 PM</div>
            </div>
            <div className="font-bold text-lg">Your order has shipped</div>
            <div className="text-gray-600">Hello, your recent order has shipped and is on its way...</div>
          </div>

          {/* Sample Email 3 */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex justify-between items-center mb-2">
              <div className="font-semibold">Tom Johnson</div>
              <div className="text-sm text-gray-500">11:00 AM</div>
            </div>
            <div className="font-bold text-lg">Quick reminder about the report</div>
            <div className="text-gray-600">Just a quick reminder to submit your monthly report by...</div>
          </div>
        </div>
      </div>
    </OutLet>
  );
};

export default Email;
