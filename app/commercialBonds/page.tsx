'use client';
import NavSection from "@/components/nav-section/nav";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";
import QuoteButton from "@/components/QuoteButton/QuoteButton";
import Carriers from "@/components/partnerCarriers/carriers";
const inter = Inter({ weight: ["400", "600", "700"], subsets: ["latin"] });

const CommercialBonds = () => {
  return (
    <div className={inter.className}>
      <NavSection />
      <div className="w-full">
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center bg-black">
          <Image
            src="https://www.tisins.com/app/uploads/2024/01/Commercial-Bonds-Hero_2280.jpg"
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl mt-8 text-[#11193B] font-semibold font-sans">
              Commercial Bonds
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold mt-2 mb-4 font-sans">
              Ensuring Compliance and Financial Security for Businesses
            </h3>
            <p className="text-[18px] text-[#393939] text-left font-opensans mt-3 font-medium leading-[30px] mb-5">
              A Commercial Bond is a type of surety bond designed to protect third parties, including businesses, 
              clients, and government agencies. Unlike contract bonds used for construction projects, commercial 
              bonds focus on regulatory and licensing requirements, ensuring businesses operate ethically and 
              within the law. Prime Insurance Services provides a range of commercial bond solutions to help 
              businesses maintain compliance and build trust.
            </p>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">How Do Commercial Bonds Work?</h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              A commercial bond involves three key parties:
            </p>
            <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li>
              <span className="font-semibold"> The Principal </span> – The business owner or entity required to obtain the bond.
              </li>
              <li>
               <span className="font-semibold">The Obligee</span>  – The party (often a government agency) that requires the bond to ensure compliance.
              </li>
              <li>
               <span className="font-semibold">The Surety</span>  – The insurance company or bonding company that issues the bond and guarantees payment if a claim is made.
              </li>
            </ul>
            <p className="mb-4">
              When a bonded business fails to meet its obligations, such as violating industry regulations, 
              the obligee can file a claim. The surety company may pay the claim, but the principal remains 
              responsible for repaying the amount.
            </p>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">Benefits of Commercial Bonds</h2>
            <ol className="list-decimal list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li className="mb-2">
                <span className="font-semibold">Builds Trust and Credibility</span> - Having a commercial bond reassures customers and government agencies that a business operates ethically and is financially secure.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Legal Compliance</span> - Many industries and professions require commercial bonds as part of licensing requirements. Without them, businesses cannot legally operate.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Financial Protection</span> - Commercial bonds provide financial security to the obligee in case of non-compliance or unethical business practices.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Competitive Advantage</span> - Being bonded can give businesses an edge over competitors, as customers may prefer to work with bonded companies due to the added financial security.
              </li>
            </ol>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">How to Obtain a Commercial Bond</h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              The process of getting a commercial bond typically involves the following steps:
            </p>
            <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li>
                <span className="font-semibold">Determine the Bond Requirement</span> – Identify the type of bond needed based on industry and government regulations.
              </li>
              <li>
                <span className="font-semibold">Choose a Reputable Surety Provider</span> – Work with Prime Insurance Services to find the best bond solutions.
              </li>
              <li>
                <span className="font-semibold">Submit an Application</span> – Provide details about the business, financial history, and required bond amount.
              </li>
              <li>
                <span className="font-semibold">Undergo a Credit Check</span> – Surety companies assess the applicant&apos;s financial stability before issuing a bond.
              </li>
              <li>
                <span className="font-semibold">Pay the Bond Premium</span> – The cost of the bond depends on factors such as credit score, business history, and bond amount.
              </li>
              <li>
                <span className="font-semibold">Receive the Bond and Stay Compliant</span> – Maintain adherence to regulations to avoid claims.
              </li>
            </ul>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              Get the Right Commercial Bond with Prime Insurance Services
            </h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              At Prime Insurance Services, we specialize in commercial bond solutions that help businesses 
              comply with regulations, protect their reputation, and enhance financial security. Contact us 
              today to get started.
            </p>
          </div>
        </div>
        {/* Form Section */}
        <div>
          <Form  />
        </div>
        {/* <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <h2 className="text-2xl md:text-3xl text-gray-800 font-semibold col-span-full mb-6">Types of Commercial Bonds We Offer</h2>
          
          <button className="relative h-48 w-full bg-gray-800 text-white rounded-lg overflow-hidden group transition-all duration-300 hover:bg-gray-700">
            <div className="absolute inset-0 flex flex-col">
              <div className="flex-1 flex items-center justify-center p-4 transition-all duration-300 group-hover:opacity-0">
                <span className="text-2xl font-semibold">PUBLIC OFFICIAL</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <p className="text-sm text-center">
                  Ensures that elected or appointed public officials perform their duties ethically and in compliance with the law.
                </p>
              </div>
            </div>
          </button>

          <button className="relative h-48 w-full bg-gray-800 text-white rounded-lg overflow-hidden group transition-all duration-300 hover:bg-gray-700">
            <div className="absolute inset-0 flex flex-col">
              <div className="flex-1 flex items-center justify-center p-4 transition-all duration-300 group-hover:opacity-0">
                <span className="text-2xl font-semibold">LICENSE & PERMIT</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <p className="text-sm text-center">
                  Required by government agencies to ensure businesses comply with regulations and licensing requirements.
                </p>
              </div>
            </div>
          </button>

          <button className="relative h-48 w-full bg-gray-800 text-white rounded-lg overflow-hidden group transition-all duration-300 hover:bg-gray-700">
            <div className="absolute inset-0 flex flex-col">
              <div className="flex-1 flex items-center justify-center p-4 transition-all duration-300 group-hover:opacity-0">
                <span className="text-2xl font-semibold">COURT</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <p className="text-sm text-center">
                  Guarantees that individuals involved in legal proceedings fulfill their court-ordered obligations.
                </p>
              </div>
            </div>
          </button>

          <button className="relative h-48 w-full bg-gray-800 text-white rounded-lg overflow-hidden group transition-all duration-300 hover:bg-gray-700">
            <div className="absolute inset-0 flex flex-col">
              <div className="flex-1 flex items-center justify-center p-4 transition-all duration-300 group-hover:opacity-0">
                <span className="text-2xl font-semibold">BUSINESS SERVICE</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <p className="text-sm text-center">
                  Protects clients from financial losses due to employee theft or misconduct in service-based businesses.
                </p>
              </div>
            </div>
          </button>

          <button className="relative h-48 w-full bg-gray-800 text-white rounded-lg overflow-hidden group transition-all duration-300 hover:bg-gray-700">
            <div className="absolute inset-0 flex flex-col">
              <div className="flex-1 flex items-center justify-center p-4 transition-all duration-300 group-hover:opacity-0">
                <span className="text-2xl font-semibold">CONTRACTORS LICENSE</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <p className="text-sm text-center">
                  Ensures contractors adhere to state laws and regulations, protecting clients from substandard work or non-compliance.
                </p>
              </div>
            </div>
          </button>

          <button className="relative h-48 w-full bg-gray-800 text-white rounded-lg overflow-hidden group transition-all duration-300 hover:bg-gray-700">
            <div className="absolute inset-0 flex flex-col">
              <div className="flex-1 flex items-center justify-center p-4 transition-all duration-300 group-hover:opacity-0">
                <span className="text-2xl font-semibold">ERISA</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <p className="text-sm text-center">
                  Protects employee benefit plans from fraud, mismanagement, or dishonest acts by plan administrators.
                </p>
              </div>
            </div>
          </button>

          <button className="relative h-48 w-full bg-gray-800 text-white rounded-lg overflow-hidden group transition-all duration-300 hover:bg-gray-700">
            <div className="absolute inset-0 flex flex-col">
              <div className="flex-1 flex items-center justify-center p-4 transition-all duration-300 group-hover:opacity-0">
                <span className="text-2xl font-semibold">FIDUCIARY</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <p className="text-sm text-center">
                  Ensures that individuals entrusted with managing another person&apos;s assets or estate fulfill their duties responsibly.
                </p>
              </div>
            </div>
          </button>

          <button className="relative h-48 w-full bg-gray-800 text-white rounded-lg overflow-hidden group transition-all duration-300 hover:bg-gray-700">
            <div className="absolute inset-0 flex flex-col">
              <div className="flex-1 flex items-center justify-center p-4 transition-all duration-300 group-hover:opacity-0">
                <span className="text-2xl font-semibold">MISCELLANEOUS</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <p className="text-sm text-center">
                  Covers various obligations not classified under standard bond categories, tailored to specific business or legal requirements.
                </p>
              </div>
            </div>
          </button>
        </div> */}
      </div>
        <div>
          <Carriers />
        </div>
      <Footer />
    </div>
  );  
};

export default CommercialBonds;
