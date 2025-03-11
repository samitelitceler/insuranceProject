"use client";

import NavSection from "@/components/nav-section/nav";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";
import Image from "next/image";
import lifeInsure from '@/public/images/meetingbusiness.jpg';
import QuoteButton from "@/components/QuoteButton/QuoteButton";
import Carriers from "@/components/partnerCarriers/carriers";
const inter = Inter({ weight: ["400", "600", "700"], subsets: ["latin"] });

export default function lifeInsurance() {
  return (
    <div className={inter.className}>
      <NavSection />
      <div className="w-full">
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center bg-black">
        <Image
          src={lifeInsure.src}
          alt="Business Insurance"
          layout="fill"
          objectFit="cover"
          className="opacity-70 bg-cover bg-center"
        />
       <QuoteButton/>
        </div>
      </div>

      {/* Text Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-sm md:text-base">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mt-8 text-red-600 font-semibold font-sans">
            Life Insurance
          </h2>
          <h2 className="text-xl mt-8 md:text-2xl font-semibold mt-3 mb-4 font-sans">
            Secure Your Family&apos;s Future with Prime Insurance Services
          </h2>
          <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
            Life is unpredictable, but you can take steps today to protect your loved ones from financial hardship. 
            Life insurance provides essential financial support, covering everything from mortgage payments to daily 
            living expenses and funeral costs. With Prime Insurance Services, you can ensure your family&apos;s financial 
            stability no matter what the future holds.
          </p>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
            Why Life Insurance Matters
          </h2>
          <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
            Life insurance provides a lump-sum payment, known as a death benefit, to your beneficiaries in the event 
            of your passing. This financial support can help them:
          </p>
          <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
            <li>Replace lost income and maintain their standard of living</li>
            <li>Pay off outstanding debts, such as mortgages or loans</li>
            <li>Cover medical bills and funeral expenses</li>
            <li>Secure future financial goals, including education or retirement</li>
          </ul>
          <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
            Without life insurance, your family may face unexpected financial burdens, especially if you are the primary 
            income earner. A well-structured policy eliminates these uncertainties and provides long-term security.
          </p>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
            Life Insurance Policy Options
          </h2>
          <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
            Prime Insurance Services offers a variety of life insurance plans to meet different needs and financial goals:
          </p>
          <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
            <li>Term Life Insurance – Provides coverage for a specific period at an affordable rate</li>
            <li>Whole Life Insurance – Offers lifelong protection with cash value accumulation</li>
            <li>Universal Life Insurance – Provides flexible coverage with investment growth potential</li>
            <li>Annuities – Ensures financial security with guaranteed income for retirement</li>
            <li>Disability Insurance – Offers financial protection if you are unable to work due to injury or illness</li>
          </ul>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
            Choosing the Right Life Insurance Policy
          </h2>
          <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
            <li>Assess Your Needs – Consider financial obligations, future expenses, and income replacement</li>
            <li>Understand Policy Options – Compare term, whole, and universal life insurance benefits</li>
            <li>Consider Your Budget – Select a plan that balances affordability with long-term security</li>
            <li>Consult an Expert – Our experienced advisors help customize coverage to fit your specific situation</li>
          </ul>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
            Plan for Tomorrow, Today
          </h2>
          <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
            With Prime Insurance Services, you get personalized life insurance solutions designed to protect what matters 
            most—your family. Contact us today to explore the best options for your financial future.
          </p>
        </div>
      </div>

      <div>
          <Form  />
        </div>
        <div>
          <Carriers />
        </div>
      <Footer />  
    </div>
  );
}
