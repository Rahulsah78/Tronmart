import React, { useState } from "react";
import emailjs from "emailjs-com";
import Layout from "../Layout/Layout";

const CheckoutPage = () => {
    // Initial form values
    const initialValues = {
        fullname: "",
        email: "",
        address: "",
        country: "",
        "zipCode": "",
        city: "",
        phone: "",
    };

    // Form state
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    // Handle input changes
    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    // Form validation
    const validate = () => {
        let errors = {};
        if (!formValues.fullname) {
            errors.fullname = "Full Name is required";
        }
        if (!formValues.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            errors.email = "Email address is invalid";
        }
        if (!formValues.address) {
            errors.address = "Address is required";
        }
        if (!formValues.country) {
            errors.country = "Country is required";
        }
        if (!formValues.zipCode) {
            errors.zipCode = "Zip Code is required";
        }
        if (!formValues.city) {
            errors.city = "City is required";
        }
        if (!formValues.phone) {
            errors.phone = "Phone number is required";
        }
        return errors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the form
        const errors = validate();
        setFormErrors(errors);
        if (Object.keys(errors).length > 0) {
            return; // Don't submit if there are errors
        }



        const templateParams = {
            fullname: formValues.fullname,
            email: formValues.email,  // The user's email address as recipient
            address: formValues.address,
            country: formValues.country,
            zipCode: formValues.zipCode,
            city: formValues.city,
            phone: formValues.phone,
        };

        // Send email using EmailJS
        emailjs
            .send(
                "service_oxtbq9j", // Your EmailJS service ID
                "template_kwm5m3t", // Your EmailJS template ID
                templateParams,
                "SS5xjfAEKCd1zzgeA" // Your EmailJS user ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Order placed successfully! A confirmation email has been sent.");
                    setFormValues(initialValues); // Reset form
                },
                (error) => {
                    console.log(error.text);
                    alert("There was an error sending the confirmation email.");
                }
            );

    };

    return (
        <Layout>

            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

                {/* Billing Information */}
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
                    <form
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6"
                        onSubmit={handleSubmit}
                    >
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name
                            </label>
                            <input
                                onChange={handleInput}
                                type="text"
                                name="fullname"
                                value={formValues.fullname}
                                placeholder="Enter your full name"
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {formErrors.fullname && (
                                <span className="text-red-500 text-sm">{formErrors.fullname}</span>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                onChange={handleInput}
                                type="email"
                                name="email"
                                value={formValues.email}
                                placeholder="Enter your email"
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {formErrors.email && (
                                <span className="text-red-500 text-sm">{formErrors.email}</span>
                            )}
                        </div>

                        {/* Address */}
                        <div className="col-span-1 sm:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Address
                            </label>
                            <input
                                onChange={handleInput}
                                type="text"
                                name="address"
                                value={formValues.address}
                                placeholder="Street address"
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {formErrors.address && (
                                <span className="text-red-500 text-sm">{formErrors.address}</span>
                            )}
                        </div>

                        {/* Country */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Country
                            </label>
                            <input
                                onChange={handleInput}
                                type="text"
                                name="country"
                                value={formValues.country}
                                placeholder="Enter your country"
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {formErrors.country && (
                                <span className="text-red-500 text-sm">{formErrors.country}</span>
                            )}
                        </div>

                        {/* Zip Code */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Zip Code
                            </label>
                            <input
                                onChange={handleInput}
                                type="text"
                                name="zipCode"
                                value={formValues.zipCode}
                                placeholder="Enter your zip code"
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {formErrors.zipCode && (
                                <span className="text-red-500 text-sm">{formErrors.zipCode}</span>
                            )}
                        </div>

                        {/* City */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                City
                            </label>
                            <input
                                onChange={handleInput}
                                type="text"
                                name="city"
                                value={formValues.city}
                                placeholder="Enter your city"
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {formErrors.city && (
                                <span className="text-red-500 text-sm">{formErrors.city}</span>
                            )}
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Phone
                            </label>
                            <input
                                onChange={handleInput}
                                type="text"
                                name="phone"
                                value={formValues.phone}
                                placeholder="Enter your phone number"
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {formErrors.phone && (
                                <span className="text-red-500 text-sm">{formErrors.phone}</span>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="max-w-4xl mx-auto">
                            <button
                                type="submit"
                                className="px-2 w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200 ease-in-out"
                            >
                                Proceed to Payment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default CheckoutPage;
