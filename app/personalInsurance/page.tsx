import NavSection from "@/components/nav-section/nav";
import React from "react";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero-section/hero";
import Form from "@/components/form/Form";
const inter = Inter({ weight: ["400", "600", "700"], subsets: ["latin"] });

const BusinessInsurance = () => {
  return (
    <div className={inter.className}>
      <NavSection />
      <div className="w-full">
        {/* Hero Section */}
        <Hero/>
        {/* Information Section */}
        <div className="p-4 md:p-8 text-xs md:text-sm">
          <span className="font-bold text-2xl">Personal Insurance</span>
          <h2 className="font-semibold mb-2 mt-6">
            Personal Insurance Policies for Individuals & Families
          </h2>
          <p className="mb-4">
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
          <ul className="list-decimal list-inside mb-4">
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
        <div className="bg-red-700 p-6 md:p-10 text-white mt-12 mb-12">
        <Form/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BusinessInsurance;
