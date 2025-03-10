"use client"

import Footer from "@/components/footer/Footer";
import NavSection from "@/components/nav-section/nav";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
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
import Carriers from "@/components/partnerCarriers/carriers";
function ContactCarrier() {
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

  const carriers = [
    {
      name: "Allstate",
      customerService: "800-222-4357",
      claims: "#",
      website: "#",
      logo: "/images/Allstate.png",
    },
    {
      name: "Foremost",
      customerService: "800-282-1446",
      claims: "#",
      website: "#",
      logo: "/images/Foremost.jpeg",
    },
    {
      name: "Heritage",
      customerService: "866-274-8765",
      claims: "#",
      website: "#",
      logo: "/images/heritageLogo.png",
    },
    {
      name: "Liberty Mutual",
      customerService: "888-252-4626",
      claims: "#",
      website: "#",
      logo: "https://www.anchorins.com/img/carriers/liberty-mutual.png",
    },
    {
      name: "MetLife",
      customerService: "855-663-8551",
      claims: "#",
      website: "#",
      logo: "https://www.anchorins.com/img/carriers/metlife.png",
    },
    {
      name: "AAA",
      customerService: "800-252-4670",
      claims: "#",
      website: "#",
      logo: "https://www.anchorins.com/img/carriers/aaa.png",
    },
    {
      name: "National General",
      customerService: "800-252-4670",
      claims: "#",
      website: "#",
      logo: "/images/NationalGenral.png",
    },
    {
      name: "National wide",
      customerService: "800-252-4670",
      claims: "#",
      website: "#",
      logo: "https://www.anchorins.com/img/carriers/allied.png",
    },
    {
      name: "Safeco",
      customerService: "800-252-4670",
      claims: "#",
      website: "#",
      logo: "https://www.anchorins.com/img/carriers/safeco.png",
    },
    {
      name: "State Auto",
      customerService: "800-252-4670",
      claims: "#",
      website: "#",
      logo: "https://www.anchorins.com/img/carriers/state-auto.png",
    },
    {
      name: "The Hartford",
      customerService: "800-252-4670",
      claims: "#",
      website: "#",
      logo: "https://www.anchorins.com/img/carriers/hartford.png",
    },
    {
      name: "Travelers",
      customerService: "800-252-4670",
      claims: "#",
      website: "#",
      logo: "https://www.anchorins.com/img/carriers/travelers.png",
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

  return (
    <>
      <NavSection />
      <section
        className="relative w-full h-[60vh] flex items-center justify-start bg-cover bg-center px-4 md:px-8"
        style={{
          background:
            "linear-gradient(270.16deg, rgba(217, 217, 217, 0.05) 0.15%, rgba(39, 38, 38, 0.3) 70.05%, rgba(19, 19, 19, 0.5) 99.87%), url('https://www.anchorins.com/img/featured-contact-your-carrier.jpg') no-repeat center center / cover",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white max-w-3xl text-left ml-6 md:ml-16">
          <h1 className="text-2xl md:text-6xl font-bold mb-4">
            Get a Quote Instantly
          </h1>
          <p className="text-4xl">Compare your unique insurance quotes
          online via our comparative quoting form.</p>
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
              className="w-full bg-gradient-to-b from-[#D2091D] to-[#880310] hover:bg-red-700 text-white text-2xl px-6 py-3"
            >
              Quote it!
            </Button>
          </div>
        </div>
      </section>
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="container mx-auto">
          {/* Heading */}
          <div className="bg-[#dfdfdf] p-4">
            <h1 className="text-4xl font-bold text-gray-800 text-left">
              Contact Your Carrier
            </h1>
            <p className="text-left text-gray-600 mt-2">
              Home » Contact Your Carrier
            </p>
          </div>

          {/* Subheading */}
          <h2 className="text-4xl font-semibold text-gray-800 text-left mt-8">
          Contact Your Carrier
          </h2>
          <h2 className="text-2xl font-semibold text-gray-800 text-left mt-8">
          Carriers
          </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-2 lg:grid-cols-3 gap-6">
            {carriers.map((carrier, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition"
              >
                <Image
                  src={carrier.logo}
                  alt={carrier.name}
                  width={200}
                  height={100}
                  className="mb-4"
                />
                <h2 className="text-2xl font-semibold text-[#D2091D]">{carrier.name}</h2>
                <p className="text-gray-700 mt-2">
                  <strong>Customer Service:</strong> {carrier.customerService}
                </p>
                <div className="flex gap-3 mt-4">
                  <a href={carrier.claims} className="bg-[#4a7896] text-white px-4 py-2 rounded-md">
                    Claims
                  </a>
                  <a href={carrier.website} className="bg-[#4a7896] text-white px-4 py-2 rounded-md">
                    Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Carriers />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactCarrier;
