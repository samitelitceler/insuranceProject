"use client";

import NavSection from "@/components/nav-section/nav";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";
import Image from "next/image";
import lifeInsure from '@/public/images/meetingbusiness.jpg';
import QuoteButton from "@/components/QuoteButton/QuoteButton";
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
      <div className="p-4 md:p-8 text-xs md:text-sm">
        <h2 className="text-xl md:text-2xl text-red-600 font-semibold">
          Life Insurance
        </h2>
        <h2 className="font-semibold mb-2 mt-6">
          {" "}
          Protect Your Loved Ones With Anchor Insurance Agency
        </h2>
        <p className="text-sm text-gray-700 mt-3">
          It&apos;s the place you and your No one knows what the future holds. Yet,
          you can take steps now to protect your loved ones in the event of your
          death. Life insurance provides financial support for everything from
          mortgage payments to funeral expenses. We&apos;re here to help you protect
          what matters most to you. And what matters more than family? Protect
          your loved ones&apos; future wellbeing with custom life insurance policies
          by Anchor Insurance Agency.
        </p>

        {/* Factors Affecting Premiums */}
        <h2 className="font-semibold mb-2 mt-6">
          Life Insurance: Financial Support for Your Family&apos;s Future
        </h2>
        <p className="text-sm text-gray-700 mt-3">
          Life insurance is designed to deliver financial support to your family
          if you should pass away. The beneficiaries you choose will receive a
          lump-sum payment called a death benefit, which they can use to replace
          lost income, repay debts and cover necessary expenses. Without life
          insurance, you run the risk of leaving your family responsible for any
          debt you leave behind. And if you&apos;re the primary income earner for
          your family, you may leave them reeling from financial loss. A
          comprehensive life insurance policy can eliminate these threats.
        </p>
        {/* Optional Add-Ons */}
        <h2 className="font-semibold mb-2 mt-6">
          Our Life Insurance Policy Options:
        </h2>
        <p className="text-sm text-gray-700 mt-3">
          There&apos;s a wide range of life insurance products available on the
          market today. And by partnering with 30 insurance companies, we&apos;re
          proud to be able to deliver them all. Some of the life insurance
          policies we offer include:
        </p>
        <ul className="list-disc list-inside text-sm text-gray-600 mt-1 space-y-1">
          <li>Term life</li>
          <li>Whole life</li>
          <li>Universal whole life</li>
          <li>Annuities</li>
          <li>Disability</li>
        </ul>

        <h2 className="font-semibold mb-2 mt-6">
          How to Choose the Right Insurance?
        </h2>
        <ul className="list-disc list-inside mb-4">
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

      <div>
          <Form  />
        </div>
      <Footer />
    </div>
  );
}
