'use client';
import NavSection from "@/components/nav-section/nav";
import React from "react";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";
import Image from "next/image";
import condoInsure from '@/public/images/condoInsure.jpg';
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
          src={condoInsure.src}
          alt="Condo Insurance"
          layout="fill"
          objectFit="cover"
          className="opacity-70 bg-cover bg-center"
        />
       <QuoteButton/>
        </div>
        {/* Information Section */}
        <div className="p-4 md:p-8 text-sm md:text-base">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-red-600 font-semibold font-sans">
            Condo Insurance
          </h2>
          <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
            Condos and townhomes require additional insurance coverage beyond
            the typical homeowners&apos; insurance policy. Anchor Insurance Agency
            understands the unique factors involved in owning a condo and will
            help you develop a policy for quality protection.
          </p>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
            Condo Insurance Isn&apos;t the Same as Homeowners&apos; Insurance
          </h2>
          <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
            A condo or townhome isn&apos;t a free-standing structure like a typical
            home. They&apos;re also typically governed by a homeowners&apos; association
            (HOA). While HOAs typically have insurance policies, they often only
            cover the outside of the condo building and common areas. You may
            need additional coverage for the inside of your condo and your
            personal belongings.
          </p>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
            Our Condo Insurance Policy Options
          </h2>
          <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
            As an independent insurance agency, we work with several insurance
            carriers who provide high-quality condo insurance policies. This
            means we&apos;re able to vet a policy that fits your needs. Some of our
            coverage options include:
          </p>
          <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
            <li>Condo Liability</li>
            <li>Personal Property Protection</li>
            <li>Loss Assessment</li>
          </ul>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
            How to Choose the Right Insurance?
          </h2>
          <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
            <li>Assess Risks: Evaluate the specific risks associated with your industry and business activities.</li>
            <li>Legal Requirements: Check the mandatory insurance requirements in your region or industry.</li>
            <li>Budget Considerations: Balance coverage needs with affordability.</li>
            <li>Consult an Agent: Seek professional advice to tailor coverage to your business needs.</li>
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
