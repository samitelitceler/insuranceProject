"use client";
import React from "react";
import NavSection from "@/components/nav-section/nav";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";
import Image from "next/image";
import umbrellaInsure from "@/public/images/umbrellaInsure.jpg";
import QuoteButton from "@/components/QuoteButton/QuoteButton";
import Carriers from "@/components/partnerCarriers/carriers";
const inter = Inter({ weight: ["400", "600", "700"], subsets: ["latin"] });

const UmbrellaInsurance = () => {
  return (
    <div className={inter.className}>
      <NavSection />
      <div className="w-full">
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center bg-black">
          <Image
            src={umbrellaInsure.src}
            alt="Business Insurance"
            layout="fill"
            objectFit="cover"
            className="opacity-70 bg-cover bg-center"
          />
          <QuoteButton />
        </div>
        {/* Information Section */}
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-sm md:text-base">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mt-8 text-red-600 font-semibold font-sans">
              Umbrella Insurance: Extra Protection When You Need It Most
            </h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans mt-3 font-medium leading-[30px] mb-5">
              Standard homeowners and auto insurance policies provide essential coverage, but in some cases, they may not be enough. If a claim exceeds your existing policy limits, umbrella insurance steps in to fill the gap, protecting your assets and financial security.
            </p>
            <p className="text-[18px] text-[#393939] text-left font-opensans mt-3 font-medium leading-[30px] mb-5">
              At Prime Insurance Services, we help individuals and families secure additional liability coverage, ensuring peace of mind no matter what life brings.
            </p>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">What Is Umbrella Insurance?</h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              Umbrella insurance is a supplemental liability policy that works alongside your homeowners, auto, or other personal insurance policies. It provides additional coverage in case you are found legally responsible for an accident, injury, or property damage that exceeds the limits of your existing policies.
            </p>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              For example:
            </p>
            <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li>If you&apos;re involved in a multi-car accident resulting in severe injuries, and the claims exceed your auto insurance coverage, an umbrella policy covers the remaining costs.</li>
              <li>If someone suffers a serious injury on your property and sues for damages beyond what your homeowners&apos; insurance covers, an umbrella policy provides extra protection.</li>
              <li>If a family member, such as a teenage driver, causes a costly accident, your umbrella insurance can help cover the liability.</li>
            </ul>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              Umbrella insurance not only protects you but also extends coverage to your spouse and dependent family members, ensuring comprehensive protection.
            </p>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">Choosing the Right Umbrella Insurance Policy</h2>
            <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li>Assess Your Risk Exposure – Consider your lifestyle, assets, and potential liability risks.</li>
              <li>Review Existing Coverage – Determine whether your current policies provide enough liability protection.</li>
              <li>Understand Legal Requirements – While not legally required, umbrella insurance is highly recommended for added security.</li>
              <li>Work with an Expert – Our experienced agents help customize a policy that fits your needs and financial situation.</li>
            </ul>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">Why Choose Prime Insurance Services?</h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              With Prime Insurance Services, you receive personalized umbrella insurance solutions designed to provide financial protection beyond standard policies. Contact us today to explore your options and secure the extra coverage you need.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div>
          <Form />
        </div>
      </div>
        <div>
          <Carriers />
        </div>
      <Footer />
    </div>
  );
};

export default UmbrellaInsurance;
