"use client";

import { useState } from "react";
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
    <nav className="bg-white shadow-md font-opensans">
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
        <div className="hidden lg:flex items-center justify-end space-x-4 md:space-x-8 h-full flex-1">
          {/* Email An Agent */}
          <div className="flex items-center gap-2 cursor-pointer">
            <svg className="w-5 h-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            <span className="text-gray-700 hover:text-[#D2091D] hover:underline cursor-pointer" onClick={() => router.push('/contactUs')}>
              Email An Agent
            </span>
          </div>

          {/* Make an Appointment */}
          <div className="flex items-center gap-2 cursor-pointer">
            <FaCalendar className="text-gray-700 text-lg" />
            <span className="text-gray-700 hover:text-[#D2091D] hover:underline cursor-pointer"
              onClick={() => window.open('https://calendly.com/samit-elitceler/30min', '_blank')}>
              Make an Appointment
            </span>
          </div>

          {/* Follow Us */}
          <div className="flex items-center gap-2">
            <span className="text-gray-700">Follow Us</span>
            <div className="flex gap-2">
              <FaFacebookF
                onClick={() => window.open('https://www.facebook.com/PrimeInsuranceServicesLLC/', '_blank')}
                className="text-gray-700 cursor-pointer hover:opacity-80 hover:opacity-80"
              />
              <FaInstagram 
                onClick={() => window.open('https://www.instagram.com/PrimeInsuranceServicesLLC/', '_blank')}
                className="text-gray-700 cursor-pointer hover:opacity-80"
              />
            </div>
          </div>

          {/* My Account Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="py-0">
              <div className="flex items-center gap-2 cursor-pointer">
                <svg className="w-5 h-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 hover:text-[#D2091D] hover:underline cursor-pointer">My Account</span>
                <ChevronDown className="text-gray-700" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-white border shadow-lg">
              <DropdownMenuItem
                className="hover:bg-gray-100 text-gray-700 cursor-pointer"
                onClick={() => window.open("https://customerservice.agentinsure.com/EzLynxCustomerService/web/primei/account/login", "_blank")}
              >
                View Policies
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:bg-gray-100 text-gray-700 cursor-pointer"
                onClick={() => window.open("https://customerservice.agentinsure.com/EzLynxCustomerService/web/primei/account/login", "_blank")}
              >
                Print Id Cards
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:bg-gray-100 text-gray-700 cursor-pointer"
                onClick={() => window.open("https://customerservice.agentinsure.com/EzLynxCustomerService/web/primei/account/login", "_blank")}
              >
                Add Driver
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-between px-4 md:px-12 p-4 items-center bg-gradient-to-b from-[#D2091D] to-[#880310]">
        <ul className="flex flex-wrap space-x-3 md:space-x-6 font-semibold text-white text-sm md:text-base">
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="py-0">
                <div className="flex gap-1 items-center">
                  <Link
                    href=""
                    className="w-full bg-transparent text-white hover:opacity-90"
                  >
                    Insurance Services
                  </Link>
                  <ChevronDown />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 text-gray-700 cursor-pointer border-none">
                <DropdownMenuItem onClick={() => router.push('/autoinsurance')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Auto Insurance
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/homeinsurance')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Home Insurance
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/lifeInsurance')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Life Insurance
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/businessInsurance')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Business Insurance
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/personalInsurance')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Personal Insurance
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/umbrellaInsurance')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Umbrella Insurance
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/cyberInsurance')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Cyber Insurance
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/rentersInsurance')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Renters Insurance
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/motorcycleInsurance')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Motorcycle Insurance
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/transportationalInsurance')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Transportational Insurance
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/boatInsurance')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Boat Insurance
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/condoInsurance')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Condo Insurance
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="py-0">
                <div className="flex gap-1 items-center">
                  <Link
                    href=""
                    className="w-full bg-transparent text-white hover:opacity-90"
                  >
                    Bonds
                  </Link>
                  <ChevronDown />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 text-white border-none">
                <DropdownMenuItem onClick={() => router.push('/contractBonds')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Contract Bonds
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/commercialBonds')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Commercial Bonds
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('notaryBonds')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Notary Bonds
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
              <DropdownMenuContent className="w-48 text-white border-none">
                <DropdownMenuItem
                  className="hover:bg-gray-100 text-gray-700 bg-white cursor-pointer"
                  onClick={() => router.push('https://customerservice.agentinsure.com/EzLynxCustomerService/web/primei/account/login')}
                >
                  Client Center
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="hover:bg-gray-100 text-gray-700 bg-white cursor-pointer"
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

        {/* <div className="flex space-x-3 text-white">
          <FaFacebookF onClick={() => router.push('https://www.facebook.com/PrimeInsuranceServicesLLC/')} className="cursor-pointer" />

          <FaInstagram onClick={() => router.push('https://www.instagram.com/PrimeInsuranceServicesLLC/')} className="cursor-pointer" />
        </div> */}
      </div>

      {/* Mobile Menu (Sliding Down) */}
      {isOpen && (
        <div className="lg:hidden flex flex-col bg-gradient-to-b from-[#D2091D] to-[#880310] text-white p-4 space-y-4">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 text-white">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <span className="hover:text-gray-200 cursor-pointer" onClick={() => router.push('/contactUs')}>
                Email An Agent
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-white">
              <FaCalendar className="text-lg" />
              <span className="hover:text-gray-200 cursor-pointer"
                onClick={() => window.open('https://calendly.com/samit-elitceler/30min', '_blank')}>
                Make an Appointment
              </span>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild className="py-0">
                <div className="flex items-center gap-2 cursor-pointer text-white">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                  </svg>
                  <span>My Account</span>
                  <ChevronDown />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white border shadow-lg">
                <DropdownMenuItem
                  className="hover:bg-gray-100 text-gray-700 cursor-pointer"
                  onClick={() => window.open("https://customerservice.agentinsure.com/EzLynxCustomerService/web/primei/account/login", "_blank")}
                >
                  View Policies
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="hover:bg-gray-100 text-gray-700 cursor-pointer"
                  onClick={() => window.open("https://customerservice.agentinsure.com/EzLynxCustomerService/web/primei/account/login", "_blank")}
                >
                  Print Id Cards
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="hover:bg-gray-100 text-gray-700 cursor-pointer"
                  onClick={() => window.open("https://customerservice.agentinsure.com/EzLynxCustomerService/web/primei/account/login", "_blank")}
                >
                  Add Driver
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild className="py-0">
                <div className="flex gap-1 items-center">
                  <Link
                    href=""
                    className="w-full bg-transparent text-white hover:opacity-90"
                  >
                    Insurance Services
                  </Link>
                  <ChevronDown />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 text-gray-700 cursor-pointer border-none">
                <DropdownMenuItem onClick={() => router.push('/autoinsurance')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Auto Insurance
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/homeinsurance')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Home Insurance
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/lifeInsurance')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Life Insurance
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/businessInsurance')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Business Insurance
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/personalInsurance')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Personal Insurance
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/umbrellaInsurance')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Umbrella Insurance
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/cyberInsurance')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Cyber Insurance
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/rentersInsurance')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Renters Insurance
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/motorcycleInsurance')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Motorcycle Insurance
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/transportationalInsurance')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Transportational Insurance
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/boatInsurance')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Boat Insurance
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/condoInsurance')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Condo Insurance
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/compareQuotes" className="cursor-pointer">
              Compare Quotes
            </Link>

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
              <DropdownMenuContent className="w-48  text-white border-none">
                <DropdownMenuItem
                  className="hover:bg-gray-100 text-gray-700 cursor-pointer"
                  onClick={() => handleDropdownNavigation("clientCenter")}
                >
                  Client Center
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="hover:bg-gray-100 text-gray-700 cursor-pointer"
                  onClick={() => handleDropdownNavigation("contactCarrier")}
                >
                  Contact Your Carrier
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild className="py-0">
                <div className="flex gap-1 items-center">
                  <Link
                    href=""
                    className="w-full bg-transparent text-white hover:opacity-90"
                  >
                    Bonds
                  </Link>
                  <ChevronDown />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 text-white border-none">
                <DropdownMenuItem onClick={() => router.push('/contractBonds')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Contract Bonds
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/commercialBonds')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Commercial Bonds
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/notaryBonds')} className="hover:bg-gray-100 text-gray-700 cursor-pointer">
                  Notary Bonds
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/contactUs" className="cursor-pointer">
              Contact Us
            </Link>

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
        </div>
      )}
    </nav>
  );
}
