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
        <Hero />
        {/* Information Section */}
        <div className="p-4 md:p-8 text-xs md:text-sm">
        <h2 className="text-xl md:text-2xl text-red-600 font-semibold">Condo Insurance</h2>
          <p className="mb-4 mt-6">
            Condos and townhomes require additional insurance coverage beyond
            the typical homeowners&apos; insurance policy. Anchor Insurance Agency
            understands the unique factors involved in owning a condo and will
            help you develop a policy for quality protection.
          </p>

          <h2 className="font-semibold mb-2">
            Condo Insurance Isn&apos;t the Same as Homeowners&apos; Insurance
          </h2>
          <p className="mb-4">
            A condo or townhome isn&apos;t a free-standing structure like a typical
            home. They&apos;re also typically governed by a homeowners&apos; association
            (HOA). While HOAs typically have insurance policies, they often only
            cover the outside of the condo building and common areas. You may
            need additional coverage for the inside of your condo and your
            personal belongings. There&apos;s also no reason to pay for an entire
            homeowners&apos; insurance policy if your HOA covers some of the loss for
            you. Our team will carefully review your HOA policy to develop a
            condo policy that fits.
          </p>

          <h2 className="font-semibold mb-2">
            Our Condo Insurance Policy Options
          </h2>
          <p className="mb-4">
            As an independent insurance agency, we work with several insurance
            carriers who provide high-quality condo insurance policies. This
            means we&apos;re able to vet a policy that fits your needs. Some of our
            coverage options include:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Condo Liability</li>
            <li>Personal Property Protection</li>
            <li>Loss Assessment</li>
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
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BusinessInsurance;
