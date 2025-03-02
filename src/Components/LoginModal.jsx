import React from "react";
import {Link} from 'react-router-dom';



const LoginModal = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
            <div className="bg-white rounded-lg shadow-xl w-96 p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Login</h2>
                    <button className="text-gray-500 hover:text-gray-700">&times;</button>
                </div>
                <form>
                    <div className="mb-4 flex items-center border rounded-md px-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                            alt="India flag"
                            className="w-6 h-4 mr-2"
                        />
                        <span className="text-sm mr-2">+91</span>
                        <input
                            type="tel"
                            id="phone"
                            className="w-full py-2 px-2 focus:outline-none"
                            placeholder="Phone"
                        />
                    </div>
                    <button
                        type="button"
                        className="w-full py-2 px-4 bg-[#ff5200] text-white rounded-md hover:bg-red-600 mb-4"
                    >
                        Send One Time Password
                    </button>
                    <div className="text-center text-sm text-gray-500 mb-4">or</div>
                    <button
                        type="button"
                        className="w-full py-2 px-4 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 flex items-center justify-center mb-4"
                    >
                        <span className="material-icons mr-2 text-[#ff5200]">mail</span>
                        Continue with Email
                    </button>
                    <button
                        type="button"
                        className="w-full py-2 px-4 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 flex items-center justify-center"
                    >
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/042/165/816/non_2x/google-logo-transparent-free-png.png"
                            alt="Google logo"
                            className="w-10 h-10 mr-2"
                        />
                        Sign in with Google
                    </button>
                    <div className="text-center mt-4 text-sm">
                        New to Hungry buddy? <Link to="/Login">
                        <a href="#" className="text-[#ff5200] underline">Create account</a>
                        </Link> 
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;
