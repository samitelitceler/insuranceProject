"use client";

import React from "react";
import NavSection from "@/components/nav-section/nav";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";
import Image from "next/image";
import Carriers from "@/components/partnerCarriers/carriers";
import rentalInsure from "@/public/images/rentalInsure.jpg";
import QuoteButton from "@/components/QuoteButton/QuoteButton";
const inter = Inter({ weight: ["400", "600", "700"], subsets: ["latin"] });

const BusinessInsurance = () => {
  return (
    <div className={inter.className}>
      <NavSection />
      <div className="w-full">
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center bg-black">
        <Image
          src={rentalInsure.src}
          alt="Renters Insurance"
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
              Renters Insurance
            </h2>
            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              Protect Your Belongings and Your Peace of Mind
            </h2>
            <p className="text-[18px] text-[#393939] text-left mt-3 font-opensans font-medium leading-[30px] mb-5">
              Whether you&apos;re a college student renting your first apartment or temporarily renting while building your dream home, having Renters Insurance is essential. Your landlord&apos;s insurance covers the building, but it does not protect your personal belongings. At Prime Insurance Services, we offer customized renters insurance policies to ensure you are financially protected from unexpected losses.
            </p>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              Why Do You Need Renters Insurance?
            </h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              Many renters assume that insurance is optional, but without coverage, you could face significant financial losses in case of an accident or theft. Renters insurance provides:
            </p>
            <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li>Protection for Personal Belongings – Covers losses from fire, theft, vandalism, and other unexpected events.</li>
              <li>Liability Coverage – Helps cover legal and medical expenses if someone is injured in your rental unit.</li>
              <li>Coverage for Additional Living Expenses – Pays for temporary housing and related costs if your rental becomes uninhabitable due to a covered incident.</li>
            </ul>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              What Does Renters Insurance Cover?
            </h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              Coverage varies by policy, but common protections include:
            </p>
            <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li>Personal Property – Protects your furniture, electronics, clothing, and other belongings.</li>
              <li>Liability Protection – Covers medical expenses and legal fees if someone gets injured on your property.</li>
              <li>Additional Living Expenses – Covers hotel stays and other costs if you need to relocate temporarily due to a covered event.</li>
            </ul>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              Customized Renters Insurance to Fit Your Needs
            </h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              At Prime Insurance Services, we understand that every renter has unique needs. We offer personalized insurance solutions that provide comprehensive protection at an affordable price. Our team is always available to answer your questions, assist with claims, and help you understand your policy.
            </p>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              How to Choose the Right Coverage
            </h2>
            <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li>Evaluate Your Risks: Consider the value of your belongings and potential liability risks.</li>
              <li>Check Local Requirements: Understand any insurance requirements set by your state or landlord.</li>
              <li>Balance Coverage and Budget: Find a policy that offers the right level of protection at a price you can afford.</li>
              <li>Consult an Expert: Our insurance specialists can help you choose the best policy for your situation.</li>
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
