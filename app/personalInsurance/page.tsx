import NavSection from "@/components/nav-section/nav";
import React from "react";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";
import Image from "next/image";
import personalInsure from "@/public/images/personalInsure.jpg";
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
          src={personalInsure.src}
          alt="Business Insurance"
          layout="fill"
          objectFit="cover"
          className="opacity-70 bg-cover bg-center"
        />
       <QuoteButton/>
        </div>
        {/* Information Section */}
        <div className="p-4 md:p-8 text-base md:text-lg">
        <h2 className="text-3xl md:text-4xl text-red-600 font-semibold">
          Personal Insurance
        </h2>
          <h2 className="text-xl md:text-2xl font-semibold mb-2 mt-6">
            Personal Insurance Policies for Individuals & Families
          </h2>
          <p className="text-lg mb-4">
            From homes to cabins and condos to motorcycles, we offer a personal
            insurance policy to help you protect what matters most to you.
            Anchor Insurance Agency is an independent insurance agency serving
            individuals and families in the Twin Cities and throughout
            Minnesota. We can also take care of your insurance needs in
            Wisconsin, Arizona, Florida, Nevada and Colorado.
          </p>

          <h2 className="font-semibold mb-2">
            Fully Customizable Personal Insurance Policies
          </h2>
          <p className="mb-4">
            One car accident, break-in or tree limb through your roof could
            cause serious financial implications that feel impossible to come
            back from. Insurance can protect you from the unexpected. No two
            insurance policies we sell are the same—and they shouldn&apos;t be.
            Anchor Insurance Agency offers a wide range of customized personal
            insurance policies to fit your needs. We work with many insurance
            companies to deliver high-quality insurance options to each of our
            clients. Our insurance policies include:
          </p>
          <ul className="list-decimal list-inside text-lg mb-4">
            <li>Auto</li>
            <li>Home</li>
            <li>Life</li>
            <li>Condo</li>
            <li>Umbrella</li>
            <li>Boat and Watercraft</li>
            <li>Motorcycle</li>
            <li>Rental</li>
          </ul>
          <p className="mb-4">
            Already have an insurance policy? We&apos;ll take the time to complete a
            thorough review to ensure you have adequate protection and provide
            our recommendations. If you have an insurance policy that offers the
            right coverage at a competitive rate, we&apos;ll be sure to tell you so.
          </p>

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
        <div>
          <Form  />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BusinessInsurance;
