"use client";
import React from "react";
import NavSection from "@/components/nav-section/nav";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";
import Image from "next/image";
import transportational from "@/public/images/TransportationalInsure.jpg";
import QuoteButton from "@/components/QuoteButton/QuoteButton";
import Carriers from "@/components/partnerCarriers/carriers";
const inter = Inter({ weight: ["400", "600", "700"], subsets: ["latin"] });

const TransportationalInsurance = () => {

  return (
    <div className={inter.className}>
      <NavSection/>
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center bg-black">
        <Image
          src={transportational.src}
          alt="Transportational Insurance"
          fill
          className="opacity-70 object-cover"
        />
        <QuoteButton/>
      </div>
      {/* Information Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-sm md:text-base">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mt-8 text-[#11193B] font-semibold font-sans">
            Transportation Insurance
          </h2>
          <h3 className="text-xl mt-4 font-semibold text-[#393939]">
            Comprehensive Protection for Your Business on the Move
          </h3>
          <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5 mt-4">
            Running a transportation business comes with unique risks, from vehicle accidents to cargo damage and liability claims. Prime Insurance Services offers Transportation Insurance solutions designed to protect businesses involved in trucking, delivery services, logistics, and other commercial transportation activities.
          </p>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
            Types of Transportation Insurance
          </h2>
          <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
            <li>Commercial Auto Insurance – Covers business-owned vehicles for accidents, damage, and liability.</li>
            <li>Cargo Insurance – Protects transported goods from theft, loss, or damage during transit.</li>
            <li>General Liability Insurance – Covers legal expenses if your business is sued for injuries or property damage.</li>
            <li>Workers&apos; Compensation Insurance – Provides coverage for employees injured on the job.</li>
            <li>Business Interruption Insurance – Compensates for lost income if operations are halted due to covered events.</li>
            <li>Professional Liability Insurance – Protects against claims of negligence or service errors.</li>
            <li>Cyber Liability Insurance – Covers losses from cyberattacks and data breaches affecting transportation businesses.</li>
            <li>Business Owner&apos;s Policy (BOP) – A bundled policy combining essential coverages for small transportation businesses.</li>
          </ul>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
            Why Transportation Insurance is Essential
          </h2>
          <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
            <li>Financial Protection – Covers costs related to accidents, vehicle repairs, and cargo losses.</li>
            <li>Regulatory Compliance – Many transportation businesses are required by law to carry specific insurance policies.</li>
            <li>Reputation & Trust – Ensuring proper coverage reassures clients, partners, and customers of your reliability.</li>
            <li>Employee & Asset Protection – Keeps your workforce and business vehicles secure.</li>
          </ul>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
            How to Choose the Right Coverage
          </h2>
          <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
            <li>Assess Your Risks: Identify potential hazards related to your industry and business activities.</li>
            <li>Understand Legal Requirements: Ensure compliance with federal and state insurance regulations.</li>
            <li>Find the Right Balance: Choose a policy that offers adequate coverage without exceeding your budget.</li>
            <li>Consult an Expert: Our team at Prime Insurance Services can help tailor coverage to fit your business needs.</li>
          </ul>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
            Managing Your Business Insurance
          </h2>
          <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
            <li>Review Annually: Insurance needs change, so regular policy reviews help maintain proper coverage.</li>
            <li>Bundle Policies: Combining multiple coverages under one provider can offer cost savings.</li>
            <li>Implement Risk Management Practices: Proactive safety measures can reduce claims and insurance costs.</li>
          </ul>
          
          <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5 mt-4">
            At Prime Insurance Services, we help transportation businesses stay protected against the unexpected. Get in touch today to secure your coverage and keep your operations running smoothly.
          </p>
        </div>
      </div>
      {/* Form Section */}
      <div>
          <Form  />
        </div>
    </div>
        <div>
          <Carriers />
        </div>
    <Footer/>
    </div>
  );
};

export default TransportationalInsurance;
