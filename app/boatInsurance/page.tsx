"use client";
import NavSection from "@/components/nav-section/nav";
import React from "react";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";
import Image from "next/image";
import boatInsure from "@/public/images/boatInsure.jpg";
import QuoteButton from "@/components/QuoteButton/QuoteButton";
import Carriers from "@/components/partnerCarriers/carriers";
const inter = Inter({ weight: ["400", "600", "700"], subsets: ["latin"] });

const BoatInsurance = () => {
  return (
    <div className={inter.className}>
      <NavSection />
      <div className="w-full">
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center bg-black">
          <Image
            src={boatInsure.src}
            alt="Boat Insurance"
            layout="fill"
            objectFit="cover"
            className="opacity-70 bg-cover bg-center"
          />
          <QuoteButton />
        </div>
        {/* Information Section */}
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-sm md:text-base">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mt-8 text-red-600 font-semibold font-sans">
              Boat Insurance
            </h2>
            <p className="text-base md:text-lg text-gray-700 mt-3 font-opensans">
              Whether you enjoy fishing trips, cruising on the lake, or adrenaline-filled jet ski rides, Prime Insurance Services provides comprehensive boat and watercraft insurance to keep you covered. We offer customized policies for individuals and families across Minnesota, Wisconsin, Arizona, Florida, Nevada, and Colorado, ensuring you can enjoy the water with peace of mind.
            </p>

            <h2 className="text-xl md:text-2xl mt-4 font-semibold mb-2 font-sans">
              Coverage for All Types of Watercraft
            </h2>
            <p className="mb-4 font-opensans">
              From small fishing boats to luxury yachts, we provide insurance solutions tailored to your specific needs. Our policies cover a variety of watercraft, including:
            </p>
            <ul className="list-disc list-inside mb-4 font-opensans">
              <li>Fishing Boats</li>
              <li>Pontoon Boats</li>
              <li>Jet Skis & WaveRunners</li>
              <li>Sailboats</li>
              <li>Yachts</li>
              <li>Kayaks & Canoes</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-semibold mb-2 font-sans">
              Boat Insurance Coverage Options
            </h2>
            <ul className="list-disc list-inside mb-4 font-opensans">
              <li>Mechanical Breakdown Coverage – Helps cover repair costs due to unexpected mechanical failures</li>
              <li>Full Replacement Value Coverage – Ensures you receive the full value of your boat in case of total loss</li>
              <li>Liability Coverage – Protects against legal and medical expenses if you&apos;re responsible for an accident</li>
              <li>Theft & Vandalism Protection – Covers loss or damage due to theft or vandalism</li>
              <li>Storm & Collision Damage – Helps with repairs or replacement in case of accidents or natural disasters</li>
              <li>Collector Boat Coverage – Specialized insurance for antique and classic boats</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-semibold mb-2 font-sans">
              Why Boat Insurance is Essential
            </h2>
            <ul className="list-disc list-inside mb-4 font-opensans">
              <li>Financial Protection – Covers costly repairs, replacements, and liability claims</li>
              <li>Peace of Mind on the Water – Ensures you&apos;re protected against unforeseen incidents</li>
              <li>Legal Compliance – Many marinas and states require proof of insurance for docking and operation</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-semibold mb-2 font-sans">
              How to Choose the Right Coverage
            </h2>
            <ul className="list-disc list-inside text-base md:text-lg mt-1 font-opensans space-y-1">
              <li>Assess Risks: Consider factors like water conditions, boat type, and usage</li>
              <li>Understand Legal Requirements: Ensure compliance with state and marina regulations</li>
              <li>Balance Coverage & Budget: Get the right protection without overspending</li>
              <li>Consult an Expert: Our team at Prime Insurance Services is here to guide you</li>
            </ul>
          </div>
        </div>
        {/* Form Section */}
        <div>
          <Form />
        </div>
      </div>
        <div>
          <Carriers />
        </div>  
      <Footer />
    </div>
  );
};

export default BoatInsurance;
