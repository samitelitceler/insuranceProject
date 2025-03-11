"use client";
import NavSection from "@/components/nav-section/nav";
import React from "react";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";
import Image from "next/image";
import personalInsure from "@/public/images/personalInsure.jpg";
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
          src={personalInsure.src}
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
            Personal Insurance
          </h2>
          <h2 className="text-xl mt-8 md:text-2xl font-semibold mt-3 mb-4 font-sans">
            Comprehensive Personal Insurance for Individuals & Families
          </h2>
          <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
            Life is full of unexpected events, and having the right personal insurance ensures you and your loved ones are protected from financial setbacks. Whether it&apos;s your home, vehicle, or recreational assets, Prime Insurance Services provides customized insurance solutions designed to safeguard what matters most.
          </p>

          <h2 className="font-semibold mb-2">
            Tailored Coverage for Your Unique Needs
          </h2>
          <p className="mb-4">
            A single accident, home burglary, or storm-damaged roof can lead to overwhelming financial stress. With Prime Insurance Services, you get personalized insurance policies that offer reliable protection against the unexpected. We partner with leading insurance providers to deliver high-quality coverage options tailored to your specific needs.
          </p>
          <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
            <li>Auto Insurance – Protects your vehicle against accidents, theft, and liability.</li>
            <li>Home Insurance – Covers damages to your home and personal belongings.</li>
            <li>Life Insurance – Ensures financial security for your loved ones in the event of your passing.</li>
            <li>Condo Insurance – Provides coverage for condominium owners, including personal property and liability protection.</li>
            <li>Umbrella Insurance – Adds an extra layer of liability coverage beyond standard policies.</li>
            <li>Boat & Watercraft Insurance – Covers boats, jet skis, and other watercraft against damage and liability.</li>
            <li>Motorcycle Insurance – Offers protection for motorcycles, including liability and collision coverage.</li>
            <li>Rental Insurance – Protects renters from losses due to theft, fire, or other unexpected damages.</li>
          </ul>
          <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
            Already have an insurance policy? We offer policy reviews to assess whether your current coverage meets your needs. If you already have the right protection at a competitive rate, we&apos;ll be the first to tell you. If improvements can be made, we&apos;ll provide expert recommendations to enhance your coverage and savings.
          </p>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
            How to Choose the Right Personal Insurance?
          </h2>
          <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
            <li>
              Identify Potential Risks – Evaluate risks related to your home, vehicle, and lifestyle.
            </li>
            <li>
              Understand Legal Requirements – Ensure you meet state-mandated insurance requirements.
            </li>
            <li>
              Balance Budget & Coverage – Find a policy that provides sufficient protection without unnecessary costs.
            </li>
            <li>
              Seek Expert Advice – Our experienced agents help customize policies to fit your needs.
            </li>
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
