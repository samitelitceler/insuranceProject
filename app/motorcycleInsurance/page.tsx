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
          <span className="font-bold text-2xl">Motorcycle Insurance</span>
          <h2 className="font-semibold mb-2 mt-6">
            Protect Your Motorcycle With Anchor Insurance Agency
          </h2>
          <p className="mb-4">
            Whether you&apos;re a weekend rider or use your motorcycle as your main
            mode of transportation, you deserve high-quality protection.
            Motorcycle accidents are costly and can be detrimental to your
            wallet without insurance coverage. Anchor Insurance Agency offers
            high-quality and customized motorcycle insurance to individuals and
            families throughout Minnesota, Wisconsin, Arizona, Florida, Nevada
            and Colorado. Allow us to help protect you and your motorcycle as
            you enjoy the open road.
          </p>

          <h2 className="font-semibold mb-2">
            Delivering Year-Round Protection for Your Motorcycle
          </h2>
          <p className="mb-4">
            While some motorcyclists drive their motorcycles regardless of the
            season, others store them away in winter. No matter how you drive,
            we have insurance policies to help you protect your motorcycle
            year-round. While in storage, theft and fire are still risks that
            could affect your motorcycle. And while on the road, accidents pose
            a serious threat. It&apos;s best to be protected at all times.
          </p>

          <h2 className="font-semibold mb-2">Types of Insurance Policies</h2>
          <p className="mb-4">
            Anchor Insurance Agency is an independent agency. This means we have
            access to a wide range of insurance carriers, so we can choose the
            best coverage for your needs. Some of the motorcycle insurance
            policies we offer include:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Liability coverage</li>
            <li>Collision coverage</li>
            <li>Uninsured and underinsured motorist coverage</li>
            <li>Equipment coverage for motorcycle upgrades</li>
          </ul>
          <p className="mb-4">
            We&apos;re proud to be able to insure any kind of motorcycle, from your
            brand new Harley Davidson to your vintage Indian or super fast
            Honda. Whatever matters most to you, matters most to us.
          </p>

          <h2 className="font-semibold mb-2">
            Protect Yourself While Enjoying Your Motorcycle Too
          </h2>
          <p className="mb-4">
            n Minnesota, motorcyclists are required to hold certain insurance
            policies to protect themselves and others while on the road. All
            motorcyclists must have liability insurance and must carry proof of
            insurance any time they&apos;re on their bikes. Liability coverage helps
            protect you from legal fees in the event of an accident. Additional
            coverage such as collision coverage, comprehensive coverage, under
            and uninsured motorist coverage and medical payment coverage should
            be considered to protect yourself and your motorcycle.
          </p>

          <h2 className="font-semibold mb-2">
            Tips for Managing Business Insurance
          </h2>
          <ul className="list-disc list-inside mb-4">
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
