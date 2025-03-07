import NavSection from "@/components/nav-section/nav";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";
import QuoteButton from "@/components/QuoteButton/QuoteButton";
const inter = Inter({ weight: ["400", "600", "700"], subsets: ["latin"] });

const ContractBonds = () => {
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
        <div className="p-4 md:p-8 text-sm md:text-base">
          <h2 className="text-2xl md:text-3xl text-gray-800 font-semibold">Contract Bonds</h2>
          <p className="mb-4 mt-4">
            A Contract Bond is a type of surety bond specifically designed for construction projects. It guarantees that a contractor (the principal) will meet contractual obligations, including project completion and payment to subcontractors and suppliers. If the contractor fails to fulfill their responsibilities, the bond ensures financial compensation for the affected parties.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mb-2">Key Parties Involved in a Contract Bond</h2>
          <ul className="list-disc list-inside mb-4">
            <li><span className="font-semibold"> Principal </span> – The contractor who is required to obtain the bond.</li>
            <li><span className="font-semibold"> Obligee </span> – The project owner (government agency, private company, or developer) that requires the bond.</li>
            <li><span className="font-semibold"> Surety </span> – The company that provides the bond and guarantees that the contractor will fulfill their obligations.</li>
          </ul>
          <p className="mb-4">
            In case of a default, the surety may step in to complete the project or compensate the obligee, but the contractor is ultimately responsible for repaying the surety for any covered claims.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mb-2">The 3 Cs of Surety: Key Factors in Contract Bond Underwriting</h2>
          <p className="mb-4">
            Surety companies evaluate contractors based on three fundamental factors known as the 3 Cs of Surety:
          </p>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">1. Character</h3>
            <ul className="list-disc list-inside ml-4 mb-2">
              <li>Reflects the contractor&apos;s integrity, reliability, and track record.</li>
              <li>Includes past project performance, business ethics, and reputation in the industry.</li>
            </ul>

            <h3 className="font-semibold mb-2">2. Capacity</h3>
            <ul className="list-disc list-inside ml-4 mb-2">
              <li>Measures the contractor&apos;s ability to complete projects successfully.</li>
              <li>Includes technical expertise, management experience, and available resources.</li>
            </ul>

            <h3 className="font-semibold mb-2">3. Capital</h3>
            <ul className="list-disc list-inside ml-4 mb-2">
              <li>Assesses the contractor&apos;s financial stability and ability to cover project costs.</li>
              <li>Includes financial statements, credit history, and cash flow management.</li>
            </ul>
          </div>

          <p className="mb-6">
            Strengthening these three areas enhances a contractor&apos;s ability to secure larger bond programs and win more projects.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mb-4">Benefits of Contract Bonds</h2>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">1. Protection for Project Owners</h3>
            <p className="mb-3">
              Contract bonds provide financial security, ensuring that projects are completed as agreed and subcontractors are paid.
            </p>

            <h3 className="font-semibold mb-2">2. Increased Contractor Credibility</h3>
            <p className="mb-3">
              Having contract bonds demonstrates a contractor&apos;s reliability and financial strength, making them more attractive to project owners.
            </p>

            <h3 className="font-semibold mb-2">3. Compliance with Legal Requirements</h3>
            <p className="mb-3">
              Many government projects require contract bonds, making them essential for contractors who want to work on public sector projects.
            </p>

            <h3 className="font-semibold mb-2">4. Reduced Financial Risk</h3>
            <p className="mb-3">
              Contract bonds minimize financial risk for all parties involved, ensuring that contractors meet obligations and subcontractors are compensated.
            </p>
          </div>

          <h2 className="text-xl md:text-2xl font-semibold mb-4">How to Obtain a Contract Bond</h2>
          <p className="mb-4">
            Contractors seeking a contract bond must go through a thorough application and underwriting process:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>Assess Bond Requirements – Determine the type and amount of bond needed for the project.</li>
            <li>Choose a Reputable Surety Provider – Work with a trusted surety company experienced in construction bonds.</li>
            <li>Submit an Application – Provide business and financial details, including past project history.</li>
            <li>Undergo Financial and Background Review – The surety evaluates the contractor&apos;s financial strength, experience, and reputation.</li>
            <li>Pay the Bond Premium – The cost of the bond varies based on the contractor&apos;s credit, financial stability, and project size.</li>
            <li>Receive and Maintain the Bond – Once issued, the contractor must comply with all bond conditions to avoid claims.</li>
          </ul>
        </div>

        {/* Form Section */}
        <div>
          <Form  />
        </div>

        {/* Bond Types Section */}
        <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <h2 className="text-2xl md:text-3xl text-gray-800 font-semibold col-span-full mb-6">Types of Contract Bonds We Offer</h2>
          
          <button className="relative h-48 w-full bg-gray-800 text-white rounded-lg overflow-hidden group transition-all duration-300 hover:bg-gray-700">
            <div className="absolute inset-0 flex flex-col">
              <div className="flex-1 flex items-center justify-center p-4 transition-all duration-300 group-hover:opacity-0">
                <span className="text-2xl font-semibold">BID BOND</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <p className="text-sm text-center">
                  Ensures that contractors submit serious bids and commit to the contract if awarded the project.
                </p>
              </div>
            </div>
          </button>

          <button className="relative h-48 w-full bg-gray-800 text-white rounded-lg overflow-hidden group transition-all duration-300 hover:bg-gray-700">
            <div className="absolute inset-0 flex flex-col">
              <div className="flex-1 flex items-center justify-center p-4 transition-all duration-300 group-hover:opacity-0">
                <span className="text-2xl font-semibold">PERFORMANCE BOND</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <p className="text-sm text-center">
                  Guarantees that the contractor completes the project according to the agreed terms and quality standards.
                </p>
              </div>
            </div>
          </button>

          <button className="relative h-48 w-full bg-gray-800 text-white rounded-lg overflow-hidden group transition-all duration-300 hover:bg-gray-700">
            <div className="absolute inset-0 flex flex-col">
              <div className="flex-1 flex items-center justify-center p-4 transition-all duration-300 group-hover:opacity-0">
                <span className="text-2xl font-semibold">PAYMENT BOND</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <p className="text-sm text-center">
                  Protects subcontractors, laborers, and suppliers by ensuring they receive payment for their work and materials.
                </p>
              </div>
            </div>
          </button>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default ContractBonds;
