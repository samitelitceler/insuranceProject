"use client"
import NavSection from "@/components/nav-section/nav";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";
import QuoteButton from "@/components/QuoteButton/QuoteButton";
import { useInView } from '@/hooks/useInView';
import Carriers from "@/components/partnerCarriers/carriers";
const inter = Inter({ weight: ["400", "600", "700"], subsets: ["latin"] });

const ContractBonds = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <div className={inter.className}>
      <NavSection />
      <div className="w-full">
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center bg-black">
          <Image
            src="https://www.tisins.com/app/uploads/2024/01/Contract-Bonds-Hero_2280.jpg"
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
            Contract Bonds
          </h2>
          <p className="text-[18px] text-[#393939] text-left font-opensans mt-3 font-medium leading-[30px] mb-5">
            A Contract Bond is a type of surety bond specifically designed for construction projects. It guarantees that a contractor (the principal) will meet contractual obligations, including project completion and payment to subcontractors and suppliers.
          </p>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">Key Parties Involved in a Contract Bond</h2>
          <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
            <li><span className="font-semibold">Principal</span> – The contractor who is required to obtain the bond.</li>
            <li><span className="font-semibold">Obligee</span> – The project owner that requires the bond.</li>
            <li><span className="font-semibold">Surety</span> – The company that provides the bond and guarantees fulfillment.</li>
          </ul>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">The 3 Cs of Surety: Key Factors in Contract Bond Underwriting</h2>
          <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
            Surety companies evaluate contractors based on three fundamental factors known as the 3 Cs of Surety:
          </p>

          <div className="mb-5">
            <h3 className="font-semibold mb-2">1. Character</h3>
            <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li>Reflects the contractor&apos;s integrity, reliability, and track record.</li>
              <li>Includes past project performance, business ethics, and reputation.</li>
            </ul>

            <h3 className="font-semibold mb-2">2. Capacity</h3>
            <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li>Measures the contractor&apos;s ability to complete projects successfully.</li>
              <li>Includes technical expertise, management experience, and resources.</li>
            </ul>

            <h3 className="font-semibold mb-2">3. Capital</h3>
            <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li>Assesses the contractor&apos;s financial stability and ability to cover costs.</li>
              <li>Includes financial statements, credit history, and cash flow management.</li>
            </ul>
          </div>

          <p className="mb-6">
            Strengthening these three areas enhances a contractor&apos;s ability to secure larger bond programs and win more projects.
          </p>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">Benefits of Contract Bonds</h2>
          <div className="mb-5">
            <h3 className="text-[18px] text-[#393939] font-opensans font-semibold mb-2">1. Protection for Project Owners</h3>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              Contract bonds provide financial security, ensuring that projects are completed as agreed and subcontractors are paid.
            </p>

            <h3 className="text-[18px] text-[#393939] font-opensans font-semibold mb-2">2. Increased Contractor Credibility</h3>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              Having contract bonds demonstrates a contractor&apos;s reliability and financial strength, making them more attractive to project owners.
            </p>

            <h3 className="text-[18px] text-[#393939] font-opensans font-semibold mb-2">3. Compliance with Legal Requirements</h3>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              Many government projects require contract bonds, making them essential for contractors who want to work on public sector projects.
            </p>

            <h3 className="text-[18px] text-[#393939] font-opensans font-semibold mb-2">4. Reduced Financial Risk</h3>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              Contract bonds minimize financial risk for all parties involved, ensuring that contractors meet obligations and subcontractors are compensated.
            </p>
          </div>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">How to Obtain a Contract Bond</h2>
          <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
            Contractors seeking a contract bond must go through a thorough application and underwriting process:
          </p>
          <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
            <li>Assess Bond Requirements – Determine the type and amount of bond needed for the project.</li>
            <li>Choose a Reputable Surety Provider – Work with a trusted surety company experienced in construction bonds.</li>
            <li>Submit an Application – Provide business and financial details, including past project history.</li>
            <li>Undergo Financial and Background Review – The surety evaluates the contractor&apos;s financial strength, experience, and reputation.</li>
            <li>Pay the Bond Premium – The cost of the bond varies based on the contractor&apos;s credit, financial stability, and project size.</li>
            <li>Receive and Maintain the Bond – Once issued, the contractor must comply with all bond conditions to avoid claims.</li>
          </ul>
        </div>
        </div>
      
          {/* Bond Types Section */}
        <div className="p-4 md:p-8" ref={ref}>
          <h1 className="text-[48px] text-[#002B5B] font-bold text-center mb-12">CONTRACT BOND TYPES</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Bid Bond",
                delay: "0.2s",
                description: "Assures that the contractor's bid was submitted in good faith, that the contractor intends to enter into the contract at the price bid, and that the contractor will provide the required performance and payment bonds."
              },
              {
                title: "Performance Bond",
                delay: "0.4s",
                description: "Protects the owner from financial loss in the event that the contractor fails to perform the contract in accordance with its terms and conditions. Most performance bonds cover the workmanship of the project for one year after completion."
              },
              {
                title: "Payment Bond",
                delay: "0.6s",
                description: "Protects certain specified tiers of laborers, subcontractors, and material suppliers against nonpayment by the contractor. Generally, these claimants may seek recovery directly from the surety company under the payment bond. (Sometimes called a labor and material bond.)"
              }
            ].map((bond, index) => (
              <div
                key={index}
                className={`${isInView ? 'animate-slide-in' : 'opacity-0 translate-x-[-100%]'} hover:shadow-lg transition-shadow duration-300`}
                style={{ animationDelay: bond.delay }}
              >
                <div className="flex flex-col items-start p-6">
                  <div className="self-center mb-4"></div>
                  <h3 className="text-[#0067B2] text-2xl font-semibold mb-4">{bond.title}</h3>
                  <p className="text-[#393939] font-opensans text-[18px] leading-[30px]">
                    {bond.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

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

export default ContractBonds;
