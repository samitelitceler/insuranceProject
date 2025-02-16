"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // Icons for mobile menu

import primeLogo from '@/public/images/PrimeLogo.png';

export default function NavSection() {
    const [isOpen, setIsOpen] = useState(false);


    

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-12">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <Image src={primeLogo.src} alt="Prime Insurance Group" width={120} height={40} />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="https://customerservice.agentinsure.com/EzLynxCustomerService/web/primei/account/login" className="text-gray-700">
                        <span className="hidden md:inline">My Account</span>
                    </Link>
                    <Button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2">Get a Quote</Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
                        {isOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex justify-between px-12 p-4 items-center bg-[#C10013]">
                <ul className="flex space-x-6 font-semibold text-white">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="#">About Us</Link></li>
                    <li><Link href="#">Insurance Services</Link></li>
                    <li><Link href="#">Contact Us</Link></li>
                </ul>
                <div className="flex space-x-3 text-white">
                    <FaFacebookF className="cursor-pointer" />
                    <FaTwitter className="cursor-pointer" />
                    <FaInstagram className="cursor-pointer" />
                    <FaLinkedinIn className="cursor-pointer" />
                </div>
            </div>

            {/* Mobile Menu (Sliding Down) */}
            {isOpen && (
                <div className="md:hidden flex flex-col bg-[#C10013] text-white p-4 space-y-4">
                    <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="#" onClick={() => setIsOpen(false)}>About Us</Link>
                    <Link href="#" onClick={() => setIsOpen(false)}>Insurance Services</Link>
                    <Link href="#" onClick={() => setIsOpen(false)}>Contact Us</Link>

                    {/* Social Icons */}
                    <div className="flex justify-center space-x-3 pt-2">
                        <FaFacebookF className="cursor-pointer" />
                        <FaTwitter className="cursor-pointer" />
                        <FaInstagram className="cursor-pointer" />
                        <FaLinkedinIn className="cursor-pointer" />
                    </div>
                </div>
            )}
        </nav>
    );
}
