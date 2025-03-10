'use client';
import NavSection from "@/components/nav-section/nav";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";
import businessInsure from "@/public/images/carsImage.jpg"
import QuoteButton from "@/components/QuoteButton/QuoteButton";
import Carriers from "@/components/partnerCarriers/carriers";
const inter = Inter({ weight: ["400", "600", "700"], subsets: ["latin"] });

const BusinessInsurance = () => {
  return (
    <div className={inter.className}>
      <NavSection />
      <div className="w-full">
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center bg-black">
          <Image
            src={businessInsure.src}
            alt="Business Insurance"
            layout="fill"
            objectFit="cover"
            className="opacity-70 bg-cover bg-center"
          />
          <QuoteButton/>
        </div>
        {/* Information Section */}
        <div className="p-4 md:p-8 text-sm md:text-base">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-red-600 font-semibold font-sans">
            Business Insurance
          </h2>
          <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
            Business insurance is a type of coverage that protects businesses
            from financial losses due to various risks, such as property damage,
            liability claims, employee-related risks, and more.
          </p>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">Types of Business Insurance</h2>
          <ul className="list-decimal list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
            <li className="text-left">
              General Liability Insurance – Covers legal expenses if your
              business is sued for injury, property damage, or advertising
              mistakes.
            </li>
            <li>
              Property Insurance – Protects your business&apos;s physical assets
              like buildings, equipment, and inventory against damage or theft.
            </li>
            <li>
              Business Interruption Insurance – Compensates for lost income if
              your business is unable to operate due to events like natural
              disasters.
            </li>
            <li>
              Workers&apos; Compensation Insurance – Covers medical expenses and
              lost wages for employees injured on the job.
            </li>
            <li>
              Professional Liability Insurance (Errors and Omissions) – Protects
              against claims of negligence, mistakes, or failure to perform
              professional services.
            </li>
            <li>
              Product Liability Insurance – Protects against claims related to
              product defects that cause injury or damage.
            </li>
            <li>
              Commercial Auto Insurance – Covers vehicles used for business
              purposes.
            </li>
            <li>
              Cyber Liability Insurance – Protects against data breaches and
              cyberattacks.
            </li>
            <li>
              Business Owner&apos;s Policy (BOP) – A bundle of several types of
              insurance (like general liability and property insurance) tailored
              for small businesses.
            </li>
          </ul>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
            Why is Business Insurance Important?
          </h2>
          <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
            <li className="text-left">
              Financial Protection: Helps cover the costs of unexpected events
              like lawsuits, natural disasters, or accidents.
            </li>
            <li>
              Legal Requirement: Certain types of insurance, like workers&apos;
              compensation, are legally required in many places.
            </li>
            <li>
              Builds Credibility: Having insurance builds trust with clients and
              customers.
            </li>
            <li>
              Employee Protection: Ensures the safety and well-being of
              employees with benefits like health coverage and workers&apos;
              compensation.
            </li>
          </ul>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
            How to Choose the Right Insurance?
          </h2>
          <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
            <li className="text-left">
              Assess Risks: Evaluate the specific risks associated with your
              industry and business activities.
            </li>
            <li>
              Legal Requirements: Check the mandatory insurance requirements in
              your region or industry.
            </li>
            <li>
              Budget Considerations: Balance coverage needs with affordability.
            </li>
            <li>
              Consult an Agent: Seek professional advice to tailor coverage to
              your business needs.
            </li>
          </ul>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
            Tips for Managing Business Insurance
          </h2>
          <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
            <li className="text-left">
              Review Annually: Business needs change, so reviewing policies
              annually ensures adequate coverage.
            </li>
            <li>
              Combine Policies: Bundling multiple coverages under one provider
              may offer discounts.
            </li>
            <li>
              Risk Management: Implement safety practices to minimize risks and
              reduce insurance costs.
            </li>
          </ul>
        </div>

        {/* Form Section */}
        <div>
          <Form  />
        </div>
      </div>
        <div>
          <Carriers />
        </div>
      <Footer />
    </div>
  );
};

export default BusinessInsurance;
