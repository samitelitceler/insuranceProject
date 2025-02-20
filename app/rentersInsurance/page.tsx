import React from "react";
import NavSection from "@/components/nav-section/nav";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";
import Image from "next/image";
import rentalInsure from '@/public/images/rentalInsure.jpg';
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
          src={rentalInsure.src}
          alt="Business Insurance"
          layout="fill"
          objectFit="cover"
          className="opacity-70 bg-cover bg-center"
        />
        <QuoteButton/>
        </div>
        {/* Information Section */}
        <div className="p-4 md:p-8 text-xs md:text-sm">
        <h2 className="text-xl md:text-2xl text-red-600 font-semibold">Renters Insurance</h2>
          <h2 className="font-semibold mb-2 mt-6">
            Renters Insurance: Added Protection for You & Your Home
          </h2>
          <p className="mb-4">
            Anyone who rents should have a renters insurance policy for the best
            protection. Maybe you&apos;re a college student renting your first
            apartment. Or, maybe you&apos;re renting while building your dream home.
            No matter how you rent, renters insurance is a must to protect your
            valuable belongings. Anchor Insurance Agency provides high-quality,
            customized insurance policies to renters throughout Minnesota,
            Wisconsin, Arizona, Florida, Nevada and Colorado. Plus, we&apos;re here
            to support you by answering your questions, helping you file claims
            and ensuring you understand your policy limits.
          </p>

          <h2 className="font-semibold mb-2">
            Why Should I Have Renters Insurance?
          </h2>
          <p className="mb-4">
            It&apos;s a common misconception that renters insurance is only a “nice
            to have” instead of a “must-have.” After all, many landlords still
            don&apos;t require you to carry separate insurance. The truth is that any
            renter should have insurance to ensure their belongings are
            protected. For example, if a fire broke out in your apartment
            complex, your landlord&apos;s insurance would cover the damage to the
            building. Yet, the landlord&apos;s insurance won&apos;t cover the loss of your
            personal belongings. It also won&apos;t cover the cost of someone getting
            hurt while visiting your home or property stolen due to a break-in.
          </p>

          <h2 className="font-semibold mb-2">
            What Does Renters Insurance Cover?
          </h2>
          <p className="mb-4">
            overage depends on the renters insurance policy you choose. However,
            common coverage includes:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Personal property</li>
            <li>Liability</li>
            <li>Additional living expenses</li>
          </ul>

          <h2 className="font-semibold mb-2">
            Delivering Customized Renters Insurance Policies
          </h2>
          <p className="mb-4">
            Insurance Agency strives to give you peace of mind in knowing your
            property is protected. We do so with decades of experience in the
            insurance industry and a dedication to creating customized policies
            that fit your unique needs. We&apos;re also here as your guide, answering
            your questions and ensuring you understand what&apos;s included in your
            policy. And if you ever need to file a claim, all you have to do is
            call—we&apos;ll be here.
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
