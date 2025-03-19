'use client';
import React from "react";
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
  const handleInsuranceClick = (path: string) => {
    const ezlynxUrl = "http://sgt2.ezlynx.com/ls/click?upn=u001.rm8aNjauuBJWvFaVyKUmk3JQhrODDXZR4jPVn39fXtGpMjwgsQbikcptGOdhdhl-2B6sFik-2B89MlNq8WCrXWmnPjyjg4wENAuujAOVlzdKjLzTd0JdxqJloaz2-2BgzW4OLaDU5-_4uPN2jI8bTL0Cws4JGJkHF5x95e04t-2BUCNzi0ZHkQsgXtNc-2FwytgmGD-2Bdm-2BbApD3LdGQabJfRPsnZs1T7A-2B52CwEPMNoFiV8jrfhHrZN4gOdt3thkHr-2FmpIJBA42ojpXW0F4A1PXDzcbcvqQlsWcduJr5gI1hnx2VYZ-2BQ05VZa39R4UaMqT3KoKhucMnCv-2BGwNHLDHCafSXzMimT8xT11LoTCyeVH5IPa8V41duTtuc-3D";
    
    if (path === 'homeinsurance' || path === 'autoinsurance') {
      window.open(ezlynxUrl, '_blank');
    } else {
      window.location.href = `/${path}`;
    }
  };

  return (
    <>
      <NavSection />
      <div className="px-4 md:px-8 lg:px-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          {/* Heading */}
          <div className="mt-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#11193B] font-semibold font-sans">Insurance Quotes</h1>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px]">Home » Insurance Quotes</p>
          </div>

          {/* Subheading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#11193B] font-semibold font-sans text-center mt-8">
            Get Insurance Quotes
          </h2>

          {/* Insurance Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 max-w-4xl mx-auto">
            {insuranceOptions.map((option, index) => (
              <div
                key={index}
                onClick={() => handleInsuranceClick(option.path)}
                className="flex items-center bg-gray-800 text-white p-4 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300"
              >
                <span className="text-2xl mr-3">{option.icon}</span>
                <span className="text-[18px] font-opensans font-medium">{option.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Carriers />
      </div>
      <Footer />
    </>
  );
}

export default CompareQuotes;
