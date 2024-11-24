import React from 'react';
import { useNavigate } from 'react-router';
import EmailIcon from '@mui/icons-material/Email';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
    const navigate = useNavigate();
    const handleLinkClick = (path) => {
        navigate(path);
    };
    return (
        <footer className="bg-teal-800 py-20">
            <div className="container mx-auto max-w-screen-lg">
                <div className="flex flex-wrap -mx-4">
                    <div className="footer-col w-full md:w-1/2 lg:w-1/4 px-4">
                        <img
                            src="https://www.novuslab.io/logo.svg"
                            alt="Novus Lab Logo"
                            className="w-36 h-12 my-4"
                        />
                        <ul className="list-none space-y-2">
                            <li className="flex items-center text-gray-300">
                                <PhoneIcon className="mr-2" /> +49 176 20092661
                            </li>
                            <li className="flex items-center text-gray-300">
                                <AddLocationIcon className="mr-2" />
                                Business Center 1, Business C, Nad Al Sheba Meydan Dubai, P.O. Box 123654 Dubai, United Arab Emirates
                            </li>
                            <li className="flex items-center text-gray-300">
                                <EmailIcon className="mr-2" /> Noculab@gmail.com
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col w-full md:w-1/2 lg:w-1/4 px-4">
                        <h4 className="text-white text-lg font-medium mb-6 border-b-2 border-white inline-block pb-1">
                            Installation
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="text-gray-300 hover:text-white cursor-pointer">Installation</li>
                            <li className="text-gray-300 hover:text-white cursor-pointer">Terms & Conditions</li>
                            <li className="text-gray-300 hover:text-white cursor-pointer">Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="footer-col w-full md:w-1/2 lg:w-1/4 px-4">
                        <h4 className="text-white text-lg font-medium mb-6 border-b-2 border-white inline-block pb-1">
                            Explore
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="text-gray-300 hover:text-white cursor-pointer">Installation</li>
                            <li className="text-gray-300 hover:text-white cursor-pointer">Installation</li>
                            <li className="text-gray-300 hover:text-white cursor-pointer">Installation</li>
                        </ul>
                    </div>
                    <div className="footer-col w-full md:w-1/2 lg:w-1/4 px-4">
                        <h4 className="text-white text-lg font-medium mb-6 border-b-2 border-white inline-block pb-1">
                            Information
                        </h4>
                        <ul className="list-none space-y-2">
                            <li className="text-gray-300 hover:text-white cursor-pointer">Installation</li>
                            <li className="text-gray-300 hover:text-white cursor-pointer">Terms & Conditions</li>
                            <li className="text-gray-300 hover:text-white cursor-pointer">Privacy Policy</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-gray-400 text-xs mt-16">
                    <h1 className="font-light">© 2024 Novus Lab. All Rights Reserved</h1>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
