"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // Icons for mobile menu
// import primeLogo from "@/public/images/PrimeLogo.png";
import leftLogo from "@/public/images/leftLogo.svg";
import rightLogo from "@/public/images/rightToLogoPrime.svg";

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
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  // Add useEffect to track current path
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const handleNavigation = (path: string) => {
    if (path === '/contactUs') {
      // If already on contact page, reload and scroll to form
      if (currentPath === '/contactUs') {
        window.location.reload();
        // Add a small delay to ensure the page has loaded before scrolling
        setTimeout(() => {
          const contactForm = document.getElementById('contact-form');
          if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      } else {
        // If coming from another page, navigate and then scroll
        router.push(path);
        setTimeout(() => {
          const contactForm = document.getElementById('contact-form');
          if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      }
    } else {
      // Handle other navigation normally
      if (currentPath !== path) {
        router.push(path);
      } else {
        window.location.reload();
      }
    }
  };

  const handleEmailAgentClick = () => handleNavigation('/contactUs');

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
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8 lg:px-12">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image
            src={leftLogo.src}
            alt="Prime Insurance Group"
            width={300}
            height={80}
            className="w-[150px] md:w-[180px] lg:w-[50px] object-contain"
          />
          <Image
            src={rightLogo.src}
            alt="Prime Insurance Group"
            width={300}
            height={80}
            className="w-[150px] md:w-[180px] lg:w-[150px] object-contain"
          />
          
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-end space-x-4 md:space-x-8 h-full flex-1">
          {/* Email An Agent */}
          <div className="flex items-center gap-2 cursor-pointer">
            <svg className="w-5 h-5 text-[#11193B]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            <span 
              className="text-[#11193B] hover:text-[#536AAE] hover:underline cursor-pointer" 
              onClick={handleEmailAgentClick}
            >
              Email An Agent
            </span>
          </div>

          {/* Make an Appointment */}
          <div className="flex items-center gap-2 cursor-pointer">
            <FaCalendar className="text-[#11193B] text-lg" />
            <Link className="text-[#11193B] hover:text-[#536AAE] cursor-pointer hover:underline"
              href="https://calendly.com/primeinsurancellc-info/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Make an Appointment
            </Link>
          </div>

          {/* Follow Us */}
          <div className="flex items-center gap-2">
            <span className="text-[#11193B]">Follow Us</span>
            <div className="flex gap-2">
              <FaFacebookF
                onClick={() => window.open('https://www.facebook.com/PrimeInsuranceServicesLLC/', '_blank')}
                className="text-[#11193B] cursor-pointer hover:text-[#536AAE]"
              />
              <FaInstagram 
                onClick={() => window.open('https://www.instagram.com/PrimeInsuranceServicesLLC/', '_blank')}
                className="text-[#11193B] cursor-pointer hover:text-[#536AAE]"
              />
            </div>
          </div>

          {/* My Account Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="py-0">
              <div className="flex items-center gap-2 cursor-pointer">
                <svg className="w-5 h-5 text-[#11193B]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                </svg>
                <span className="text-[#11193B] hover:text-[#536AAE] hover:underline cursor-pointer">My Account</span>
                <ChevronDown className="text-[#11193B]" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-white border shadow-lg">
              <DropdownMenuItem
                className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                onClick={() => window.open("https://customerservice.agentinsure.com/EzLynxCustomerService/web/primei/account/login", "_blank")}
              >
                View Policies
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                onClick={() => window.open("https://customerservice.agentinsure.com/EzLynxCustomerService/web/primei/account/login", "_blank")}
              >
                Print Id Cards
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
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
            className="text-[#11193B] focus:outline-none"
          >
            {isOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-between p-4 items-center bg-[#536AAE]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <ul className="flex flex-wrap space-x-6 font-semibold text-white text-base">
            <li className="whitespace-nowrap">
              <Link 
                href="/" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/');
                }}
                className="hover:underline transition-all duration-200"
                title="Home"
              >
                Home
              </Link>
            </li>
            <li className="whitespace-nowrap">
              <Link
                href="/aboutus"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/aboutus');
                }}
                className="hover:underline transition-all duration-200"
                title="About Us"
              >
                About Us
              </Link>
            </li>
            <li className="whitespace-nowrap">
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="py-0">
                  <div className="flex gap-1 items-center hover:underline transition-all duration-200" title="Insurance Services">
                    <Link
                      href=""
                      className="w-full bg-transparent text-white"
                    >
                      Insurance Services
                    </Link>
                    <ChevronDown />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 text-[#11193B] cursor-pointer border-none">
                  <DropdownMenuItem 
                    onClick={() => handleNavigation('/autoinsurance')} 
                    className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                  >
                    Auto Insurance
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleNavigation('/homeinsurance')} 
                    className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                  >
                    Home Insurance
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleNavigation('/lifeInsurance')} 
                    className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                  >
                    Life Insurance
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleNavigation('/businessInsurance')} 
                    className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                  >
                    Business Insurance
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleNavigation('/personalInsurance')} 
                    className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                  >
                    Personal Insurance
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleNavigation('/umbrellaInsurance')} 
                    className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                  >
                    Umbrella Insurance
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleNavigation('/cyberInsurance')} 
                    className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                  >
                    Cyber Insurance
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleNavigation('/rentersInsurance')} 
                    className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                  >
                    Renters Insurance
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleNavigation('/motorcycleInsurance')} 
                    className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                  >
                    Motorcycle Insurance
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleNavigation('/transportationalInsurance')} 
                    className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                  >
                    Transportational Insurance
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleNavigation('/boatInsurance')} 
                    className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                  >
                    Boat Insurance
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleNavigation('/condoInsurance')} 
                    className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                  >
                    Condo Insurance
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleNavigation('/contractBonds')} 
                    className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                  >
                    Contract Bonds
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleNavigation('/commercialBonds')} 
                    className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                  >
                    Commercial Bonds
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleNavigation('/notaryBonds')} 
                    className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                  >
                    Notary Bonds
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li className="whitespace-nowrap">
              <Link 
                href="/compareQuotes" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/compareQuotes');
                }}
                className="hover:underline transition-all duration-200 cursor-pointer"
                title="Compare Insurance Quotes"
              >
                Compare Quotes
              </Link>
            </li>
            <li className="whitespace-nowrap">
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="py-0">
                  <div className="flex gap-1 items-center hover:underline transition-all duration-200" title="Customer Services">
                    <Link
                      href=""
                      className="w-full bg-transparent text-white"
                    >
                      Customer Service
                    </Link>
                    <ChevronDown />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 text-white border-none">
                  <DropdownMenuItem
                    className="hover:bg-gray-100 text-[#11193B] bg-white cursor-pointer"
                    onClick={() => window.open('https://customerservice.agentinsure.com/EzLynxCustomerService/web/primei/account/login', '_blank')}
                  >
                    Client Center
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="hover:bg-gray-100 text-[#11193B] bg-white cursor-pointer"
                    onClick={() => handleDropdownNavigation("contactCarrier")}
                  >
                    Contact Your Carrier
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li className="whitespace-nowrap">
              <Link 
                href="/contactUs" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/contactUs');
                }}
                className="hover:underline transition-all duration-200 cursor-pointer"
                title="Contact Us"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu (Sliding Down) */}
      {isOpen && (
        <div className="lg:hidden flex flex-col bg-[#11193B] text-white p-4 space-y-4">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 text-white">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <span 
                className="text-white hover:text-[#536AAE] hover:underline cursor-pointer" 
                onClick={handleEmailAgentClick}
              >
                Email An Agent
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-white">
              <FaCalendar className="text-lg" />
              <span className="text-white hover:text-[#536AAE] hover:underline cursor-pointer"
                onClick={() => window.open('https://calendly.com/primeinsurancellc-info/30min', '_blank')}>
                Make an Appointment
              </span>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild className="py-0">
                <div className="flex items-center gap-2 cursor-pointer text-white">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white hover:text-[#536AAE] hover:underline cursor-pointer">My Account</span>
                  <ChevronDown />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white border shadow-lg">
                <DropdownMenuItem
                  className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                  onClick={() => window.open("https://customerservice.agentinsure.com/EzLynxCustomerService/web/primei/account/login", "_blank")}
                >
                  View Policies
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                  onClick={() => window.open("https://customerservice.agentinsure.com/EzLynxCustomerService/web/primei/account/login", "_blank")}
                >
                  Print Id Cards
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
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
              <DropdownMenuContent className="w-48 text-[#11193B] cursor-pointer border-none">
                <DropdownMenuItem 
                  onClick={() => handleNavigation('/autoinsurance')} 
                  className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                >
                  Auto Insurance
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleNavigation('/homeinsurance')} 
                  className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                >
                  Home Insurance
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleNavigation('/lifeInsurance')} 
                  className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                >
                  Life Insurance
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleNavigation('/businessInsurance')} 
                  className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                >
                  Business Insurance
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleNavigation('/personalInsurance')} 
                  className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                >
                  Personal Insurance
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleNavigation('/umbrellaInsurance')} 
                  className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                >
                  Umbrella Insurance
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleNavigation('/cyberInsurance')} 
                  className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                >
                  Cyber Insurance
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleNavigation('/rentersInsurance')} 
                  className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                >
                  Renters Insurance
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleNavigation('/motorcycleInsurance')} 
                  className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                >
                  Motorcycle Insurance
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleNavigation('/transportationalInsurance')} 
                  className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                >
                  Transportational Insurance
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleNavigation('/boatInsurance')} 
                  className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                >
                  Boat Insurance
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleNavigation('/condoInsurance')} 
                  className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                >
                  Condo Insurance
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              href="/compareQuotes" 
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/compareQuotes');
              }}
              className="cursor-pointer"
            >
              Compare Quotes
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild className="py-0">
                <div className="flex gap-1 items-center">
                  <Link
                    href=""
                    className="w-full bg-transparent text-white hover:opacity-90"
                  >
                    Customer Service
                  </Link>
                  <ChevronDown />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48  text-white border-none">
                <DropdownMenuItem
                  className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                  onClick={() => window.open('https://customerservice.agentinsure.com/EzLynxCustomerService/web/primei/account/login', '_blank')}
                >
                  Client Center
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
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
                <DropdownMenuItem 
                  onClick={() => handleNavigation('/contractBonds')} 
                  className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                >
                  Contract Bonds
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleNavigation('/commercialBonds')} 
                  className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                >
                  Commercial Bonds
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleNavigation('/notaryBonds')} 
                  className="hover:bg-gray-100 text-[#11193B] cursor-pointer"
                >
                  Notary Bonds
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              href="/contactUs" 
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/contactUs');
              }}
              className="cursor-pointer"
            >
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
