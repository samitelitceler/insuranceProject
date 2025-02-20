import NavSection from "@/components/nav-section/nav";
import React from "react";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import boatInsure from '@/public/images/boatInsure.jpg';
const inter = Inter({ weight: ["400", "600", "700"], subsets: ["latin"] });

const BusinessInsurance = () => {
  return (
    <div className={inter.className}>
      <NavSection />
      <div className="w-full">
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center bg-black">
        <Image
          src={boatInsure.src}
          alt="Boat Insurance"
          layout="fill"
          objectFit="cover"
          className="opacity-70 bg-cover bg-center"
        />
       <div className="absolute inset-0  flex items-center pl-8 lg:pl-16">
          <div className="text-white max-w-lg">
            <h1 className="text-2xl lg:text-4xl font-semibold mb-4 text-left">Get a Quote Instantly</h1>
            <Button className="bg-red-600 font-bold w-72 text-white px-6 py-3 text-lg text-left">Start Quote</Button>
          </div>
        </div>
        </div>
        {/* Information Section */}
        <div className="p-4 md:p-8 text-xs md:text-sm">
        <h2 className="text-xl md:text-2xl text-red-600 font-semibold">Boat Insurance</h2>
          <p className="mb-4 mt-6">
            Whether you like to spend your weekends out fishing for walleye or
            just enjoy evenings out on the lake, we&apos;re here to help you do so
            with peace of mind. Anchor Insurance Agency offers high-quality boat
            and watercraft insurance policies to individuals and families
            throughout Minnesota, Wisconsin, Arizona, Florida, Nevada and
            Colorado.
          </p>

          <h2 className="font-semibold mb-2">
            Insurance for All Watercraft, From Jon Boats to Yachts
          </h2>
          <p className="mb-4">
            We&apos;re able to protect all types of boats or watercraft, from small
            jon boats to million-dollar yachts. Plus, we insure watercraft other
            insurance carriers don&apos;t like to cover such as jet skis and kayaks.
            Whatever floats your boat, we can insure it by offering several
            carrier options to choose from. Examples of coverage include:
          </p>
          <ul className="list-decimal list-inside mb-4">
            <li>Mechanical breakdown coverage</li>
            <li>Full replacement value coverage</li>
            <li>Collector boat coverage</li>
          </ul>

          <h2 className="font-semibold mb-2">
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

        {/* Form Section */}
        <div className="bg-red-700 p-6 md:p-10 text-white mt-12 mb-12">
        <Form/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BusinessInsurance;
