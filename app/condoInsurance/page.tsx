"use client";
import NavSection from "@/components/nav-section/nav";
import React from "react";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";
import Image from "next/image";
import condoInsure from "@/public/images/condoInsure.jpg";
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
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-sm md:text-base">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mt-8 text-red-600 font-semibold font-sans">
              Condo Insurance
            </h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans mt-3 font-medium leading-[30px] mb-5">
              Owning a condo or townhome comes with unique insurance needs that differ from a standard homeowners&apos; policy. At Prime Insurance Services, we understand these differences and offer customized condo insurance policies to protect your property, belongings, and liability.
            </p>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              Why Condo Insurance is Different from Homeowners&apos; Insurance
            </h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              Unlike traditional homes, condos and townhomes are often governed by a Homeowners&apos; Association (HOA). While your HOA may have insurance, it typically only covers the exterior structure and common areas—leaving the interior of your unit and personal belongings unprotected. That&apos;s where condo insurance comes in.
            </p>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              Our Condo Insurance Coverage Options
            </h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              As an independent agency, we work with multiple insurance carriers to find the best policy for your needs. Coverage options include:
            </p>
            <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li>Condo Liability Coverage – Protects against legal and medical expenses if someone is injured in your condo</li>
              <li>Personal Property Protection – Covers your furniture, electronics, appliances, and valuables in case of damage or theft</li>
              <li>Loss Assessment Coverage – Helps cover costs if your HOA imposes a special assessment for damages not fully covered by their policy</li>
            </ul>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              Why Choose the Right Coverage
            </h2>
            <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li>Covers What Your HOA Policy Doesn&apos;t – Protects the interior of your unit and your belongings</li>
              <li>Provides Liability Protection – Covers legal and medical expenses if someone is injured inside your condo</li>
              <li>Ensures Financial Security – Helps cover unexpected repair or replacement costs</li>
              <li>Expert Guidance – Our team at Prime Insurance Services will help you customize the best policy for your needs</li>
            </ul>
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
