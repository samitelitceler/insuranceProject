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
import React from "react";

const inter = Inter({ weight: ["400", "600", "700"], subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [selectedPath, setSelectedPath] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPath(event.target.value);
  };
  const handleNavigation = () => {
    if (selectedPath) {
      router.push(`/${selectedPath}`);
    }
  };

  const handleAutoHomeInsurance = (path: string) => {
    const isAutoOrHome =
      path.includes("/autoinsurance") || path.includes("/homeinsurance");
    const basePath = isAutoOrHome ? path : `/${path}`;
    router.push(basePath);
  };

  const getInsuranceDescription = (path: string) => {
    switch (path) {
      case "autoinsurance":
        return "Auto insurance protects your vehicle and other property in case of accidents or theft. It also covers you and your passengers in case of injuries.";
      case "homeinsurance":
        return "Home insurance protects your home and other property from damage or loss. It also covers you and your family in case of injuries.";
      case "lifeInsurance":
        return "Life insurance provides financial support for your family in case of your death. It also covers your funeral expenses.";
      case "businessInsurance":
        return "Business insurance protects your business from damage or loss. It also covers you and your employees in case of injuries.";
      case "motorcycleInsurance":
        return "Motorcycle insurance protects your motorcycle and other property in case of accidents or theft. It also covers you in case of injuries.";
      case "boatInsurance":
        return "Boat insurance protects your boat and other property in case of accidents or theft. It also covers you in case of injuries.";
      case "personalInsurance":
        return "Personal insurance protects your personal property from damage or loss. It also covers you in case of injuries.";
      case "cyberInsurance":
        return "Cyber insurance protects your computer and other property from damage or loss. It also covers you in case of injuries.";
      case "umbrellaInsurance":
        return "Umbrella insurance protects you and your family in case of injuries.";
      case "rentersInsurance":
        return "Renters insurance protects your personal property from damage or loss. It also covers you in case of injuries.";
      case "transportationalInsurance":
        return "Transportational insurance protects your vehicle and other property in case of accidents or theft. It also covers you in case of injuries.";
      case "condoInsurance":
        return "Condo insurance protects your personal property from damage or loss. It also covers you in case of injuries.";
      default:
        return "";
    }
  };

  const companies = [
    {
      name: "Allstate",
      logo: "/images/Allstate.png",
    },
    {
      name: "Foremost",
      logo: "/images/Foremost.jpeg",
    },
    {
      name: "Heritage",
      logo: "/images/heritageLogo.png",
    },
    {
      name: "Liberty Mutual",
      logo: "https://www.anchorins.com/img/carriers/liberty-mutual.png",
    },
    {
      name: "MetLife",
      logo: "https://www.anchorins.com/img/carriers/metlife.png",
    },
  ];

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
        className="relative w-full h-[60vh] flex items-center justify-start bg-cover bg-center px-4 md:px-8"
        style={{
          background:
            "linear-gradient(270.16deg, rgba(217, 217, 217, 0.05) 0.15%, rgba(39, 38, 38, 0.3) 70.05%, rgba(19, 19, 19, 0.5) 99.87%), url('/images/bgHome.png') no-repeat center center / cover",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white max-w-3xl text-left md:ml-16">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Insurance is not just about protecting what you have; it&apos;s
            about securing your future and the peace of mind that comes with it.
          </h1>
          <div className="flex flex-col items-start gap-2 mt-4 w-full md:w-64">
            <select
              onChange={handleChange}
              className="w-full text-black p-2 border rounded"
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
              className="w-full bg-gradient-to-b from-[#D2091D] to-[#880310] hover:bg-red-700 text-white px-6 py-3 font-bold"
            >
              START QUOTE
            </Button>
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
      <section className="w-full bg-gray-800 py-12">
        <div className="container mx-auto overflow-x-auto scrollbar-hide">
          <div className="grid grid-cols-4 md:grid-cols-4 auto-cols-[minmax(250px,1fr)] grid-flow-col gap-8 px-4 min-w-max">
            {insuranceOptions.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center cursor-pointer w-72 group relative hover:scale-105 transition-transform duration-300"
                onClick={() => handleAutoHomeInsurance(item.path)}
              >
                <div className="w-24 h-24 flex items-center justify-center text-white">
                  {React.cloneElement(item.icon, { size: 40 })}
                </div>
                <p className="text-white text-center font-medium text-2xl uppercase tracking-wider">
                  {item.name}
                </p>
                
                {/* Modified hover overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4 text-white backdrop-blur-sm">
                  <p className="text-center text-xs mb-4">
                    {getInsuranceDescription(item.path)}
                  </p>
                  <button className="text-xs font-bold text-white px-6 py-2 rounded flex cursor-pointer items-center justify-center gap-2">
                    LEARN MORE
                    <span className="text-xl text-red-700 flex items-center">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="about" className="w-full px-4 md:px-8 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          About Us
        </h2>
        <div className="border border-red-400 rounded-lg p-6 md:p-10  text-left">
          <p className="text-lg md:text-base leading-relaxed ">
            Insurance Protection Specialists is an independent insurance agency
            located in Flowood, MS, and serving clients across the state with
            homeowners, automobile, recreational, commercial, and life
            insurance.
          </p>
          <p className="text-lg md:text-base leading-relaxed">
            As independent agents, we can shop over 30 carriers, including
            Nationwide, Safeco, Liberty Mutual, MetLife, State Auto, and
            Progressive, to explore solutions for your insurance needs.
          </p>
          <p className="text-lg md:text-base leading-relaxed mb-4">
            IPS is led by a team of risk managers and account managers
            experienced in both personal and business insurance and is owned and
            operated by Chip Jones and Bubba Howell, who have over 50 years of
            combined experience in insurance.
          </p>
          <p className="text-lg md:text-base leading-relaxed">
            Insurance Protection Specialists is an independent insurance agency
            located in Flowood, MS, and serving clients across the state with
            homeowners, automobile, recreational, commercial, and life
            insurance.
          </p>
          <p className="text-lg md:text-base leading-relaxed">
            As independent agents, we can shop over 30 carriers, including
            Nationwide, Safeco, Liberty Mutual, MetLife, State Auto and
            Progressive, to explore solutions for your insurance needs.
          </p>
        </div>
      </section>

     

      {/* <section className="w-full py-12  flex flex-col items-center text-center rounded-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Bonds</h2>
        <div className="max-w-2xl">
          <ul className="mb-6">
            <li className="mb-2">
              <a
                href="https://www.tisins.com/surety-bonds/"
                className="text-blue-600 font-semibold hover:underline hover:text-blue-800 transition-all"
              >
                Surety Bond Division | TIS Insurance Services - Knoxville, TN
              </a>
            </li>
          </ul>

          <p className="font-medium text-lg mb-4">
            Bonds at a high level are broken into:
          </p>

          <ul className="space-y-3">
            <li>
              <a
                href="https://www.tisins.com/contract-bonds/"
                className="text-blue-600 font-semibold hover:underline hover:text-blue-800 transition-all"
              >
                Contract Bonds - Surety Division | TIS Insurance - Knoxville, TN
              </a>
            </li>
            <li>
              <a
                href="https://www.tisins.com/commercial-bonds/"
                className="text-blue-600 font-semibold hover:underline hover:text-blue-800 transition-all"
              >
                Commercial Bonds - Surety Division | TIS Insurance - Knoxville,
                TN
              </a>
            </li>
            <li>
              <a
                href="https://www.tisins.com/notary-bonds/"
                className="text-blue-600 font-semibold hover:underline hover:text-blue-800 transition-all"
              >
                Notary Bonds - Surety Division | TIS Insurance - Knoxville, TN
              </a>
            </li>
          </ul>
        </div>
      </section> */}

      <section className="w-full py-12 overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Top Carriers we have
        </h2>
        <div className="relative w-full flex items-center">
          <motion.div
            className="flex space-x-20 min-w-max"
            animate={{ x: ["0%", "-10%"] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "linear",
            }}
          >
            {[...companies, ...companies].map((company, index) => (
              <img
                key={index}
                src={company.logo}
                alt={company.name}
                className="h-16 md:h-20 object-contain mx-4"
              />
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
