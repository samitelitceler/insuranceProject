"use client"


import { Button } from "@/components/ui/button";

import primeLogo from '@/public/images/PrimeLogo.png'
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function NavSection() {
    return (
        <div>
            <nav className="bg-white shadow-md">
                <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-12">
                    <div className="flex items-center space-x-4">
                        <Image src={primeLogo.src} alt="Prime Insurance Group" width={120} height={40} />
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="https://customerservice.agentinsure.com/EzLynxCustomerService/web/primei/account/login" className="text-gray-700"><span className="hidden md:inline">My Account</span></Link>
                        <Button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2">Get a Quote</Button>
                    </div>
                </div>
                <div className="flex justify-between px-12 p-4 items-center bg-[#C10013]">

                    <ul className="hidden md:flex space-x-6 font-semibold text-white">
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
            </nav>
           
        </div>
    );
}