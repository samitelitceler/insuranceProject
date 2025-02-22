"use client";

import Footer from "@/components/footer/Footer";
import NavSection from "@/components/nav-section/nav";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
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

function ContactUs() {
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
            "linear-gradient(270.16deg, rgba(217, 217, 217, 0.05) 0.15%, rgba(39, 38, 38, 0.3) 70.05%, rgba(19, 19, 19, 0.5) 99.87%), url('https://www.anchorins.com/img/featured-contact-us.jpg') no-repeat center center / cover",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white max-w-3xl text-left ml-6 md:ml-16">
          <h1 className="text-2xl md:text-6xl font-bold mb-4">
            Get a Quote Instantly
          </h1>
          <p className="text-4xl">
            Compare your unique insurance quotes online via our comparative
            quoting form.
          </p>
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
              Contact Us
            </h1>
            <p className="text-left text-gray-600 mt-2">Home » Contact Us</p>
          </div>

          {/* Subheading */}
          <h2 className="text-5xl font-semibold text-gray-800 text-left mt-8">
            Contact Prime Insurance Agency
          </h2>
          <div className="md:mt-8 max-w-3xl">
            {/* Contact Information */}
            <h2 className="text-2xl font-bold text-gray-900">
              Prime Insurance Agency
            </h2>
            <p className="mt-2 text-gray-700">
              3440 Toringdon Way,{" "}
              <a href="#" className="text-blue-500 underline">
                Suite 205
              </a>
              <br />
              <a href="#" className="text-blue-500 underline">
                Office 254, Charlotte NC 28277
              </a>
            </p>
            <p className="text-gray-700 mt-1">Phone: 9802979827</p>
            <p className="text-gray-700">
              Email:{" "}
              <a
                href="mailto:anchor@anchorins.com"
                className="text-blue-500 underline"
              >
                info@primeinsurancellc.com
              </a>
            </p>

            <div className="w-full h-[400px] mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.536614201292!2d-80.84008732386392!3d35.06206997297264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541ff03c8d47df%3A0x4eaf6b4dfb3018ff!2s3440%20Toringdon%20Way%2C%20Charlotte%2C%20NC%2028277%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000"
                className="w-full h-full rounded-lg border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Hours of Operation */}
            {/* <h3 className="mt-6 text-xl font-bold text-gray-900">
            Hours of Operation:
          </h3>
          <p className="text-gray-700">Mon-Thur 8:00-4:30</p>
          <p className="text-gray-700">Friday 8:00-3:00</p> */}

            {/* Agents Section */}
            {/* <h3 className="mt-6 text-xl font-bold text-gray-900">Agents</h3>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <p className="text-gray-900">Shawn Lappen</p>
            <a
              href="mailto:slappen@anchorins.com"
              className="text-blue-500 underline"
            >
              slappen@anchorins.com
            </a>

            <p className="text-gray-900">Tom Johnson</p>
            <a
              href="mailto:tjohnson@anchorins.com"
              className="text-blue-500 underline"
            >
              tjohnson@anchorins.com
            </a>

            <p className="text-gray-900">Michelle Caron</p>
            <a
              href="mailto:michelle@anchorins.com"
              className="text-blue-500 underline"
            >
              michelle@anchorins.com
            </a>
          </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
