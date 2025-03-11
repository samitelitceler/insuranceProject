"use client";
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
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-sm md:text-base">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mt-8 text-red-600 font-semibold font-sans">
              Protect Your Business with Prime Insurance Services
            </h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans mt-3 font-medium leading-[30px] mb-5">
              Running a business comes with risks, but the right business insurance can safeguard your company from financial losses due to unexpected events. Whether it&apos;s property damage, liability claims, or employee-related risks, having the right coverage ensures your business stays secure and operational.
            </p>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">Types of Business Insurance</h2>
            <ul className="list-decimal list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li className="text-left">
                General Liability Insurance – Covers legal expenses if your business is sued for injuries, property damage, or advertising-related claims.
              </li>
              <li>
                Property Insurance – Protects physical assets such as buildings, equipment, and inventory from damage or theft.
              </li>
              <li>
                Business Interruption Insurance – Provides financial support if your business operations are disrupted due to unforeseen events like natural disasters.
              </li>
              <li>
                Workers&apos; Compensation Insurance – Covers medical expenses and lost wages for employees injured on the job.
              </li>
              <li>
                Professional Liability Insurance (Errors and Omissions) – Protects against claims of negligence, mistakes, or service-related failures.
              </li>
              <li>
                Product Liability Insurance – Covers claims arising from product defects that cause injury or damage.
              </li>
              <li>
                Commercial Auto Insurance – Provides coverage for vehicles used for business operations.
              </li>
              <li>
                Cyber Liability Insurance – Protects against financial losses caused by data breaches, cyberattacks, and identity theft.
              </li>
              <li>
                Business Owner&apos;s Policy (BOP) – A bundled insurance package that combines general liability, property insurance, and other coverages suited for small businesses.
              </li>
            </ul>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              Why Business Insurance is Essential
            </h2>
            <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li className="text-left">
                Financial Protection – Helps cover the costs of unexpected lawsuits, property damage, and business disruptions.
              </li>
              <li>
                Legal Compliance – Some types of coverage, such as workers&apos; compensation, are required by law.
              </li>
              <li>
                Reputation & Credibility – Having insurance reassures clients, customers, and partners that your business is reliable and prepared for risks.
              </li>
              <li>
                Employee Security – Provides essential benefits like workers&apos; compensation and health coverage to protect your workforce.
              </li>
            </ul>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              Choosing the Right Business Insurance
            </h2>
            <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li className="text-left">
                Identify Potential Risks – Evaluate the specific threats your industry and business operations face.
              </li>
              <li>
                Understand Legal Requirements – Check which types of insurance are mandatory in your location or industry.
              </li>
              <li>
                Consider Budget & Coverage Needs – Balance affordability with comprehensive protection.
              </li>
              <li>
                Seek Professional Guidance – Consult with our experts to customize a policy that fits your business needs.
              </li>
            </ul>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              Best Practices for Managing Business Insurance
            </h2>
            <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li className="text-left">
                Review Policies Annually – Business needs evolve, so regularly updating coverage ensures continued protection.
              </li>
              <li>
                Bundle Policies – Combining multiple coverages under one provider can reduce costs.
              </li>
              <li>
                Implement Risk Management – Adopting safety protocols can help minimize risks and lower insurance premiums.
              </li>
            </ul>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              Secure Your Business Today
            </h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans mt-3 font-medium leading-[30px] mb-5">
              At Prime Insurance Services, we understand that every business is unique. Our team is committed to helping you find the right coverage to protect your operations, employees, and financial future. Contact us today to explore the best insurance options for your business.
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
      <Footer />
    </div>
  );
};

export default BusinessInsurance;
