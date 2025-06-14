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

const NotaryBonds = () => {
  return (
    <div className={inter.className}>
      <NavSection />
      <div className="w-full">
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center bg-black">
          <Image
            src="https://www.tisins.com/app/uploads/2024/01/Notary-Bonds-Hero_2280.jpg"
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
              Notary Bonds
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold mt-4 mb-4 font-sans">
              Protecting the Public and Ensuring Notary Accountability
            </h3>
            <p className="text-[18px] text-[#393939] text-left font-opensans mt-3 font-medium leading-[30px] mb-5">
              A Notary Bond is a type of surety bond designed to protect the public from financial losses caused by errors, 
              negligence, or misconduct by a Notary Public. If a notary fails to follow legal procedures, whether unintentionally 
              or fraudulently, an affected party can file a claim. While the surety company may compensate the injured party, 
              the notary is ultimately responsible for reimbursing the surety.
            </p>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              How Notary Bonds Work
            </h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              A Notary Bond involves three key parties:
            </p>
            <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li><span className="font-semibold">Principal</span> – The Notary Public who must obtain the bond.</li>
              <li><span className="font-semibold">Obligee</span> – The government agency requiring the bond as part of the notary licensing process.</li>
              <li><span className="font-semibold">Surety</span> – The company that issues the bond and guarantees payment for valid claims.</li>
            </ul>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              Unlike traditional insurance, a Notary Bond does not protect the notary—it safeguards the public. If a notary makes 
              an error or commits fraud, an injured party can file a claim. If the claim is validated, the surety company may cover 
              the financial damages, but the notary is legally required to repay the surety for any paid claims.
            </p>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              Why Are Notary Bonds Required?
            </h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              Notary Bonds ensure that Notaries Public uphold their legal responsibilities and protect the public 
              from potential losses due to mistakes or misconduct. These bonds serve as a safeguard in transactions 
              where notarization is critical, such as:
            </p>
            <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li>Real estate transactions</li>
              <li>Legal affidavits and sworn statements</li>
              <li>Power of attorney documents</li>
              <li>Loan and financial agreements</li>
            </ul>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              Without a Notary Bond, individuals affected by a notary&apos;s negligence or fraud would have limited 
              options for financial recovery.
            </p>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              Secure Your Notary Bond with Prime Insurance Services
            </h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              At Prime Insurance Services, we provide affordable and reliable Notary Bonds to ensure compliance with state 
              regulations and public protection. Contact us today to obtain your Notary Bond quickly and easily.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div>
          <Form  />
        </div>

        {/* Bond Types Section */}
        {/* <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <h2 className="text-2xl md:text-3xl text-gray-800 font-semibold col-span-full mb-6">Types of Notary Bonds We Offer</h2>
          
          <button className="relative h-48 w-full bg-gray-800 text-white rounded-lg overflow-hidden group transition-all duration-300 hover:bg-gray-700">
            <div className="absolute inset-0 flex flex-col">
              <div className="flex-1 flex items-center justify-center p-4 transition-all duration-300 group-hover:opacity-0">
                <span className="text-2xl font-semibold">TRADITIONAL NOTARY BOND</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <p className="text-sm text-center">
                  A basic surety bond required by many states to ensure notaries perform their duties ethically and lawfully.
                </p>
              </div>
            </div>
          </button>

          <button className="relative h-48 w-full bg-gray-800 text-white rounded-lg overflow-hidden group transition-all duration-300 hover:bg-gray-700">
            <div className="absolute inset-0 flex flex-col">
              <div className="flex-1 flex items-center justify-center p-4 transition-all duration-300 group-hover:opacity-0">
                <span className="text-2xl font-semibold">ERRORS & OMISSIONS</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <p className="text-sm text-center">
                  Provides additional protection to notaries against claims resulting from mistakes or negligence in their duties.
                </p>
              </div>
            </div>
          </button>

          <button className="relative h-48 w-full bg-gray-800 text-white rounded-lg overflow-hidden group transition-all duration-300 hover:bg-gray-700">
            <div className="absolute inset-0 flex flex-col">
              <div className="flex-1 flex items-center justify-center p-4 transition-all duration-300 group-hover:opacity-0">
                <span className="text-2xl font-semibold">ELECTRONIC NOTARY BOND</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <p className="text-sm text-center">
                  Specifically for notaries who perform electronic notarizations, ensuring compliance with digital notary laws.
                </p>
              </div>
            </div>
          </button>

          <button className="relative h-48 w-full bg-gray-800 text-white rounded-lg overflow-hidden group transition-all duration-300 hover:bg-gray-700">
            <div className="absolute inset-0 flex flex-col">
              <div className="flex-1 flex items-center justify-center p-4 transition-all duration-300 group-hover:opacity-0">
                <span className="text-2xl font-semibold">REMOTE ONLINE NOTARY</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <p className="text-sm text-center">
                  Required in states that allow remote notarization, covering notarial acts conducted online.
                </p>
              </div>
            </div>
          </button>

          <button className="relative h-48 w-full bg-gray-800 text-white rounded-lg overflow-hidden group transition-all duration-300 hover:bg-gray-700">
            <div className="absolute inset-0 flex flex-col">
              <div className="flex-1 flex items-center justify-center p-4 transition-all duration-300 group-hover:opacity-0">
                <span className="text-2xl font-semibold">NOTARY SIGNING AGENT</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <p className="text-sm text-center">
                  Additional coverage for notaries handling loan document signings, protecting against fraud or errors in real estate transactions.
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

export default NotaryBonds;
