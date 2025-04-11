import React from "react";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-black text-white rounded-lg shadow-xl w-96 p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Sign up</h2>
                    <button className="text-gray-400 hover:text-gray-200">&times;</button>
                </div>
                <form className=" border-amber-50">
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            className="w-full px-4 py-2 border border-gray-500 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-500 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <input type="checkbox" id="terms" className="mr-2" />
                        <label htmlFor="terms" className="text-sm text-gray-400">
                            I agree to Hungry buddy's <a href="#" className="text-blue-400">Terms of Service</a>,
                            <a href="#" className="text-blue-400"> Privacy Policy</a>, and
                            <a href="#" className="text-blue-400"> Content Policies</a>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-gray-500 text-white rounded-md cursor-pointer hover:bg-gray-700"
                        disabled
                    >
                        Create account
                    </button>
                    <div className="text-center text-sm text-gray-400 my-4">or</div>
                    <button
                        type="button"
                        className="w-full py-2 px-4 bg-[#ff5200] text-white rounded-md hover:bg-red-600 flex items-center justify-center"
                    >
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/042/165/816/non_2x/google-logo-transparent-free-png.png"
                            alt="Google logo"
                            className="w-10 h-10 mr-2"
                        />
                        Sign in with Google
                    </button>
                    <div className="text-center mt-4 text-sm">
                        Already have an account? <Link to="/LoginModal">
                            <span className="text-blue-400 underline">Log in</span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

