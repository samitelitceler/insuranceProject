'use client';
import NavSection from "@/components/nav-section/nav";
import React from "react";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";
import Image from "next/image";
import motorInsure from '@/public/images/motorInsure.jpg';
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
        <div className="p-4 md:p-8 text-sm md:text-base">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-red-600 font-semibold font-sans">
            Motorcycle Insurance
          </h2>
          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
            Protect Your Motorcycle With Anchor Insurance Agency
          </h2>
          <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
            Whether you&apos;re a weekend rider or use your motorcycle as your main
            mode of transportation, you deserve high-quality protection.
            Motorcycle accidents are costly and can be detrimental to your
            wallet without insurance coverage. Anchor Insurance Agency offers
            high-quality and customized motorcycle insurance to individuals and
            families throughout Minnesota, Wisconsin, Arizona, Florida, Nevada
            and Colorado. Allow us to help protect you and your motorcycle as
            you enjoy the open road.
          </p>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
            Delivering Year-Round Protection for Your Motorcycle
          </h2>
          <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
            While some motorcyclists drive their motorcycles regardless of the
            season, others store them away in winter. No matter how you drive,
            we have insurance policies to help you protect your motorcycle
            year-round. While in storage, theft and fire are still risks that
            could affect your motorcycle. And while on the road, accidents pose
            a serious threat. It&apos;s best to be protected at all times.
          </p>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
            Types of Insurance Policies
          </h2>
          <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
            Anchor Insurance Agency is an independent agency. This means we have
            access to a wide range of insurance carriers, so we can choose the
            best coverage for your needs. Some of the motorcycle insurance
            policies we offer include:
          </p>
          <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
            <li>Liability coverage</li>
            <li>Collision coverage</li>
            <li>Uninsured and underinsured motorist coverage</li>
            <li>Equipment coverage for motorcycle upgrades</li>
          </ul>
          <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
            We&apos;re proud to be able to insure any kind of motorcycle, from your
            brand new Harley Davidson to your vintage Indian or super fast
            Honda. Whatever matters most to you, matters most to us.
          </p>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
            Protect Yourself While Enjoying Your Motorcycle Too
          </h2>
          <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
            n Minnesota, motorcyclists are required to hold certain insurance
            policies to protect themselves and others while on the road. All
            motorcyclists must have liability insurance and must carry proof of
            insurance any time they&apos;re on their bikes. Liability coverage helps
            protect you from legal fees in the event of an accident. Additional
            coverage such as collision coverage, comprehensive coverage, under
            and uninsured motorist coverage and medical payment coverage should
            be considered to protect yourself and your motorcycle.
          </p>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
            Tips for Managing Business Insurance
          </h2>
          <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
            <li>
              Review Annually: Business needs change, so reviewing policies
              annually ensures adequate coverage.
            </li>
            <li>
              Combine Policies: Bundling multiple coverages under one provider
              may offer discounts.
            </li>
            <li>
              Risk Management: Implement safety practices to minimize risks and
              reduce insurance costs.
            </li>
          </ul>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
            How to Choose the Right Insurance?
          </h2>
          <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
            <li>
              Assess Risks: Evaluate the specific risks associated with your
              industry and business activities.
            </li>
            <li>
              Legal Requirements: Check the mandatory insurance requirements in
              your region or industry.
            </li>
            <li>
              Budget Considerations: Balance coverage needs with affordability.
            </li>
            <li>
              Consult an Agent: Seek professional advice to tailor coverage to
              your business needs.
            </li>
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
