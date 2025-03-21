import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import leftLogo from "@/public/images/leftLogo.svg";
import rightLogo from "@/public/images/rightToLogoPrime.svg";

function Footer() {
  return (
    <footer className="bg-[#11193B] text-white py-12 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-start items-center gap-4 mb-8">
          <Image
            src={leftLogo.src}
            alt="Prime Insurance Group"
            width={300}
            height={80}
            className="w-[40px] invert md:w-[40px] lg:w-[50px] object-contain"
          />
          <Image
            src={rightLogo.src}
            alt="Prime Insurance Group"
            width={300}
            height={80}
            className="w-[100px] invert md:w-[110px] lg:w-[140px] object-contain"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 underline">Company</h3>
            <ul className="space-y-2 text-sm md:text-lg">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Insurance Services</a>
              </li>
              <li>
                <a href="#">Bonds</a>
              </li>
              <li>
                <a href="#">Compare Quotes</a>
              </li>
              <li>
                <a href="#">Customer Service</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 underline">Services</h3>

            <ul className="space-y-2 text-sm md:text-lg">
              <li>
                <a href="#">Auto Insurance</a>
              </li>
              <li>
                <a href="#">Home Insurance</a>
              </li>
              <li>
                <a href="#">Business Insurance</a>
              </li>
              <li>
                <a href="#">Life Insurance</a>
              </li>
              <li>
                <a href="#">Condo Insurance</a>
              </li>
              <li>
                <a href="#">Umbrella Insurance</a>
              </li>

              <li>
                <a href="#">Boat/Watercraft Insurance</a>
              </li>
              <li>
                <a href="#">Motorcycle Insurance</a>
              </li>
              <li>
                <a href="#">Renters Insurance</a>
              </li>
              <li>
                <a href="#">Personal Insurance</a>
              </li>
              <li>
                <a href="#">Cyber & EPLI</a>
              </li>
              <li>
                <a href="#">Workers Compensation</a>
              </li>
            </ul>
          </div>

          {/* Bonds Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 underline">Bonds</h3>
            <ul className="space-y-2 text-sm md:text-lg">
              <li>
                <a href="https://www.tisins.com/contract-bonds/" target="_blank" rel="noopener noreferrer">Contract Bonds</a>
              </li>
              <li>
                <a href="https://www.tisins.com/commercial-bonds/" target="_blank" rel="noopener noreferrer">Commercial Bonds</a>
              </li>
              <li>
                <a href="https://www.tisins.com/notary-bonds/" target="_blank" rel="noopener noreferrer">Notary Bonds</a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 underline">Contact Us</h3>

            {/* Google Map Embed */}
            <div className="mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.536614201292!2d-80.84008732386392!3d35.06206997297264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541ff03c8d47df%3A0x4eaf6b4dfb3018ff!2s3440%20Toringdon%20Way%2C%20Charlotte%2C%20NC%2028277%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="150"
                className="rounded-lg"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-gray-400 mt-1" />
              <p className="text-sm">
                3440 Toringdon Way, Suite 205, Office 254, Charlotte NC 28277
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-3 mt-3">
              <FaPhoneAlt className="text-gray-400 mt-1" />
              <p className="text-sm">9802979827</p>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-3 mt-3">
              <FaEnvelope className="text-gray-400 mt-1" />
              <p className="text-sm">
                <a href="mailto:info@primeinsurancellc.com" className="underline">
                  info@primeinsurancellc.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-400 mt-8">
          Copyright © 2025, Prime Insurance. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
