"use client";

import { Button } from "@/components/ui/button";
import { Inter } from "next/font/google";
import {
  Car,
  Umbrella,
  House,
  Bike,
  Briefcase,
  Sailboat,
  User,
  ShieldCheck,
  Building2,
  Truck,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import NavSection from "@/components/nav-section/nav";
import Footer from "@/components/footer/Footer";
import { useState } from "react";
import { useInView } from '@/hooks/useInView';
import React from "react";
import Carriers from "@/components/partnerCarriers/carriers";
const inter = Inter({ weight: ["400", "600", "700"], subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const handleNavigation = () => {
    const ezlynxUrl = "http://sgt2.ezlynx.com/ls/click?upn=u001.rm8aNjauuBJWvFaVyKUmk3JQhrODDXZR4jPVn39fXtGpMjwgsQbikcptGOdhdhl-2B6sFik-2B89MlNq8WCrXWmnPjyjg4wENAuujAOVlzdKjLzTd0JdxqJloaz2-2BgzW4OLaDU5-_4uPN2jI8bTL0Cws4JGJkHF5x95e04t-2BUCNzi0ZHkQsgXtNc-2FwytgmGD-2Bdm-2BbApD3LdGQabJfRPsnZs1T7A-2B52CwEPMNoFiV8jrfhHrZN4gOdt3thkHr-2FmpIJBA42ojpXW0F4A1PXDzcbcvqQlsWcduJr5gI1hnx2VYZ-2BQ05VZa39R4UaMqT3KoKhucMnCv-2BGwNHLDHCafSXzMimT8xT11LoTCyeVH5IPa8V41duTtuc-3D";
    
    const selectedValue = document.querySelector('select')?.value;
    if (selectedValue === 'homeinsurance' || selectedValue === 'autoinsurance') {
      window.open(ezlynxUrl, '_blank');
    } else {
      // Navigate to the selected path if it's not home or auto insurance
      if (selectedValue) {
        router.push(selectedValue);
      }
    }
  };

  const handleAutoHomeInsurance = (path: string) => {
    const isAutoOrHome =
      path.includes("/autoinsurance") || path.includes("/homeinsurance");
    const basePath = isAutoOrHome ? path : `/${path}`;
    router.push(basePath);
  };



  const insuranceOptions = [
    { name: "Auto Insurance", icon: <Car />, path: "autoinsurance" },
    { name: "Home Insurance", icon: <House />, path: "homeinsurance" },
    { name: "Life Insurance", icon: <Umbrella />, path: "lifeInsurance" },
    {
      name: "Commercial Insurance",
      icon: <Briefcase />,
      path: "businessInsurance",
    },
    {
      name: "Motorcycle Insurance",
      icon: <Bike />,
      path: "motorcycleInsurance",
    },
    { name: "Boat Insurance", icon: <Sailboat />, path: "boatInsurance" },
    { name: "Personal Insurance", icon: <User />, path: "personalInsurance" },
    {
      name: "Cyber & EPIL",
      icon: <ShieldCheck />,
      path: "cyberInsurance",
    },
    {
      name: "Umbrella Insurance",
      icon: <Umbrella />,
      path: "umbrellaInsurance",
    },
    {
      name: "Renters Insurance",
      icon: <Building2 />,
      path: "rentersInsurance",
    },
    {
      name: "Transportational Insurance",
      icon: <Truck />,
      path: "transportationalInsurance",
    },
    { name: "Condo Insurance", icon: <Mail />, path: "condoInsurance" },
  ];

  // const menuItems = [
  //   { name: "AUTO INSURANCE", icon: <Car />, path: "autoinsurance" },
  //   { name: "HOME INSURANCE", icon: <House />, path: "homeinsurance" },
  //   { name: "BUSINESS INSURANCE", icon: <Calculator />, path: "businessInsurance" },
  //   { name: "JOIN OUR Team", icon: <User />, path: "jointeam" },
  // ];

  return (
    <div className={inter.className}>
      {/* Navbar Section */}
      <NavSection />
      <section
        id="hero"
        className="relative w-full h-[60vh] flex items-center justify-start bg-cover bg-center"
        style={{
          background:
            "linear-gradient(270.16deg, rgba(217, 217, 217, 0.05) 0.15%, rgba(39, 38, 38, 0.3) 70.05%, rgba(19, 19, 19, 0.5) 99.87%), url('/images/bgHome.png') no-repeat center center / cover",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="relative z-10 text-white max-w-3xl">
            <h1 className="text-2xl md:text-4xl font-sans font-bold mb-4">
              Insurance is not just about protecting what you have; it&apos;s
              about securing your future and the peace of mind that comes with it.
            </h1>
            <div className="flex flex-col items-start gap-2 mt-4 w-full md:w-64">
              <select
                className="w-full text-black p-2 border rounded"
                defaultValue=""
              >
                <option value="">Select Insurance</option>
                {insuranceOptions.map((option) => (
                  <option key={option.path} value={option.path}>
                    {option.name}
                  </option>
                ))}
              </select>
              <Button
                onClick={handleNavigation}
                className="w-full font-sans font-semibold bg-gradient-to-b from-[#D2091D] to-[#880310] hover:bg-red-700 text-white px-6 py-3"
              >
                START QUOTE
              </Button>
            </div>
          </div>
        </div>
      </section>
    
      {/* Add this new section right after the hero section */}
      {/* <section className="w-full py-12 px-4 md:px-8 overflow-x-auto">
        <div className="flex justify-between min-w-max gap-8">
          {insuranceOptions.map((option, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-40 cursor-pointer"
              onClick={() => handleAutoHomeInsurance(option.path)}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#D2091D] text-white mb-2">
                {option.icon}
              </div>
              <p className="text-center font-medium text-sm uppercase">
                {option.name.split(' ')[0]}
                <br />
                INSURANCE
              </p>
            </div>
          ))}
        </div>
      </section> */}
      <section
        className="w-full bg-gray-800 py-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className=" overflow-hidden">
          <motion.div
            className="flex space-x-30"
            animate={{ x: isHovered ? "0%" : ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...insuranceOptions, ...insuranceOptions].map((item, index) => (
              <div key={index} className="flex items-center">
                <div
                  className="flex-shrink-0 flex flex-col items-center justify-center cursor-pointer w-56 h-32 group relative hover:scale-105 transition-transform duration-300"
                  onClick={() => handleAutoHomeInsurance(item.path)}
                >
                  <div className="w-12 h-12 flex items-center justify-center text-white">
                    {React.cloneElement(item.icon, { size: 24 })}
                  </div>
                  <p className="text-white text-center font-medium text-base uppercase tracking-wider leading-tight px-2">
                    {item.name}
                  </p>

                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-3 text-white backdrop-blur-sm">
                    <button className="text-xs font-bold text-white px-4 py-1 rounded flex cursor-pointer items-center justify-center gap-1">
                      LEARN MORE
                      <span className="text-lg text-red-700 flex items-center">→</span>
                    </button>
                  </div>
                </div>

                {index !== [...insuranceOptions, ...insuranceOptions].length - 1 && (
                  <div className="h-28 border-l border-gray-500 mx-12"></div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>


      <section className="w-full px-4 md:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Us</h2>
          <div className="border border-red-400 rounded-lg p-6 md:p-10 text-left mb-16">
            <p className="text-xl md:text-lg font-opensans font-normal leading-relaxed mb-6">
              Prime Insurance Services is an independent insurance agency located in Charlotte, NC
              and serving clients across the North and South Carolina states with homeowners,
              automobile, recreational, commercial, and life insurance.
            </p>
            <p className="text-xl md:text-lg font-opensans font-normal leading-relaxed mb-6">
              As independent agents, we can shop over 30 carriers, including Travelers, Liberty
              Mutual, Safeco, Nationwide, The Hartford, State Auto, Berkshire Hathaway, National
              General, Foremost, Heritage Insurance, American Modern, and AAA to explore
              solutions for your insurance needs.
            </p>
            <p className="text-xl md:text-lg font-opensans font-normal leading-relaxed">
              We are led by a team of insurance and account managers experienced in both personal
              and business insurance and is owned and operated independently to serve your needs
              better.
            </p>
          </div>

        </div>
      </section>

      {/* New Independent Agency Advantage Section */}
      <section className="w-full px-4 md:px-8 py-16 bg-gray-50" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[48px] text-[#002B5B] font-bold text-center mb-4">The Independent Agency Advantage</h2>
          <p className="text-xl text-center mb-4">Why Choose an Independent Insurance Agency?</p>
          <p className="text-lg text-center mb-12">Not all insurance agencies are the same. As an independent agency, Prime Insurance Services works for you—not a single insurance company. This means we provide unbiased guidance, competitive pricing, and a wide range of coverage options to meet your specific needs.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "More Choices, Better Coverage",
                delay: "0.2s",
                description: "As an independent insurance agency, we have access to multiple insurance carriers, allowing us to find the best coverage options tailored to your specific needs."
              },
              {
                title: "Here When You Need Us",
                delay: "0.4s",
                description: "Our dedicated team provides personalized support and guidance throughout the claims process, ensuring you receive the assistance you deserve when you need it most."
              },
              {
                title: "Expert Guidance, Every Time",
                delay: "0.6s",
                description: "Our team consists of experienced, licensed professionals who stay up-to-date with industry trends and regulations to provide expert guidance and recommendations."
              }
            ].map((advantage, index) => (
              <div
                key={index}
                className={`${isInView ? 'animate-slide-in' : 'opacity-0 translate-x-[-100%]'} hover:shadow-lg transition-shadow duration-300`}
                style={{ animationDelay: advantage.delay }}
              >
                <div className="flex flex-col items-start p-6 bg-white rounded-lg">
                  <div className="self-center mb-4"></div>
                  <h3 className="text-[#0067B2] text-2xl font-semibold mb-4">{advantage.title}</h3>
                  <p className="text-[#393939] font-opensans text-[18px] leading-[30px]">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg mb-6">
              Choosing Prime Insurance Services means choosing a partner who puts your needs first. Contact us today to discover how independent insurance can give you better protection, better value, and better service.
            </p>
            <Button
              onClick={() => router.push('/contactUs')}
              className="font-sans font-semibold bg-gradient-to-b from-[#D2091D] to-[#880310] hover:bg-red-700 text-white px-8 py-3"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Carriers />


      <Footer />
    </div>
  );
}
