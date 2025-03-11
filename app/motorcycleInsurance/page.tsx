"use client";
import NavSection from "@/components/nav-section/nav";
import React from "react";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";
import Image from "next/image";
import motorInsure from "@/public/images/motorInsure.jpg";
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
          src={motorInsure.src}
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
              Motorcycle Insurance
            </h2>
            <h2 className="text-xl mt-8 md:text-2xl mt-3 font-semibold mb-4 font-sans">
              Protect Your Ride with Prime Insurance Services
            </h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              Whether you ride for leisure or depend on your motorcycle for daily transportation, having reliable motorcycle insurance is essential. Accidents, theft, and unexpected damages can be costly without the right coverage. At Prime Insurance Services, we provide customized motorcycle insurance to ensure you and your bike are protected wherever the road takes you.
            </p>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              Year-Round Protection for Your Motorcycle
            </h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              Some riders hit the road year-round, while others store their bikes during certain seasons. No matter how often you ride, your motorcycle needs protection at all times. Even when in storage, risks like theft, fire, and vandalism still exist. When on the road, accidents and liability concerns can lead to significant expenses. Our insurance policies offer comprehensive coverage for both riding and off-season storage.
            </p>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              Types of Motorcycle Insurance Coverage
            </h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              As an independent agency, Prime Insurance Services works with multiple insurance carriers to find the best coverage for your specific needs. Available motorcycle insurance policies include:
            </p>
            <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li>Liability Coverage – Protects against injury or property damage claims from an accident you cause.</li>
              <li>Collision Coverage – Covers repairs or replacement costs if your motorcycle is damaged in a crash.</li>
              <li>Uninsured/Underinsured Motorist Coverage – Provides protection if you&apos;re in an accident with a driver who lacks adequate insurance.</li>
              <li>Equipment Coverage – Covers upgrades, custom parts, and accessories added to your motorcycle.</li>
            </ul>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              We insure all types of motorcycles, from brand-new Harley-Davidsons to classic vintage bikes. Whatever you ride, we&apos;ve got you covered.
            </p>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              Stay Protected While You Ride
            </h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              In many states, motorcyclists are required to carry liability insurance and must have proof of coverage while riding. Liability insurance protects against legal fees and financial losses if you&apos;re involved in an accident. Additional coverage, such as collision, comprehensive, and medical payments insurance, can provide further protection for you and your motorcycle.
            </p>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              How to Choose the Right Motorcycle Insurance
            </h2>
            <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li>Evaluate Your Risks: Consider how often you ride, where you store your bike, and your accident risks.</li>
              <li>Check State Requirements: Ensure your policy meets legal requirements for motorcycle insurance in your state.</li>
              <li>Find the Right Balance: Get the protection you need at a price that fits your budget.</li>
              <li>Consult an Expert: Speak with our insurance specialists to customize a policy that works for you.</li>
            </ul>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              Ride with confidence knowing that Prime Insurance Services has your back. Contact us today to get a quote.
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
