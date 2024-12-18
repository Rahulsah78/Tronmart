import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully", formData);
      // Reset form data
      setFormData({ name: "", email: "", password: "" });
      setErrors({});
    }
  };

  return (
    <Layout>
      <div className="pb-5  pt-5 min-h-screen flex items-center justify-center bg-[#F7FAFD] px-4">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
          {/* Form Section */}
          <div className="w-full md:w-1/2 p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 text-center mb-6">
              Create an Account
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Sign up to get started with our services.
            </p>
            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="mb-5">
                <label htmlFor="name" className="block text-lg font-semibold text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full mt-2 p-4 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:ring-2 ${
                    errors.name ? "focus:ring-red-500" : "focus:ring-blue-500"
                  } focus:outline-none`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email Input */}
              <div className="mb-5">
                <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full mt-2 p-4 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:ring-2 ${
                    errors.email ? "focus:ring-red-500" : "focus:ring-blue-500"
                  } focus:outline-none`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Password Input */}
              <div className="mb-6">
                <label htmlFor="password" className="block text-lg font-semibold text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full mt-2 p-4 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:ring-2 ${
                    errors.password ? "focus:ring-red-500" : "focus:ring-blue-500"
                  } focus:outline-none`}
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                Sign Up
              </button>
            </form>

            {/* Already have an account */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Log in
              </a>
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
            <img
              src="https://visme.co/blog/wp-content/uploads/2020/02/header-1200.gif"
              alt="Registration Animation"
              className="w-full max-w-xs lg:max-w-md"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
