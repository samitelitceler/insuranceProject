import React from 'react'
import primeLogo from '@/public/images/PrimeLogo.png'
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div>
        <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Logo */}
          <div className="flex justify-start">
            <Image src={primeLogo.src} className="invert" alt="PRIME Insurance Group" width={150} height={50} />
          </div>

          {/* Horizontal Line */}
          <hr className="border-gray-600 my-6" />

          {/* Company & Services + Socials */}
          <div className="flex flex-col md:flex-row justify-between mt-4">
            {/* Company & Services */}
            <div className="flex flex-col md:flex-row gap-12">
              <div>
                <h3 className="font-semibold text-lg">Company</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Insurance Services</a></li>
                  <li><a href="#">Company Quotes</a></li>
                  <li><a href="#">Our Team</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Services</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li><a href="#">Auto Insurance</a></li>
                  <li><a href="#">Home Insurance</a></li>
                  <li><a href="#">Life Insurance</a></li>
                  <li><a href="#">Personal Insurance</a></li>
                  <li><a href="#">Umbrella Insurance</a></li>
                </ul>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-8 md:mt-0">
              <h3 className="font-semibold text-lg">Join Us</h3>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-white"><FaFacebookF size={18} /></a>
                <a href="#" className="text-white"><FaTwitter size={18} /></a>
                <a href="#" className="text-white"><FaInstagram size={18} /></a>
                <a href="#" className="text-white"><FaLinkedin size={18} /></a>
              </div>
            </div>
          </div>

          {/* Horizontal Line */}
          <hr className="border-gray-600 my-6" />

          {/* Copyright */}
          <div className="text-left text-xs md:text-sm">@ 202X. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
