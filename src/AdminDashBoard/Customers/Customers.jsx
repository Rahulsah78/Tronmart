import React from 'react';
import OutLet from '../OutLet/OutLet';

const Customers = () => {
    const customers = [
        { id: 1, name: 'Michael A. Miner', invoice: 'INV2540', status: 'Completed', amount: 4521, due: 8901, date: '07 Jan, 2023', payment: 'Mastercard' },
        { id: 2, name: 'Theresa T. Bruce', invoice: 'INV3424', status: 'Cancel', amount: 7836, due: 9492, date: '03 Dec, 2023', payment: 'Visa' },
        { id: 3, name: 'James L. Erickson', invoice: 'INV5132', status: 'Completed', amount: 1347, due: 6718, date: '28 Sep, 2023', payment: 'Paypal' },
        { id: 4, name: 'Lily W. Wilson', invoice: 'INV1555', status: 'Pending', amount: 5457, due: 3528, date: '10 Aug, 2023', payment: 'Mastercard' },
        { id: 5, name: 'Sarah M. Brooks', invoice: 'INV4873', status: 'Cancel', amount: 4214, due: 9184, date: '22 May, 2023', payment: 'Visa' },
        { id: 6, name: 'Sarah M. Brooks', invoice: 'INV4873', status: 'Cancel', amount: 4214, due: 9184, date: '22 May, 2023', payment: 'Visa' },
        { id: 7, name: 'Sarah M. Brooks', invoice: 'INV4873', status: 'Cancel', amount: 4214, due: 9184, date: '22 May, 2023', payment: 'Visa' },
        { id: 8, name: 'Sa rah M. Brooks', invoice: 'INV4873', status: 'Cancel', amount: 4214, due: 9184, date: '22 May, 2023', payment: 'Visa' },
        { id: 9, name: 'Sa Xrah M. Brooks', invoice: 'INV4873', status: 'Cancel', amount: 4214, due: 9184, date: '22 May, 2023', payment: 'Visa' },
        { id: 10, name: 'SarXah M. Brooks', invoice: 'INV4873', status: 'Cancel', amount: 4214, due: 9184, date: '22 May, 2023', payment: 'Visa' },
    ];

    return (
        <OutLet>
            <div className="p-4  bg-[#F7FBFC]">
                <h2 className="text-2xl font-semibold mb-4">Customer List</h2>
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border p-2">Customer Name</th>
                            <th className="border p-2">Invoice ID</th>
                            <th className="border p-2">Status</th>
                            <th className="border p-2">Total Amount</th>
                            <th className="border p-2">Amount Due</th>
                            <th className="border p-2">Due Date</th>
                            <th className="border p-2">Payment Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.id} className="text-center">
                                <td className="border p-2">{customer.name}</td>
                                <td className="border p-2">{customer.invoice}</td>
                                <td className={`border p-2 ${customer.status === 'Completed' ? 'text-green-500' : customer.status === 'Pending' ? 'text-yellow-500' : 'text-red-500'}`}>
                                    {customer.status}
                                </td>
                                <td className="border p-2">${customer.amount.toLocaleString()}</td>
                                <td className="border p-2">${customer.due.toLocaleString()}</td>
                                <td className="border p-2">{customer.date}</td>
                                <td className="border p-2">{customer.payment}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </OutLet>
    );
};

export default Customers;
