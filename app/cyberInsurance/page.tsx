'use client';
import NavSection from "@/components/nav-section/nav";
import React from "react";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";
import Image from "next/image";
import cyberInsure from '@/public/images/cyberSecurity.jpg';
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
          src={cyberInsure.src}
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
              Cyber and EPLI Insurance
            </h2>
            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              Cyber & Employee Practice Liability Insurance
            </h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium mt-3 leading-[30px] mb-5">
              In today&apos;s digital world, businesses face evolving risks that go beyond traditional challenges. From cyber threats to employee-related legal claims, protecting your business has never been more critical. At Prime Insurance Services, we offer Cyber Liability Insurance and Employee Practice Liability Insurance (EPLI) to safeguard your business from financial and legal repercussions.
            </p>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              Cyber Liability: Protecting Your Business From Data Breaches
            </h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              Cyberattacks are becoming more frequent and costly. Even with strong security measures, cybercriminals continue to find new ways to exploit vulnerabilities. Cyber Liability Insurance helps your business recover from cyber incidents by covering:
            </p>
            <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li>Legal fees and settlements from data breach lawsuits</li>
              <li>Costs of recovering compromised data</li>
              <li>Expenses for repairing computer systems</li>
              <li>Regulatory fines and penalties</li>
            </ul>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              Every business, regardless of industry, is a potential target for cybercrime. Protect your company with Prime Insurance Services.
            </p>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              EPLI: Protecting Your Business From Employee Claims
            </h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              Employees have the right to file claims against businesses for issues such as discrimination, wrongful termination, or harassment. Employee Practice Liability Insurance (EPLI) provides financial protection by covering:
            </p>
            <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li>Attorney fees and legal costs</li>
              <li>Settlements and judgments</li>
              <li>Claims related to discrimination, harassment, or wrongful termination</li>
            </ul>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              With the right EPLI coverage, you can operate your business with confidence, knowing you&apos;re protected against unexpected legal challenges.
            </p>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              How to Choose the Right Coverage?
            </h2>
            <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li>Assess Risks: Identify the unique risks in your industry.</li>
              <li>Legal Compliance: Ensure your business meets mandatory insurance requirements.</li>
              <li>Budget Considerations: Find a balance between affordability and comprehensive protection.</li>
              <li>Expert Guidance: Speak with our insurance specialists to tailor coverage to your needs.</li>
            </ul>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              At Prime Insurance Services, we help businesses navigate complex risks with customized insurance solutions. Contact us today to secure your business against cyber threats and employee claims.
            </p>
          </div>
        </div>
        {/* Form Section */}
        <div>
          <Form  />
        </div>
        <div>
          <Carriers />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BusinessInsurance;
