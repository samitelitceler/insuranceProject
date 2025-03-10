"use client";

import NavSection from "@/components/nav-section/nav";
import Footer from "@/components/footer/Footer";
import { Inter } from "next/font/google";
import Form from "@/components/form/Form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
const inter = Inter({ weight: ["400", "600", "700"], subsets: ["latin"] });
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


export default function About() {
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

    

  return (
    <div className={inter.className}>
      <NavSection />
      
      {/* Hero Section */}
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
             About Us
            </h1>
            <div className="flex flex-col items-start gap-2 mt-4 w-full md:w-64">
              <select
                onChange={handleChange}
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

      {/* About Content Section */}
      <section className="w-full px-4 md:px-8 py-16">
        <div className="max-w-4xl mx-auto">
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

          {/* Contact Form */}
          <div>
            <Form />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}