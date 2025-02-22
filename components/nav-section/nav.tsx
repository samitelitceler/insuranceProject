"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // Icons for mobile menu
import primeLogo from "@/public/images/PrimeLogo.png";

export default function NavSection() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (sectionId: string) => {
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => scrollToSection(sectionId), 200);
    } else {
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleDropdownNavigation = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    if (!value) return;

    if (value === "clientCenter") {
      router.push('/clientCenter')
    } else if (value === "contactCarrier") {
      router.push('/contactCarrier')
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Image
            src={primeLogo.src}
            alt="Prime Insurance Group"
            width={120}
            height={40}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="https://customerservice.agentinsure.com/EzLynxCustomerService/web/primei/account/login"
            className="text-gray-700"
          >
            <span className="hidden md:inline">My Account</span>
          </Link>
          <Button
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=gopal@primeinsurancellc.com",
                "_blank"
              )
            }
            className="bg-gradient-to-b from-[#D2091D] to-[#880310] hover:bg-red-700 text-white px-4 py-2"
          >
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-between px-12 p-4 items-center bg-gradient-to-b from-[#D2091D] to-[#880310]">
        <ul className="flex space-x-6 font-semibold text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <a
              onClick={() => handleNavigation("about")}
              className="cursor-pointer"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              onClick={() => handleNavigation("insuranceServices")}
              className="cursor-pointer"
            >
              Insurance Services
            </a>
          </li>
          <li>
            <Link href="/compareQuotes" className="cursor-pointer">
              Compare Quotes
            </Link>
          </li>
          <li>
            <select
              onChange={handleDropdownNavigation}
              className="cursor-pointer bg-transparent text-white border-none focus:outline-none"
            >
              <option value="">Customer Services</option>
              <option value="clientCenter">Client Center</option>
              <option value="contactCarrier">Contact Your Carrier</option>
            </select>
          </li>
          <li>
            <Link
              href="/contactUs"
              className="cursor-pointer"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="flex space-x-3 text-white">
          <FaFacebookF className="cursor-pointer" />

          <FaInstagram className="cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu (Sliding Down) */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-gradient-to-b from-[#D2091D] to-[#880310] text-white p-4 space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <a
            onClick={() => scrollToSection("about")}
            className="cursor-pointer"
          >
            About Us
          </a>
          <a
            href="#insuranceServices"
            onClick={() => scrollToSection("insuranceServices")}
            className="cursor-pointer"
          >
            Insurance Services
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=gopal@primeinsurancellc.com"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </a>

          {/* Social Icons */}
          <div className="flex justify-center space-x-3 pt-2">
            <FaFacebookF href="https://www.facebook.com/PrimeInsuranceServicesLLC/" className="cursor-pointer" />
            <FaInstagram href="https://www.instagram.com/PrimeInsuranceServicesLLC/" className="cursor-pointer" />
          </div>
        </div>
      )}
    </nav>
  );
}
