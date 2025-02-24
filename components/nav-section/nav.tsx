"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // Icons for mobile menu
import primeLogo from "@/public/images/PrimeLogo.png";
import { ChevronDown } from "lucide-react";
import { FaCalendar } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

  const handleDropdownNavigation = (value: string) => {
    if (!value) return;

    if (value === "clientCenter") {
      router.push("/clientCenter");
    } else if (value === "contactCarrier") {
      router.push("/contactCarrier");
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
        <div className="hidden md:flex items-center space-x-4 h">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="py-0">
              <div className="flex gap-1 items-center">
                <Link
                  href=""
                  className="w-full bg-transparent hover:underline hover:opacity-90"
                >
                  My Account
                </Link>
                <ChevronDown />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-gradient-to-b from-[#D2091D] to-[#880310] text-white border-none">
              <DropdownMenuItem
                className="hover:bg-[#D2091D] text-white cursor-pointer"
                onClick={() => router.push("/clientCenter")}
              >
                View Policies
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:bg-[#D2091D] text-white cursor-pointer"
                onClick={() => router.push("/clientCenter")}
              >
                Print Id Cards
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:bg-[#D2091D] text-white cursor-pointer"
                onClick={() => router.push("/clientCenter")}
              >
                Add Driver
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex items-center gap-1 cursor-pointer">
            <FaCalendar className="text-red-700 cursor-pointer text-lg"  />
              <h2 className="hover:underline" onClick={() => router.push('/appointments')}>Make an Appointment</h2>
          </div>

          <Button
            onClick={() => router.push("/compareQuotes")}
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="py-0">
                <div className="flex gap-1 items-center">
                  <Link
                    href=""
                    className="w-full bg-transparent text-white hover:opacity-90"
                  >
                    Customer Services
                  </Link>
                  <ChevronDown />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-gradient-to-b from-[#D2091D] to-[#880310] text-white border-none">
                <DropdownMenuItem
                  className="hover:bg-[#D2091D] text-white cursor-pointer"
                  onClick={() => handleDropdownNavigation("clientCenter")}
                >
                  Client Center
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="hover:bg-[#D2091D] text-white cursor-pointer"
                  onClick={() => handleDropdownNavigation("contactCarrier")}
                >
                  Contact Your Carrier
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li>
            <Link href="/contactUs" className="cursor-pointer">
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="flex space-x-3 text-white">
          <FaFacebookF  onClick={() => router.push('https://www.facebook.com/PrimeInsuranceServicesLLC/')} className="cursor-pointer"  />

          <FaInstagram onClick={() => router.push('https://www.instagram.com/PrimeInsuranceServicesLLC/')} className="cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu (Sliding Down) */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-gradient-to-b from-[#D2091D] to-[#880310] text-white p-4 space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <a
              onClick={() => handleNavigation("about")}
              className="cursor-pointer"
            >
              About Us
            </a>
            <a
              onClick={() => handleNavigation("insuranceServices")}
              className="cursor-pointer"
            >
              Insurance Services
            </a>
          
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="py-0">
                <div className="flex gap-1 items-center">
                  <Link
                    href=""
                    className="w-full bg-transparent text-white hover:opacity-90"
                  >
                    Customer Services
                  </Link>
                  <ChevronDown />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-gradient-to-b from-[#D2091D] to-[#880310] text-white border-none">
                <DropdownMenuItem
                  className="hover:bg-[#D2091D] text-white cursor-pointer"
                  onClick={() => handleDropdownNavigation("clientCenter")}
                >
                  Client Center
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="hover:bg-[#D2091D] text-white cursor-pointer"
                  onClick={() => handleDropdownNavigation("contactCarrier")}
                >
                  Contact Your Carrier
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
    
            <Link href="/contactUs" className="cursor-pointer">
              Contact Us
            </Link>

          {/* Social Icons */}
          <div className="flex justify-center space-x-3 pt-2">
            <FaFacebookF
              href="https://www.facebook.com/PrimeInsuranceServicesLLC/"
              className="cursor-pointer"
            />
            <FaInstagram
              href="https://www.instagram.com/PrimeInsuranceServicesLLC/"
              className="cursor-pointer"
            />
          </div>
        </div>
      )}
    </nav>
  );
}
