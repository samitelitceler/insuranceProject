'use client';
import React from "react";
import Link from "next/link";
import NavSection from "@/components/nav-section/nav";
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
import Footer from "@/components/footer/Footer";
import Carriers from "@/components/partnerCarriers/carriers";
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

function CompareQuotes() {
  return (
    <>
      <NavSection />
      <div className="bg-gray-100 p-8">
        <div className="container mx-auto">
          {/* Heading */}
          <div className="bg-[#dfdfdf] p-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-red-600 font-semibold font-sans">Insurance Quotes</h1>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px]">Home » Insurance Quotes</p>
          </div>

          {/* Subheading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-red-600 font-semibold font-sans text-center mt-8">
            Get Insurance Quotes
          </h2>

          {/* Insurance Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 max-w-4xl mx-auto">
            {insuranceOptions.map((option, index) => (
              <Link key={index} href={option.path} passHref>
                <div className="flex items-center bg-gray-800 text-white p-4 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300">
                  <span className="text-2xl mr-3">{option.icon}</span>
                  <span className="text-[18px] font-opensans font-medium">{option.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Carriers />
      </div>
      <Footer />
    </>
  );
}

export default CompareQuotes;
